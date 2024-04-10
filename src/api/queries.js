const queries = {
  listSavedJokes: "SELECT source_id FROM jokes",
  createSavedJoke: "INSERT INTO jokes (source_id) VALUES ($1) RETURNING *",
  deleteSavedJokeById: "DELETE FROM jokes WHERE source_id = $1",
};

export default queries;
