import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";
import Marquee from "react-fast-marquee";
import main from '../../image.jpg'

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    <div className="main">
      <div className='landing-page-img-container'>
            <img src={main} alt="main" className='landing-page-img' />
            <div className='text-over-img'>
              <h1 className='unbounded'>Stay organized and on top of your ideas with our app.</h1>
              <div className='landing-btn-cover'>
              <Link to="/login" className="primary-btn unbounded">Login</Link>
              <Link to="/register" className="secondary-btn unbounded">SignUp</Link>
              </div>
            </div>
        </div>
        <div>
        <Marquee speed={150}>
          <h1 style={{padding: '2rem'}}>React</h1>
          <h1 style={{padding: '2rem'}}>Express</h1>
          <h1 style={{padding: '2rem'}}>NodeJs</h1>
          <h1 style={{padding: '2rem'}}>MongoDB</h1>
          <h1 style={{padding: '2rem'}}>Material UI</h1>
          <h1 style={{padding: '2rem'}}>Framer Motion</h1>
          <h1 style={{padding: '2rem'}}>Bootstrap</h1>
        </Marquee>
        </div>
    </div>
  );
}

export default LandingPage;
