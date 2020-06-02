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

        //ask the user how many characters the password will be in total length, ensure the number is an integer
        var numChar = prompt("How many characters are required for this password? Choose a number between 8 and 128.");
        parseInt(numChar);

        //make sure that the password is only generator for numbers that fall within the criteria of being between 8 and 128
        if (numChar >= 8 && numChar <= 128) {

            //alert the user of the coming questions and set boolean variables to true or false for further analysis
            alert("The following questions will determine which character types the password should include");
            var upperChar = confirm("Should the password contain uppercase letters? OK = Yes, Cancel = No");
            var lowerChar = confirm("Should the password contain lowercase letters? OK = Yes, Cancel = No");
            var numericChar = confirm("Should the password include numeric characters (0123456789)? OK = Yes, Cancel = No ");
            var specialChar = confirm("Should the password include special characters (!#$%&'()*+./:;<=>?@{^_{|}~)? OK = Yes, Cancel = No ");

            //create a password containing all 4 character types with a length stated above
            if (upperChar && lowerChar && numericChar  && specialChar){

                //bank of characters which will be selected at random by generating a number and charAT to that character
                var alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!#$%&'()*+./:;<=>?@{^_{|}~";

                //for loop used to geneerate a string of proper length, and write this password to the element ID in the jumbotron on the HTML page
                for (i = 0; i < numChar; i++){

                    var number = getRandomInt(88);
                    password += alphabet.charAt(number);
                    document.getElementById("Password").textContent = password;
                }

            //create a password containing only 3 of the character types with a length stated above, each else if statement and for loop follows the same syntax and comments as above
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
                
            //if the user does not select a single character type to make up the passsword, an error code will be shown
            } else

                alert("The password must contain at least one type of character")
        
        //the user must enter a number between 8 and 128 and it must be an integer or the error code below will be shown
        } else

            var numChar = alert("Sorry! Password length must be an integer between 8 and 128.");

    //if the user clicked the generate password button but decides they no longer want to carry out the function, the following alert will be shown
    } else

        alert("thanks for visiting!");

} //end of generate password function

//the following syntax ensures that the javascript generatePassword function will only be executed on the click of the generate password button
generateBtn.addEventListener("click", generatePassword);