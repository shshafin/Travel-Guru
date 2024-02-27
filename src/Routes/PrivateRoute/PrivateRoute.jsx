import { Hearts } from "react-loader-spinner";
import UseAuth from "../../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Hearts
          height="200"
          width="200"
          color="#280137"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/Login"}></Navigate>;
};

export default PrivateRoute;
