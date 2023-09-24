const n = 40;
let array = [];
const contentData = document.querySelector(".content-data");
const soundEffect = document.querySelector(".sound-effect");
let sortInProgress = false;

const generateRandomArray = () => {
    array = [];
    for (let index = 0; index < n; index++) {
        array[index] = Math.random();
    }
    updateBars();
}

const updateBars = () => {
    contentData.innerHTML = "";
    array.forEach((value) => {
        const bar = document.createElement("div");
        bar.style.height = value * 96 + "%";
        bar.style.width = "16%";
        bar.style.backgroundColor = "#4F98CA";
        bar.style.borderRadius = "8px 8px 0 0";
        contentData.appendChild(bar);
    });
}

const playSoundEffect = () => {
    soundEffect.currentTime = 0;
    soundEffect.play();
}

const visualizeSort = async (sortType, sortFunction) => {
    if (sortInProgress) return;
    sortInProgress = true;
    generateRandomArray();
    document.querySelector(".sort-name").textContent = `- ${sortType} Sort`;
    await sortFunction();
    sortInProgress = false;
}

const bubbleSort = async () => {
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                updateBars();
                playSoundEffect();
                await sleep(100);
                swapped = true;
            }
        }
        n--;
    } while (swapped);
}

const quickSort = async () => {
    const partition = async (low, high) => {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
                updateBars();
                playSoundEffect();
                await sleep(100);
            }
        }

        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        updateBars();
        playSoundEffect();
        await sleep(100);
        return i + 1;
    }

    const quickSortRecursive = async (low, high) => {
        if (low < high) {
            const pivotIndex = await partition(low, high);
            await quickSortRecursive(low, pivotIndex - 1);
            await quickSortRecursive(pivotIndex + 1, high);
        }
    }

    await quickSortRecursive(0, array.length - 1);
}

const mergeSort = async () => {
    const merge = async (left, mid, right) => {
        const leftSize = mid - left + 1;
        const rightSize = right - mid;
        const leftArray = array.slice(left, mid + 1);
        const rightArray = array.slice(mid + 1, right + 1);

        let i = 0;
        let j = 0;
        let k = left;

        while (i < leftSize && j < rightSize) {
            if (leftArray[i] <= rightArray[j]) {
                array[k++] = leftArray[i++];
            } else {
                array[k++] = rightArray[j++];
            }
            updateBars();
            playSoundEffect();
            await sleep(100);
        }

        while (i < leftSize) {
            array[k++] = leftArray[i++];
            updateBars();
            playSoundEffect();
            await sleep(100);
        }

        while (j < rightSize) {
            array[k++] = rightArray[j++];
            updateBars();
            await sleep(100);
        }
    }

    const mergeSortRecursive = async (left, right) => {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            await mergeSortRecursive(left, mid);
            await mergeSortRecursive(mid + 1, right);
            await merge(left, mid, right);
        }
    }

    await mergeSortRecursive(0, array.length - 1);
}

const selectionSort = async () => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            updateBars();
            playSoundEffect();
            await sleep(100);
        }
    }
}

const startSort = (sortType) => {
    if (sortType === "bubble") {
        visualizeSort("Bubble", bubbleSort);
    } else if (sortType === "quick") {
        visualizeSort("Quick", quickSort);
    } else if (sortType === "merge") {
        visualizeSort("Merge", mergeSort);
    } else if (sortType === "selection") {
        visualizeSort("Selection", selectionSort);
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const buttons = document.querySelectorAll("button[data-sort-type]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sortType = button.getAttribute("data-sort-type");
        startSort(sortType);
    });
});