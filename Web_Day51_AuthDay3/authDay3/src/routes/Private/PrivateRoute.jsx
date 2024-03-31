import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <>
                <div className="h-screen w-8 mx-auto flex items-center">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signIn" />
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool
}

export default PrivateRoute;