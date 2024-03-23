import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <section className="page_404">
            <div className="container mx-auto">
                        <div className="text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>


                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Look like you are lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                                <Link to = "/" className='btn btn-neutral mt-6'>Home</Link>
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default ErrorPage;