/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const RouteProvider = ({ children }: any) => {
  const { token } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  console.log(token);

  if (!token) {
    navigate("/");
  }

  return <div className="w-full">{children}</div>;
};

export default RouteProvider;
