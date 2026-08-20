const goodpass = "sc4rrd_pen15";

function validatePassword() {
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("errorMsg");
    
    if (inputPassword === goodpass) {
        // Hide login form and show protected content
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("container").style.display = "block";
        errorMsg.textContent = "";
    } else {
        // Show error message
        errorMsg.textContent = "Incorrect. Don't know? Maybe you aren't supposed to.";
        document.getElementById("passwordInput").value = "";
        document.getElementById("passwordInput").focus();
    }
}

function enter2submit() {
    // Allow Enter key to submit
    document.getElementById("passwordInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            validatePassword();
        }
    });
}