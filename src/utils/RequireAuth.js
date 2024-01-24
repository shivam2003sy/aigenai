import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authActions"
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(loadUser());
        };

        fetchData();
    }, [dispatch]);

    const auth = useSelector(state => state.auth);

    if (auth.loading) {
        return <div>Loading...</div>;
    }

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default RequireAuth;