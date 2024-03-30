import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const SignUp = () => {
    const handleSubmit = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        //create user 
        createUserWithEmailAndPassword(auth, email, password).then(userCred => console.log(userCred)).catch(error => console.log(error));

        console.log('submitted', email, password);
    }
    return (
        <div>
            <h2 className="text-center text-4xl font-bold bg-slate-300 p-5 rounded-lg">Sign Up</h2>
            <form className="mx-auto bg-slate-200 w-3/4  p-12 mt-10 rounded-lg" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" className="p-4 w-full m-4 mb-4 rounded-lg bg-white text-gray-500 border border-slate-600" />
                <input type="password" name="password" placeholder="Password" className="p-4 w-full m-4 mb-4 rounded-lg bg-white text-gray-500 border border-slate-600" />
                <button className="p-4 w-full m-4 mb-4 rounded-lg bg-slate-500 text-white font-bold border border-slate-400">Submit</button>
            </form>
        </div>
    );
};

export default SignUp;