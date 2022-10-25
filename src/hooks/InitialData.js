import { useNavigate } from "react-router-dom";

export const useInitialData = () => {
  const navigate = useNavigate();
  console.log("working");

  return {
    navigate,
  };
};
