import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const mainApi = axios.create({ baseURL, timeout: 10000 });

export default mainApi;
