import React, {useState} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { navigate } from "@reach/router"
/* eslint-disable */

const Login = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const login = async (user) => {
        setLoading(true)
        const url = 'https://jobcore.herokuapp.com/api/login';
        const settings = {  
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "username_or_email": user.email, "password": user.password })
        };
        try {
            const fetchResponse = await fetch(url, settings);
            const data = await fetchResponse.json();
            if(data["non_field_errors"]){
              setErrors(data["non_field_errors"])
              setLoading(false)
            }else if(data["user"]["profile"]["employer"] !== null){
              navigate("https://employer.jobcore.co/?token=" + data["token"])
            console.log("JobCore Employer")
            }else if(data["user"]["profile"]["employee"] !== null){
                navigate("https://jobcore-employer.firebaseapp.com/login?type=employee")
            }
            return data;
        } catch (e) {
            return e;
        }    
      
      }
    const handleSubmit = (event) => {
     if(event){
         event.preventDefault();
 login(inputs);

     }
    
    }
    console.log(errors)
    const handleInputChange = (event) => {
      event.persist();
        
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }
console.log(inputs)
    return(
        <Layout>
        <SEO title="Login" />
            <div className="d-none d-lg-block">


    
        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 style={{fontSize:"3.5vw"}}>
                    <span className="p-2 px-4 bg-black-opacity">Login Your
                        <span className="text-brightblue"> Account</span>
                    </span>
                </h1>
            </div>
        </div>
        {errors[0] ? (
        <div className="row text-center justify-content-center">
            <div className="col col-md-4">
        <div class="alert alert-danger text-center mx-auto" role="alert">
    {errors[0]}
</div>

            </div>
        </div>

        ): null}
        <div className="container mx-auto">
            <div className="mx-auto w-400px pt-0">
                <h2 style={{fontWeight: "bold"}}>Login</h2>
                        <form onSubmit={handleSubmit}>
                <div className="form-group py-1">
                        <label className=""><h6>Email</h6></label>
                        <div class="icon_form">
  <span class="fas fa-envelope"></span>
  <input placeholder="example@gmail.com" maxlength="59" type="text" name="email" onChange={handleInputChange} value={inputs.email} required/>
</div>
                    </div>
                <h6 className="mt-4" style={{fontWeight: "bold"}}>Password</h6>
                <div class="icon_form">
  <span class="fas fa-lock"></span>
  <input placeholder="" maxlength="59" type="password" name="password" onChange={handleInputChange} value={inputs.password} required/>
</div>
                <div className="pt-3 text-gray">
                    <small>
                        <input type="checkbox" /> Remember Password
                    </small>
                </div>
                <button
                    className="btn radius btn-purple mt-4  px-5 py-2"
                    type="submit"
                    onSubmit={handleSubmit}
                    disabled = {loading ? true : false}
                >
                    {!loading ? "Login" : "Loading..."}
                </button>
                </form>
                <div className="pt-3 mb-5">
                    <small className="text-secondary">Don't have an account?
                        <Link to="/employers-signup/">
                            <span className="text-success"> Sign Up Now</span>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="d-none d-block d-sm-block d-md-block d-lg-none mt-5 mb-5 text-center">
         <h1>You need to login from a desktop.</h1>
        </div>

        </div>
    </Layout>

    )
}

export default Login
