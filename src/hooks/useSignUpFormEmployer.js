import React, {useState, useEffect} from 'react';
import {signup, registeremployer, signupValidation} from '../actions'
import validator from 'validator';
import { navigate } from "@reach/router"
/* eslint-disable */


const useSignUpForm = (queryEmail, accountType) => {
  const [inputs, setInputs] = useState({
    business_email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    phone: "",
    business_name: "",
    business_website: "",
    about_business: ""
  });
  useEffect(() => setInputs(inputs => ({...inputs, email: window.location.search.replace("?email=", '')})), []);

  const [errors, setErrors] = useState('');
  const [submitData, setSubmitData] = useState(0);

  const registerEmployer = async (employer) => {
    const url = 'https://jobcore-test.herokuapp.com/api/user/register';
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
             body: JSON.stringify({ "email": employer.business_email, "account_type": "employer", "username": employer.business_email, "first_name": employer.firstName, "last_name": employer.lastName, "password": employer.password, "phone":employer.phone, "business_name": employer.business_name, "business_website": employer.business_website, "about_business": employer.about_business })
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        if(data["non_field_errors"]){
          setErrors(["This email already exist."])
        }else if(data["id"]){
          navigate("/login")
        }
        return data;
    } catch (e) {
        return e;
    }    
  
  }
  const handleSubmit = (event) => {
    setSubmitData(inputs)
    if (event) {
      let employer = Object.assign(inputs, {account_type : accountType})
      event.preventDefault();
      var errorMsg = [];
    let formIsValid = false;

    if(validator.isEmpty(employer.firstName)){
      errorMsg.push("First name is required");
      formIsValid = false   
    }
    if(validator.isEmpty(employer.lastName)){
      errorMsg.push("Last name is required");
      formIsValid = false   
    }
    if(validator.isEmpty(employer.business_email)){
      errorMsg.push("Business email is required");
      formIsValid = false   
    } else  if(!validator.isEmail(employer.business_email)){
      errorMsg.push("Invalid email address");
      formIsValid = false   
  }
    if(validator.isEmpty(employer.phone)){
      errorMsg.push("Phone number is required");
      formIsValid = false   
    }
    if(validator.isEmpty(employer.password)){
      errorMsg.push("Password is required");
      formIsValid = false   
    } else   if(employer.password.length < 7){
      errorMsg.push("Password must be 8 character long");
      formIsValid = false   
  } else if (employer.password !== employer.repeatPassword){
    errorMsg.push("Password do not match");
    formIsValid = false
}

    if(validator.isEmpty(employer.business_name)){
      errorMsg.push("Business name is required");
      formIsValid = false   
    }
    if(validator.isEmpty(employer.about_business)){
      errorMsg.push("About your business is required");
      formIsValid = false   
    }
   
  
    if(validator.isEmpty(employer.business_website)){
      errorMsg.push("Business website is required");
      formIsValid = false   
    } else if (!validator.isURL(employer.business_website)){
      errorMsg.push("Invalid website");
      formIsValid = false   
    }
    if(errorMsg.length === 0){
        formIsValid = true
    }
    if(formIsValid){
      registerEmployer(employer)
    
    }
     setErrors(errorMsg); 
    }
  }
  const handleInputChange = (event) => {
    event.persist();
      
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      submitData,
      handleInputChange,
      inputs,
      errors,
      handleSubmit,
    };
  }

  export default useSignUpForm;