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

const listSavedJokes = (req, resp) => {
  db.query(queries.listSavedJokes, (error, result) => {
    if (error) {
      console.error(error);
      resp.status(500).send("INTERNAL SERVER ERROR");
    } else {
      // console.log(result.rows);
      const jokes = result.rows.map((res) => res.source_id);
      resp.status(200).json({ status: "SUCESS", result: jokes });
    }
  });
};

const createSavedJoke = (req, resp) => {
  const { joke_id } = req.body;
  db.query(queries.createSavedJoke, [joke_id], (error, result) => {
    if (error) {
      console.error(error);
      resp.status(500).send("INTERNAL SERVER ERROR");
    } else {
      // console.log(result);
      resp.status(201).json({ status: "SUCESS" });
    }
  });
};

const deleteSavedJokeById = (req, resp) => {
  const joke_id = req.params.joke_id;
  db.query(queries.deleteSavedJokeById, [joke_id], (error, result) => {
    if (error) {
      console.error(error);
      resp.status(500).send("INTERNAL SERVER ERROR");
    } else {
      // console.log(result);
      resp.status(200).json({ status: "SUCESS" });
    }
  });
};

const controller = {
  searchJokes,
  listSavedJokes,
  createSavedJoke,
  deleteSavedJokeById,
};

export default controller;
