import server from "./src/server.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
