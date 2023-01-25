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
      {/* <hr style={{border: "1px solid #fff", width: '95%', margin: 'auto'}} /> */}
      <div className="landing-cover">
        <h2 className="unbounded lander-0">Student</h2>
        <h1 className="unbounded lander">
          Evaluation
        </h1>
        <h2 className="unbounded lander-2">Portal</h2>
      </div>
    </div>
  );
}

export default LandingPage;
