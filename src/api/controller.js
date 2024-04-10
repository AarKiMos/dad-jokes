import db from "../db.js";
import queries from "./queries.js";

const searchJokes = async (req, resp) => {
  const searchQuery = req.query.term;
  const reqUrl = `https://icanhazdadjoke.com/search?limit=30&term=${encodeURIComponent(
    searchQuery
  )}`;

  const response = await fetch(reqUrl, {
    headers: {
      Accept: "application/json",
    },
  });
  const result = await response.json();

  // console.log(result);
  resp.json(result);
};

const controller = {
  searchJokes,
};

export default controller;
