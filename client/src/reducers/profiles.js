export default (profiles = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return profiles;
    default:
      return profiles;
  }
};
