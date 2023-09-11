// Application state
let isLoggedIn = false;
let grades = [];

// Function to attempt login
const attemptLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username === "cool" && password === "password") {
        isLoggedIn = true;
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("grade-view-screen").style.display = "block";
        loadGradeList();
    } else {
        document.getElementById("login-error").textContent = "Incorrect username or password.";
    }
}

// Function to show the Add Grade screen
const showAddGradeScreen = () => {
    document.getElementById("grade-view-screen").style.display = "none";
    document.getElementById("add-grade-screen").style.display = "block";
}

// Function to add a grade
const addGrade = () => {
    const studentName = document.getElementById("student-name").value;
    const studentGrade = document.getElementById("student-grade").value;

    if (studentName && !isNaN(studentGrade) && studentGrade >= 0 && studentGrade <= 100) {
        grades.push({ name: studentName, grade: parseInt(studentGrade) });
        document.getElementById("add-grade-error").textContent = "";
        document.getElementById("student-name").value = "";
        document.getElementById("student-grade").value = "";
        showGradeViewScreen();
    } else {
        document.getElementById("add-grade-error").textContent = "Invalid input. Please check the student name and grade.";
    }
}

// Function to show the Grade View screen
const showGradeViewScreen = () => {
    document.getElementById("add-grade-screen").style.display = "none";
    document.getElementById("grade-view-screen").style.display = "block";
    loadGradeList();
}

// Function to load and display the list of grades
const loadGradeList = () => {
    const gradeList = document.getElementById("grade-list");
    gradeList.innerHTML = "";

    if (grades.length === 0) {
        gradeList.innerHTML = "<p>No grades added yet.</p>";
    } else {
        const ul = document.createElement("ul");
        for (const grade of grades) {
            const li = document.createElement("li");
            li.textContent = `${grade.name}: ${grade.grade}`;
            ul.appendChild(li);
        }
        gradeList.appendChild(ul);
    }
}