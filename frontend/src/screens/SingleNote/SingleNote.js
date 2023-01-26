import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, updateNoteAction } from "../../actions/notesActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

function SingleNote({ match, history }) {
  const [name, setName] = useState();
  const [branch, setBranch] = useState();
  const [mobile, setMobile] = useState();
  const [roll, setRoll] = useState();

  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    history.push("/mystudents");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);

      setName(data.name);
      setBranch(data.branch);
      setRoll(data.roll);
      setMobile(data.mobile);
    };

    fetching();
  }, [match.params.id]);

  const resetHandler = () => {
    setName("");
    setBranch("");
    setRoll("");
    setMobile("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(match.params.id, name, mobile, branch, roll));
    if (!name || !mobile || !branch || !roll) return;

    resetHandler();
    history.push("/mystudents");
  };

  return (
    <MainScreen title="Edit Note">
      <Card>
        <Card.Header>Edit Details</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
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
                type="mobile"
                value={mobile}
                placeholder="Enter the Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit">
              Update Details
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
            >
              Delete Student
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default SingleNote;
