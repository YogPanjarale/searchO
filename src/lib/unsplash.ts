import axios from "axios";
const client_id = import.meta.env.VITE_UNSPLASH_CLIENT_ID||"";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID "+client_id,
  },
});