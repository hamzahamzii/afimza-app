const API_URL =
  process.env.NODE_ENV == "production"
    ? "https://www.afimza.com"
    : "http://localhost:8000";

export { API_URL };
