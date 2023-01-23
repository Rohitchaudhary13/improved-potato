import Note from "../models/noteModel.js";
import asyncHandler from "express-async-handler";

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

const CreateNote = asyncHandler(async (req, res) => {
  const {
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
  } = req.body;

  if (!name || !branch || !mobile || !roll) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const note = new Note({
      user: req.user._id,
      name,
      branch,
      mobile,
      roll,
      w1intro: w1intro || "0",
      w1project: w1project || "0",
      w1intern: w1intern || "0",
      w1extra: w1extra || "0",
      w1profile: w1profile || "0",
      w1skills: w1skills || "0",

      w2intro: w2intro || "0",
      w2project: w2project || "0",
      w2intern: w2intern || "0",
      w2extra: w2extra || "0",
      w2profile: w2profile || "0",
      w2skills: w2skills || "0",

      w3intro: w3intro || "0",
      w3project: w3project || "0",
      w3intern: w3intern || "0",
      w3extra: w3extra || "0",
      w3profile: w3profile || "0",
      w3skills: w3skills || "0",

      w4intro: w4intro || "0",
      w4project: w4project || "0",
      w4intern: w4intern || "0",
      w4extra: w4extra || "0",
      w4profile: w4profile || "0",
      w4skills: w4skills || "0",
    });

    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});

const DeleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    await note.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});

const UpdateNote = asyncHandler(async (req, res) => {
  const {
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
  } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    note.name = name;
    note.branch = branch;
    note.mobile = mobile;
    note.roll = roll;

    note.w1intro = w1intro;
    note.w1project = w1project;
    note.w1intern = w1intern;
    note.w1extra = w1extra;
    note.w1profile = w1profile;
    note.w1skills = w1skills;

    note.w2intro = w2intro;
    note.w2project = w2project;
    note.w2intern = w2intern;
    note.w2extra = w2extra;
    note.w2profile = w2profile;
    note.w2skills = w2skills;

    note.w3intro = w3intro;
    note.w3project = w3project;
    note.w3intern = w3intern;
    note.w3extra = w3extra;
    note.w3profile = w3profile;
    note.w3skills = w3skills;

    note.w4intro = w4intro;
    note.w4project = w4project;
    note.w4intern = w4intern;
    note.w4extra = w4extra;
    note.w4profile = w4profile;
    note.w4skills = w4skills;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const UpdateGrades = asyncHandler(async (req, res) => {
  const {
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
  } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    note.name = name;
    note.branch = branch;
    note.mobile = mobile;
    note.roll = roll;

    note.w1intro = w1intro;
    note.w1project = w1project;
    note.w1intern = w1intern;
    note.w1extra = w1extra;
    note.w1profile = w1profile;
    note.w1skills = w1skills;

    note.w2intro = w2intro;
    note.w2project = w2project;
    note.w2intern = w2intern;
    note.w2extra = w2extra;
    note.w2profile = w2profile;
    note.w2skills = w2skills;

    note.w3intro = w3intro;
    note.w3project = w3project;
    note.w3intern = w3intern;
    note.w3extra = w3extra;
    note.w3profile = w3profile;
    note.w3skills = w3skills;

    note.w4intro = w4intro;
    note.w4project = w4project;
    note.w4intern = w4intern;
    note.w4extra = w4extra;
    note.w4profile = w4profile;
    note.w4skills = w4skills;

    const updatedGrades = await note.save();
    res.json(updatedGrades);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

export { getNoteById, getNotes, CreateNote, DeleteNote, UpdateNote, UpdateGrades };
