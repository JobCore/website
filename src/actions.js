import validator from 'validator';
import { navigate } from "@reach/router"

export const signup = (jobseeker) => {
    let errorMsg = [];
    let formIsValid = false;
    let err; 
    if(jobseeker.password.length < 7){
        errorMsg.push("Password must be 8 character long");
        formIsValid = false   
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
           } else alert("Email already exists. Please try again.")
         }).catch( (error) => {
            console.log('Error 404')
           });

    }
   
    

    return errorMsg;
};
export const signupEmployer = (jobseeker) => {
    let errorMsg = [];
    let formIsValid = false;
    let err; 
    if(jobseeker.password.length < 7){
        errorMsg.push("Password must be 8 character long");
        formIsValid = false   
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
             body: JSON.stringify({ "email": jobseeker.email, "account_type": "employer", "username": jobseeker.email, "first_name": jobseeker.firstName, "last_name": jobseeker.lastName, "password": jobseeker.password, "phone":jobseeker.phone, "business_name": jobseeker.business_name, "business_website": jobseeker.business_website, "about_business": jobseeker.about_business })
           }).then(res=>res.json()).then(res => {
           if(res["id"]){
             navigate("/job-seekers-thankyou/")
           } else alert("Email already exists. Please try again.")
         }).catch( (error) => {
            console.log('Error 404')
           });

    }
   
    

    return errorMsg;
};