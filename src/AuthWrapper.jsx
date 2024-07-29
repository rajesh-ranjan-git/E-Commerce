import axios from "axios";
import React, { useEffect, useState } from "react";
import { usersAPI } from "./Constants";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/Store/UserSlice";
import ShimmerUI from "./ShimmerUI";

const AuthWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const auth = async () => {
    try {
      const response = await axios.get(usersAPI, { withCredentials: true });

      setIsAuthenticated(response.data.result);

      if (response.data.result === true) {
        dispatch(addUser(response.data.data));
      }
    } catch (err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    auth();
  }, []);

  if (isLoading === true) {
    return <ShimmerUI />;
  } else {
    return isAuthenticated === true ? children : <Navigate to="/login" />;
  }
};

export default AuthWrapper;
