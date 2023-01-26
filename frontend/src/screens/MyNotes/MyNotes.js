import React, { useEffect } from "react";
// import { Accordion, Badge, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { Card, CardHeader, CardBody, CardTitle, Table, Col } from "reactstrap";

function MyNotes({ history, search }) {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;
  

  // const filteredNotes = notes.filter((note) =>
  //   note.title.toLowerCase().includes(search.toLowerCase())
  // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <div>
      <MainScreen title={`Welcome Back ${userInfo && userInfo.name}`}>
        
      <Col lg="10" md="12">
        <Link to="/createnote">
          <button className="primary-btn" style={{ border: '1px solid white',marginBottom: "1rem" }}>
            Add Student
          </button>
        </Link>
        </Col>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loading && <Loading />}
        {loadingDelete && <Loading />}
        <br />
        <Col lg="10" md="12">
          <Card style={{ backgroundColor: "#bca8d6" }}>
            <CardHeader>
              <CardTitle
                style={{ color: "white" }}
                tag="h2"
                className="poppins"
              >
                Students List
              </CardTitle>
            </CardHeader>            
            <CardBody>
              <Table className="tablesorter" responsive hover>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Admission Number</th>
                    <th>Branch</th>
                    <th>Mobile</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {notes &&
                    notes.map((note) => (
                      <tr key={note._id}>
                        <td>{note.name}</td>
                        <td>{note.roll}</td>
                        <td>{note.branch}</td>
                        <td>{note.mobile}</td>
                        <td className="text-center">
                          <button
                            className="note-primary"                            
                            onClick={() => deleteHandler(note._id)}
                          >
                            <MdOutlineDelete size={25} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <br />
        <br />
      </MainScreen>
    </div>
  );
}

export default MyNotes;
