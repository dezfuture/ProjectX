import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  username: String,
  bio: String,
  dp: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  profileCreatedAt: {
    type: Date,
    default: new Date(),
  },
});

const About = mongoose.model("About", aboutSchema);

export default About;
