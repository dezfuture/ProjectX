import axios from "axios";

const url = "http://localhost:5000/profiles";

export const fetchProfile = () => axios.get(url);
