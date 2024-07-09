/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if there is no authenticated user, redirect to the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. while that is happeneing show the spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  }

  // 4. if there is a user then render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
