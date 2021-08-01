import React from "react";

import Profile from "./Profile/Profile";
import useStyles from "./styles";
const Profiles = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Profiles</h1>
      <Profile />
      <Profile />
      <Profile />
    </>
  );
};

export default Profiles;
