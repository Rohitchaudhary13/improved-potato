import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function CreateNote({ history }) {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [roll, setRoll] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setName("");
    setBranch("");
    setRoll("");
    setMobile("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(name, branch, roll, mobile));
    if (!name || !branch || !roll || !mobile) return;

    resetHandler();
    history.push("/mystudents");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Add a Student">
      <Card>
        <Card.Header>Add a new Student</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="name">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Enter the Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="branch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="branch"
                value={branch}
                placeholder="Enter the Branch"
                onChange={(e) => setBranch(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="roll">
              <Form.Label>Admission Number</Form.Label>
              <Form.Control
                type="roll"
                value={roll}
                placeholder="Enter the College admission Number"
                onChange={(e) => setRoll(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="content"
                value={mobile}
                placeholder="Enter the Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <button className="primary-btn" type="submit">
              Create Student
            </button>
            <button className="mx-2 primary-btn" onClick={resetHandler}>
              Reset Feilds
            </button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default CreateNote;
