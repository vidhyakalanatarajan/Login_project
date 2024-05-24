import React, {useState, useEffect} from 'react';
import ParticlesComponent from './Particles';

function LoginForm(){
    const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
    return(
        <>
        <div className="app">
           <ParticlesComponent id="particle"/> 
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className='container1'>
                <div className="username">
                    <input type='text' name="username" placeholder="Username" id="username" value={formValues.username} 
                    onChange={handleChange}/>
                    </div>
                    <p>{formErrors.username}</p>
                <div className="password">
                    <input type='password' name="password" placeholder="Password" id="password" value={formValues.password}
                    onChange={handleChange}/>
                    <p>{formErrors.password}</p>
                    </div>
                    <div className="btn">
                      <h3>Forgot Password</h3>  
                    <button>submit</button>
                    </div>
                    </div>
            </div>
            </form>
            </div>
            </>
    );
}
export default LoginForm