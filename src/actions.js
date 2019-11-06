import validator from 'validator';
import { navigate } from "@reach/router"

export const signup = (jobseeker) => {
    let errorMsg = [];
    let formIsValid = false;
    

    if(jobseeker.password.length < 7){
        errorMsg.push("Password must be 8 character long");
        formIsValid = false   
        console.log("small password")
    }
    if (jobseeker.password !== jobseeker.repeatPassword){
        errorMsg.push("Password do not match");
        formIsValid = false
    }
    if(errorMsg.length === 0){
        formIsValid = true
    }

    if(formIsValid){
        fetch('https://jobcore-test.herokuapp.com/api/user/register', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": jobseeker.email, "account_type": "employee", "username": jobseeker.email, "first_name": jobseeker.firstName, "last_name": jobseeker.lastName, "password": jobseeker.password, "phone":jobseeker.phone  })
          }).then(res=>res.json()).then(res => {
          if(res["id"]){
            navigate("/login")
          }
        }).catch (error => {
            console.log('Request failed', error);
        });

    }else{
        console.log("unable to login")
    }
};