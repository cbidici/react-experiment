import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c32a15010355a7dc1e7823a5bd27bcb8af89f999eaf62a3f79d782337b097750"
  }
});
