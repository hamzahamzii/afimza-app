// GLOBAL VARS
const PORT = process.env.PORT || 8000;
const HOME =
  process.env.NODE_ENV === "production"
    ? "https://www.afimza.com"
    : "http://localhost:3000";
const dbURI =
  process.env.MONGODB_URI ||
  "mongodb+srv://hamzahamzii:Blah-12345@afimza.loxun.mongodb.net/afimza?retryWrites=true&w=majority";

module.exports = {
  PORT,
  dbURI,
  HOME,
};
