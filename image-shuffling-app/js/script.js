document.addEventListener("DOMContentLoaded", () => {
    const firstTextbox = document.getElementById("first");
    const lastTextbox = document.getElementById("last");
    const goButton = document.getElementById("go");

    goButton.addEventListener("click", () => {
        const firstValue = firstTextbox.value.trim();
        const lastValue = lastTextbox.value.trim();

        if (!isValidInput(firstValue) || !isValidInput(lastValue)) {
            alert("Wrong");
            if (!isValidInput(firstValue)) {
                firstTextbox.classList.add("pink-background");
                firstTextbox.focus();
            }
            if (!isValidInput(lastValue)) {
                lastTextbox.classList.add("pink-background");
                lastTextbox.focus();
            }
            return;
        }

        firstTextbox.classList.remove("pink-background");
        lastTextbox.classList.remove("pink-background");

        if (firstValue.localeCompare(lastValue) >= 0) {
            alert("Wrong order");
            firstTextbox.classList.add("yellow-background");
            lastTextbox.classList.add("yellow-background");
            return;
        }

        firstTextbox.classList.remove("yellow-background");
        lastTextbox.classList.remove("yellow-background");

        removeDivs();

        const topDiv = document.getElementById("top");
        const middleDiv = document.getElementById("middle");
        const bottomDiv = document.getElementById("bottom");

        const imageRange = getImageRange(firstValue, lastValue);

        for (const letter of imageRange) {
            const image = document.createElement("img");
            image.src = `./img/${letter}.png`;
            image.addEventListener("dblclick", function () {
                moveMe(image);
            });

            if (topDiv.children.length < 8) {
                topDiv.appendChild(image);
            } else if (middleDiv.children.length < 8) {
                middleDiv.appendChild(image);
            } else {
                bottomDiv.appendChild(image);
            }
        }
    });

    document.addEventListener("keydown", (event) => {
        const firstValue = firstTextbox.value.trim();
        const lastValue = lastTextbox.value.trim();

        if (event.key.RegExp.exec(/[a-zA-Z]/)) {
            const letter = event.key.toLowerCase();
            highlightLetter(letter);
        } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            if (!isValidInput(firstValue) || !isValidInput(lastValue)) {
                return;
            }
            const highlightedLetter = document.querySelector(".highlighted");
            if (highlightedLetter) {
                if (event.key === "ArrowLeft") {
                    moveLeft(highlightedLetter);
                } else if (event.key === "ArrowDown") {
                    moveDown(highlightedLetter);
                }
            }
        }
    });

    const isValidInput = (value) => {
        return value.length === 1 && value.match(/[a-zA-Z]/);
    }

    const removeDivs = () => {
        const topDiv = document.getElementById("top");
        const middleDiv = document.getElementById("middle");
        const bottomDiv = document.getElementById("bottom");

        while (topDiv.firstChild) {
            topDiv.removeChild(topDiv.firstChild);
        }
        while (middleDiv.firstChild) {
            middleDiv.removeChild(middleDiv.firstChild);
        }
        while (bottomDiv.firstChild) {
            bottomDiv.removeChild(bottomDiv.firstChild);
        }
    }

    const highlightLetter = (letter) => {
        const highlightedLetter = document.querySelector(".highlighted");
        if (highlightedLetter) {
            highlightedLetter.classList.remove("highlighted");
        }
        const images = document.querySelectorAll("img");
        for (const image of images) {
            if (image.src.toLowerCase().includes(letter)) {
                image.classList.add("highlighted");
            }
        }
    }

    const moveMe = (image) => {
        const topDiv = document.getElementById("top");
        const middleDiv = document.getElementById("middle");
        const bottomDiv = document.getElementById("bottom");

        if (topDiv.contains(image)) {
            moveLeft(image);
        } else if (middleDiv.contains(image)) {
            moveDown(image);
        } else if (bottomDiv.contains(image)) {
            moveDown(image);
        }
    }

    const moveLeft = (image) => {
        const topDiv = document.getElementById("top");
        const images = topDiv.getElementsByTagName("img");
        const currentIndex = Array.from(images).indexOf(image);
        if (currentIndex > 0) {
            topDiv.insertBefore(image, images[currentIndex - 1]);
        }
    }

    const moveDown = (image) => {
        const topDiv = document.getElementById("top");
        const middleDiv = document.getElementById("middle");
        const bottomDiv = document.getElementById("bottom");

        if (topDiv.contains(image)) {
            if (middleDiv.children.length < 8) {
                middleDiv.appendChild(image);
            } else {
                bottomDiv.appendChild(image);
            }
        } else if (middleDiv.contains(image)) {
            if (bottomDiv.children.length < 8) {
                bottomDiv.appendChild(image);
            } else {
                topDiv.appendChild(image);
            }
        } else if (bottomDiv.contains(image)) {
            if (topDiv.children.length < 8) {
                topDiv.appendChild(image);
            } else {
                middleDiv.appendChild(image);
            }
        }
    }

    const getImageRange = (first, last) => {
        const range = [];
        for (let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
            range.push(String.fromCharCode(i));
        }
        return range;
    }
});
