import { Link } from 'react-router-dom';
import './ErrorPage.css';
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <section className="page_404 bg-white h-screen flex items-center">
            <div className="container mx-auto">
                <div>
                    <div className="text-center">
                        <div className="four_zero_four_bg">
                            <h1 className="text-center text-8xl russoFont">404</h1>
                        </div>

                        <div className="content_box_404">
                            <h3 className="text-3xl russoFont">Opps... Look you traveled where you should not be.</h3>

                            <p className='russoFont'>or the page you are looking for is not available!</p>

                            <Link to="/" className='btn btn-neutral mt-6'>Go Home <FaHome /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;