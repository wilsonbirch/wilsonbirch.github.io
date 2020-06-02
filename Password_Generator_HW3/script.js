// set the variable for when the generate button is pressed
var generateBtn = document.querySelector("#generate");
var i=0;

//fuction that will be used to generate random #'s which will correspond to characters used in the password
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//function that will be used to generate the password for the script
function generatePassword(){

    //Alert the user to what the program wil lbe doing and ask if they want to participate, reset password variable to empty
    var result = confirm("Hello, this tool will help you generate a password for a certain set of criteria, first I need to gather some information from you, do you accept?");
    var password = '';

    //If they do want to participate, run the following function
    if (result){

        var numChar = prompt("How many characters are required for this password? Choose a number between 8 and 128");
        parseInt(numChar);

        if (numChar >= 8 && numChar <= 128) {

            alert("The following questions will determine which character types the password should include");
            var upperChar = confirm("Should the password contain uppercase letters?");
            var lowerChar = confirm("Should the password contain lowercase letters?");
            var numericChar = confirm("Should the password include numeric characters? (0123456789)");
            var specialChar = confirm("Should the password include special characters? (!#$%&'()*+./:;<=>?@{^_{|}~)");

            if (upperChar && lowerChar && numericChar  && specialChar){

                var alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!#$%&'()*+./:;<=>?@{^_{|}~";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(88);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;

    
                }

            } else if (upperChar && lowerChar && numericChar){

                var alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(62);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;

    
                }

            } else if (upperChar && lowerChar && specialChar){

                var alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!#$%&'()*+./:;<=>?@{^_{|}~";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(78);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }

            } else if (upperChar && numericChar && specialChar){

                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVQXYZ0123456789!#$%&'()*+./:;<=>?@{^_{|}~";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(62);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }

            } else if (lowerChar && numericChar && specialChar){

                var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+./:;<=>?@{^_{|}~";
                    for (i = 0; i < numChar; i++){

                    var number = getRandomInt(62);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }

            } else if (upperChar && lowerChar){
                
                var alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(52);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }

            } else if (upperChar && numericChar){
                
                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVQXYZ0123456789";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(36);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (upperChar && specialChar){
                
                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVQXYZ!#$%&'()*+./:;<=>?@{^_{|}~";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(52);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (lowerChar && numericChar){
                
                var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(36);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (lowerChar && specialChar){
                
                var alphabet = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+./:;<=>?@{^_{|}~";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(52);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (numericChar && specialChar){
                
                var alphabet = "0123456789!#$%&'()*+./:;<=>?@{^_{|}~";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(36);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (numericChar){
                
                var alphabet = "0123456789";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(10);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (lowerChar){
                
                var alphabet = "abcdefghijklmnopqrstuvwxyz";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(26);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (upperChar){
                
                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(26);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else if (specialChar){
                
                var alphabet = "!#$%&'()*+./:;<=>?@{^_{|}~";
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(26);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }
                
            } else

                alert("The password must contain at least one type of character")
            
        } else

            var numChar = alert("Sorry! Password must be between 8 and 128 characters");

    } else

        alert("thanks for visiting!");

} //end of generate password function



generateBtn.addEventListener("click", generatePassword);
