import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";
import main from "../../assets/img/9.jpg";
import video from "../../assets/img/6.mp4"


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
        <video loop="true" autoplay="true" className="video" muted>
            <source src={video} type="video/mp4" />
            </video>
            <img src={main} alt="bg image" className="myImageLanding" />
            <div className="text_over">
        <h2 className="unbounded lander-0">Talent</h2>
        <h1 className="unbounded lander">
          Evaluation
        </h1>
        <h2 className="unbounded lander-2">Portal</h2>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
