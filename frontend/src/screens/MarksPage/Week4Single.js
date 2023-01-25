import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, updateNoteAction } from "../../actions/notesActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";

function SingleNote({ match, history }) {
  const [name, setName] = useState();
  const [branch, setBranch] = useState();
  const [mobile, setMobile] = useState();
  const [roll, setRoll] = useState();

  const [w1intro, setW1intro] = useState();
  const [w1project, setW1project] = useState();
  const [w1intern, setW1intern] = useState();
  const [w1extra, setW1extra] = useState();
  const [w1profile, setW1profile] = useState();
  const [w1skills, setW1skills] = useState();

  const [w2intro, setW2intro] = useState();
  const [w2project, setW2project] = useState();
  const [w2intern, setW2intern] = useState();
  const [w2extra, setW2extra] = useState();
  const [w2profile, setW2profile] = useState();
  const [w2skills, setW2skills] = useState();

  const [w3intro, setW3intro] = useState();
  const [w3project, setW3project] = useState();
  const [w3intern, setW3intern] = useState();
  const [w3extra, setW3extra] = useState();
  const [w3profile, setW3profile] = useState();
  const [w3skills, setW3skills] = useState();

  const [w4intro, setW4intro] = useState();
  const [w4project, setW4project] = useState();
  const [w4intern, setW4intern] = useState();
  const [w4extra, setW4extra] = useState();
  const [w4profile, setW4profile] = useState();
  const [w4skills, setW4skills] = useState();
  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    history.push("/studentreport");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);

      setName(data.name);
      setBranch(data.branch);
      setRoll(data.roll);
      setMobile(data.mobile);

      setW1intro(data.w1intro);
      setW1intern(data.w1intern);
      setW1extra(data.w1extra);
      setW1skills(data.w1skills);
      setW1profile(data.w1profile);
      setW1project(data.w1project);

      setW2intro(data.w2intro);
      setW2intern(data.w2intern);
      setW2extra(data.w2extra);
      setW2skills(data.w2skills);
      setW2profile(data.w2profile);
      setW2project(data.w2project);

      setW3intro(data.w3intro);
      setW3intern(data.w3intern);
      setW3extra(data.w3extra);
      setW3skills(data.w3skills);
      setW3profile(data.w3profile);
      setW3project(data.w3project);

      setW4intro(data.w4intro);
      setW4intern(data.w4intern);
      setW4extra(data.w4extra);
      setW4skills(data.w4skills);
      setW4profile(data.w4profile);
      setW4project(data.w4project);
    };

    fetching();
  }, [match.params.id]);

  const resetHandler = () => {
    setName("");
    setBranch("");
    setRoll("");
    setMobile("");
    setW4intro("");
    setW4project("");
    setW4intern("");
    setW4extra("");
    setW4skills("");
    setW4profile("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateNoteAction(
        match.params.id,
        name,
        mobile,
        branch,
        roll,
        w1intro || undefined,
        w1project || undefined,
        w1intern || undefined,
        w1skills || undefined,
        w1profile || undefined,
        w1extra || undefined,
        w2intro || undefined,
        w2project || undefined,
        w2intern || undefined,
        w2skills || undefined,
        w2profile || undefined,
        w2extra || undefined,
        w3intro || undefined,
        w3project || undefined,
        w3intern || undefined,
        w3skills || undefined,
        w3profile || undefined,
        w3extra || undefined,
        w4intro,
        w4project,
        w4intern,
        w4skills,
        w4profile,
        w4extra
      )
    );
    if (
      !name ||
      !mobile ||
      !branch ||
      !roll ||
      !w4intro ||
      !w4project ||
      !w4intern ||
      !w4skills ||
      !w4profile ||
      !w4extra
    )
      return;

    resetHandler();
    history.push("/studentreport");
  };

  return (
    <MainScreen title="Week 4 Grades">
      <Container>
        <Card>
          <Card.Header>Edit Details</Card.Header>
          <Card.Body>
            <Form onSubmit={updateHandler}>
              {loadingDelete && <Loading />}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {errorDelete && (
                <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
              )}
              <Form.Group controlId="w4intro">
                <Form.Label>Introduction: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w4intro}
                  placeholder="Week 4 Introduction"
                  onChange={(e) => setW4intro(e.target.value)}                  
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w4project">
                <Form.Label>Project: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w4project}
                  placeholder="Week 4 Project"
                  onChange={(e) => setW4project(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="W4intern">
                <Form.Label>Internships: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w4intern}
                  placeholder="Week 4 Internships"
                  onChange={(e) => setW4intern(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w4extra">
                <Form.Label>Extracurricular: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w4extra}
                  placeholder="Week 4 Extracurricular"
                  onChange={(e) => setW4extra(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w4skills">
                <Form.Label>Skills: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w4skills}
                  placeholder="Week 4 Skills"
                  onChange={(e) => setW4skills(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w4profile">
                <Form.Label>Technical Profiles: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w4profile}
                  placeholder="Week 4 Technical Profiles"
                  onChange={(e) => setW4profile(e.target.value)}
                  required={true}
                />
              </Form.Group>
              {loading && <Loading size={50} />}
              <button className="primary-btn" type="submit">
                Update
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </MainScreen>
  );
}

export default SingleNote;
