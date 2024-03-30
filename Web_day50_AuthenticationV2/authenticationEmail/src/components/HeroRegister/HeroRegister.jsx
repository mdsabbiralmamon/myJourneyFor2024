import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const HeroRegister = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        //reset error
        setErrorMessage('');
        setSuccessMessage('');

        //validation
        if (password.length <= 6) {
            setErrorMessage('password should be 6 char long');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setErrorMessage('password should contain at least 1 Capital letter');
            return;
        }

        //create user 
        createUserWithEmailAndPassword(auth, email, password).then(userCred => {
            setSuccessMessage('user created successfully')
            console.log(userCred);
        }).catch(error => {
            const errMsg = error.message;
            setErrorMessage(errMsg);
            console.log(error);
        });

        console.log('submitted', email, password);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={() => setShowPassword(!showPassword)}>show</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                errorMessage && <div><p className="text-red-500 font-bold">{errorMessage}</p></div>
                            }
                            {
                                successMessage && <div><p className="text-green-500 font-bold">{successMessage}</p></div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;