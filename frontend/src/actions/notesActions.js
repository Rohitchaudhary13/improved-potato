import {
  NOTES_CREATE_FAIL,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_DELETE_FAIL,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_SUCCESS,
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
  NOTES_UPDATE_FAIL,
  NOTES_UPDATE_REQUEST,
  NOTES_UPDATE_SUCCESS,
  GRADES_UPDATE_FAIL,
  GRADES_UPDATE_REQUEST,
  GRADES_UPDATE_SUCCESS,
} from "../constants/notesConstants";
import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/notes`, config);

    dispatch({
      type: NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NOTES_LIST_FAIL,
      payload: message,
    });
  }
};

export const createNoteAction =
  (name, branch, roll, mobile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTES_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/notes/create`,
        { name, branch, roll, mobile },
        config
      );

      dispatch({
        type: NOTES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/notes/${id}`, config);

    dispatch({
      type: NOTES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NOTES_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateNoteAction =
  (
    id,
    name,
    branch,
    mobile,
    roll,
    w1intro,
    w1project,
    w1intern,
    w1extra,
    w1profile,
    w1skills,
    w2intro,
    w2project,
    w2intern,
    w2extra,
    w2profile,
    w2skills,
    w3intro,
    w3project,
    w3intern,
    w3extra,
    w3profile,
    w3skills,
    w4intro,
    w4project,
    w4intern,
    w4extra,
    w4profile,
    w4skills
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTES_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/notes/${id}`,
        {
          name,
          branch,
          mobile,
          roll,
          w1intro,
          w1project,
          w1intern,
          w1extra,
          w1profile,
          w1skills,
          w2intro,
          w2project,
          w2intern,
          w2extra,
          w2profile,
          w2skills,
          w3intro,
          w3project,
          w3intern,
          w3extra,
          w3profile,
          w3skills,
          w4intro,
          w4project,
          w4intern,
          w4extra,
          w4profile,
          w4skills,
        },
        config
      );

      dispatch({
        type: NOTES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_UPDATE_FAIL,
        payload: message,
      });
    }
  };
  export const updateNoteAction2 =
  (
    id,
    name,
    branch,
    mobile,
    roll,
    w1intro,
    w1project,
    w1intern,
    w1extra,
    w1profile,
    w1skills,
    w2intro,
    w2project,
    w2intern,
    w2extra,
    w2profile,
    w2skills,
    w3intro,
    w3project,
    w3intern,
    w3extra,
    w3profile,
    w3skills,
    w4intro,
    w4project,
    w4intern,
    w4extra,
    w4profile,
    w4skills
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTES_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/notes/${id}`,
        {
          name,
          branch,
          mobile,
          roll,
          w1intro,
          w1project,
          w1intern,
          w1extra,
          w1profile,
          w1skills,
          w2intro,
          w2project,
          w2intern,
          w2extra,
          w2profile,
          w2skills,
          w3intro,
          w3project,
          w3intern,
          w3extra,
          w3profile,
          w3skills,
          w4intro,
          w4project,
          w4intern,
          w4extra,
          w4profile,
          w4skills,
        },
        config
      );

      dispatch({
        type: NOTES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_UPDATE_FAIL,
        payload: message,
      });
    }
  };
export const updateGradesAction =
  (
    id,
    name,
    branch,
    mobile,
    roll,
    w1intro,
    w1project,
    w1intern,
    w1extra,
    w1profile,
    w1skills,
    w2intro,
    w2project,
    w2intern,
    w2extra,
    w2profile,
    w2skills,
    w3intro,
    w3project,
    w3intern,
    w3extra,
    w3profile,
    w3skills,
    w4intro,
    w4project,
    w4intern,
    w4extra,
    w4profile,
    w4skills
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: GRADES_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/grades/${id}`,
        {
          name,
          branch,
          mobile,
          roll,
          w1intro,
          w1project,
          w1intern,
          w1extra,
          w1profile,
          w1skills,
          w2intro,
          w2project,
          w2intern,
          w2extra,
          w2profile,
          w2skills,
          w3intro,
          w3project,
          w3intern,
          w3extra,
          w3profile,
          w3skills,
          w4intro,
          w4project,
          w4intern,
          w4extra,
          w4profile,
          w4skills,
        },
        config
      );

      dispatch({
        type: GRADES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: GRADES_UPDATE_FAIL,
        payload: message,
      });
    }
  };
