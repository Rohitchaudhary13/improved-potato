import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
  w1intro: { type: String },
  w1project: { type: String },
  w1intern: { type: String },
  w1extra: { type: String },
  w1profile: { type: String },
  w1skills: { type: String },

  w2intro: { type: String },
  w2project: { type: String },
  w2intern: { type: String },
  w2extra: { type: String },
  w2profile: { type: String },
  w2skills: { type: String },

  w3intro: { type: String },
  w3project: { type: String },
  w3intern: { type: String },
  w3extra: { type: String },
  w3profile: { type: String },
  w3skills: { type: String },
  
  w4intro: { type: String },
  w4project: { type: String },
  w4intern: { type: String },
  w4extra: { type: String },
  w4profile: { type: String },
  w4skills: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
