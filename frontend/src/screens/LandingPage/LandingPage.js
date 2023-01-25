import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";
import main from "../../image.jpg";

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mystudents");
    }
  }, [history, userInfo]);

  return (
    <div className="main">
      <div className="landing-page-img-container">
        <img
          src={main}
          alt="main"
          className="landing-page-img"
        />
        <div className="text-over-img">
          <h1 className="unbounded">
            Stay organized and on top of your ideas with our app.
          </h1>
          <div className="landing-btn-cover">
            <Link to="/login" className="primary-btn unbounded">
              Login
            </Link>
            <Link to="/register" className="secondary-btn unbounded">
              SignUp
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default LandingPage;
