// Task 2: Write JavaScript code to handle form submissions and store user input in an object


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Task 3: Implement form validation to ensure that all required fields are filled before submission
    
    if (name === "" || email === "" || message === "") {
        document.getElementById("errorMessage").textContent = "Please fill out all input fields!";     
    } else {
        
        const formInfo = {
            name: name,
            email: email,
            message: message
        };

        console.log(formInfo);

        document.getElementById("contactForm").reset();
        document.getElementById("errorMessage").textContent = "";
        alert("Your form was submitted successfully! 😊");
    }
});