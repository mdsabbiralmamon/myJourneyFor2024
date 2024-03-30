import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    
    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const auth = getAuth();
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + " : " + errorMessage);
            });


    }
    return (
        <div>
            <h2 className="text-center text-4xl font-bold bg-slate-300 p-5 rounded-lg">Log In</h2>
            <form className="mx-auto bg-slate-200 w-3/4  p-12 mt-10 rounded-lg" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" className="p-4 w-full m-4 mb-4 rounded-lg bg-white text-gray-500 border border-slate-600" />
                <input type="password" name="password" placeholder="Password" className="p-4 w-full m-4 mb-4 rounded-lg bg-white text-gray-500 border border-slate-600" />
                <button className="p-4 w-full m-4 mb-4 rounded-lg bg-slate-500 text-white font-bold border border-slate-400">Submit</button>
            </form>
        </div>
    );
};

export default Login;