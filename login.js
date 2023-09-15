// Sample user data (replace with a real database)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

// Elements
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const securedPage = document.getElementById("securedPage");
const logoutButton = document.getElementById("logoutButton");

// Event listeners
registerForm.addEventListener("submit", register);
loginForm.addEventListener("submit", login);
logoutButton.addEventListener("click", logout);

// Functions
function register(e) {
    e.preventDefault();
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;

    // Check if the username is already taken
    if (users.some(user => user.username === regUsername)) {
        alert("Username is already taken. Please choose another.");
        return;
    }

    // Add the new user to the list (you should hash the password in a real system)
    users.push({ username: regUsername, password: regPassword });

    // Clear the registration form
    registerForm.reset();
    alert("Registration successful. You can now log in.");
}

function login(e) {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Check if the username and password match any user
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        // Hide the login form and show the secured page
        loginForm.reset();
        loginForm.style.display = "none";
        securedPage.style.display = "block";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function logout() {
    // Clear the user's session and show the login form
    loginForm.style.display = "block";
    securedPage.style.display = "none";
}
