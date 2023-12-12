const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "eagle1" && password === "carryingthebanner") {
        window.location.href = "./admin.html";
    }
    else if (username === "eagle2" && password === "programmerihardlyknowher") {
        window.location.href = "./admin.html";
    }
    else {window.open("https://www.w3schools.com");}
})