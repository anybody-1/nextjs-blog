import { NextApiHandler } from "next";
import { getPosts } from "lib/posts";

const posts: NextApiHandler = async (req, res) => {
  const fileList = await getPosts();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(fileList));
  res.end();
};
export default posts;
