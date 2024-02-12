// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.




function validate_password(password){
    if(password.length<8){
        return false
    }

    let hasUpperCase=false
    let hasLowerCase=false
    let hasDigit=false

    for(let i=0;i<password.length;i++){
        let char=password.charAt(i)

        if(char>='A'  && char<='Z'){
            hasUpperCase=true
        }
        else if(char>='a'  && char<='z'){
            hasLowerCase=true
        }
        else if(char>='0'  && char<='9'){
            hasDigit=true
        }
    }
    return hasUpperCase && hasLowerCase && hasDigit;
}

let password="siddharth123"

if(validate_password(password)){
    console.log("Password is valid")
}
else{
    console.log("The password must contain at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit");
}