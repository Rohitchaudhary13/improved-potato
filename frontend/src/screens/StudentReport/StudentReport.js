import React, { useEffect } from "react";
import { Accordion, Badge, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

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
      <MainScreen title={`Grades`}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loading && <Loading />}
        {loadingDelete && <Loading />}
        <h3>Week 1</h3>
        {notes &&
          notes.map((note) => (
            <>
              <div key={note._id}>
                Name: {note.name}
                <br />
                Adm Num: {note.roll}
                <br />
                Intro: {note.w1intro}
                <br />
                Project: {note.w1project}
                <br />
                Skills: {note.w1skills}
                <br />
                Extra: {note.w1extra}
                <br />
                Intern: {note.w1intern}
                <br />
                Profile: {note.w1profile}
                <br />
                <Link to={`/week1/${note._id}`}>
                  <FaRegEdit size={25} />
                </Link>
              </div>
            </>
          ))}
          <br /><br />
          <h3>Week 2</h3>
        {notes &&
          notes.map((note) => (
            <>
              <div key={note._id}>
                Name: {note.name}
                <br />
                Adm Num: {note.roll}
                <br />
                Intro: {note.w2intro}
                <br />
                Project: {note.w2project}
                <br />
                Skills: {note.w2skills}
                <br />
                Extra: {note.w2extra}
                <br />
                Intern: {note.w2intern}
                <br />
                Profile: {note.w2profile}
                <br />
                <Link to={`/week2/${note._id}`}>
                  <FaRegEdit size={25} />
                </Link>
              </div>
            </>
          ))}
          <br /><br />
          <h3>Week 3</h3>
        {notes &&
          notes.map((note) => (
            <>
              <div key={note._id}>
                Name: {note.name}
                <br />
                Adm Num: {note.roll}
                <br />
                Intro: {note.w3intro}
                <br />
                Project: {note.w3project}
                <br />
                Skills: {note.w3skills}
                <br />
                Extra: {note.w3extra}
                <br />
                Intern: {note.w3intern}
                <br />
                Profile: {note.w3profile}
                <br />
                <Link to={`/week3/${note._id}`}>
                  <FaRegEdit size={25} />
                </Link>
              </div>
            </>
          ))}
          <br /><br />
          <h3>Week 4</h3>
        {notes &&
          notes.map((note) => (
            <>
              <div key={note._id}>
                Name: {note.name}
                <br />
                Adm Num: {note.roll}
                <br />
                Intro: {note.w4intro}
                <br />
                Project: {note.w4project}
                <br />
                Skills: {note.w4skills}
                <br />
                Extra: {note.w4extra}
                <br />
                Intern: {note.w4intern}
                <br />
                Profile: {note.w4profile}
                <br />
                <Link to={`/week4/${note._id}`}>
                  <FaRegEdit size={25} />
                </Link>
              </div>
            </>
          ))}
      </MainScreen>
    </div>
  );
}

export default MyNotes;
