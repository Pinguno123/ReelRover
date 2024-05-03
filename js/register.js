var registerForm = document.getElementById('register-form');
var userInput = document.getElementById('input-Createname');
var passwordInput = document.getElementById('input-Createpass');
var emailInput = document.getElementById('email');
var submitButton = document.getElementById('popup-submitButton-register');

function validateAndRegister(event) {
    event.preventDefault();

    var username = userInput.value;
    var password = passwordInput.value;
    var email = emailInput.value;

    var isValid = true;
    var errorMessage = "";

    if (!username) {
        isValid = false;
        // Check for login page and translate message
        if (document.location.pathname === "/landingPageEnglish.html") {
            errorMessage += "Username cannot be empty.\n";
        } else {
            errorMessage += "El usuario no puede estar vacio.\n";
        }
    }

    if (!password) {
        isValid = false;
        // Check for login page and translate message
        if (document.location.pathname === "/landingPageEnglish.html") {
            errorMessage += "Password cannot be empty.";
        } else {
            errorMessage += "La contraseña no puede estar vacia.";
        }
    }

    if (isValid) {
        let Users;
        const storedUsers = localStorage.getItem("users");
        if (storedUsers !== null) {
            Users = JSON.parse(storedUsers);
        } else {
            Users = [];
        }
        
        const isUserRegistered = Users.find(user => user.email === email);
        if (isUserRegistered) {
            errorMessage = (document.location.pathname === "/landingPageEnglish.html") ?
                "The email is already taken\n" :
                "El correo ya ha sido usado.\n";
        
            errorExistentUser(errorMessage);
        } else {
            Users.push({ name: username, password: password, email: email });
            localStorage.setItem('users', JSON.stringify(Users));
        
            // Verificar si se guardó correctamente en el localStorage
            if (localStorage.getItem('users') === JSON.stringify(Users)) {
                var succesRegistermsg = "";
        
                succesRegistermsg = (document.location.pathname === "/landingPageEnglish.html") ?
                    "The user was created successfully\n" :
                    "El usuario fue creado con éxito\n";            
        
                succesRegister(succesRegistermsg);
                
                setTimeout(function(){
                    window.location.href = "index.html";
                    // registerForm.submit();
                }, 2000);
        
                // Crear el objeto sesionActual utilizando username en lugar de validUser.name
                var sesionActual = {name: username, password: password, email: email};
                sessionStorage.setItem('currentSesson', JSON.stringify(sesionActual));              
            }        
        }        
        
    } else {
        registerError(errorMessage);
    }
}

registerForm.addEventListener('submit', validateAndRegister, false);