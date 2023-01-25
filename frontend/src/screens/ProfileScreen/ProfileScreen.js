import React, { useState, useEffect } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "dlpia5qvw");
      fetch("https://api.cloudinary.com/v1_1/dlpia5qvw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));
  };

  return (
    // <MainScreen>
    //   <Container>
    //     <Row>
    //       <Col
    //         style={{
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <img src={pic} alt={name} className="profilePic" />
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <h2>Name: {name} </h2>
    //         <h2> Email: {email} </h2>
    //       </Col>
    //     </Row>
    //   </Container>
    // </MainScreen>
    <MainScreen title="Profile">
      <div className="profileWrapper">
        <Container>
          <Row>
            <Col xl={6} sm={12} lg={6}>
              <h3>
                We are thrilled to welcome you{" "}
                <span style={{ fontWeight: "600", color: "white" }}>
                  {name}
                </span>{" "}
                to our mentorship program at Salaah. We know that under your
                guidance and support, our mentees will be able to achieve their
                goals and grow both personally and professionally. We are sure
                that this will be an invaluable experience for all of us.
                <br />
                Welcome to Salaah, {name}!
              </h3>
              <h4>
                Contact Info:{" "}
                <span style={{ fontWeight: "600", color: "white" }}>
                  {email}
                </span>
              </h4>
            </Col>
            <Col xl={6} sm={12} lg={6}>
              <img src={pic} alt={name} className="profilePic" />
            </Col>
          </Row>
        </Container>
      </div>
    </MainScreen>
  );
};

export default ProfileScreen;
