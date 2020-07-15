import path from "path";
import fs, { promises as fsPromises } from "fs";
import matter from "gray-matter";

export const getPosts = async () => {
  const markdownDir = path.join(process.cwd(), "markdown");
  let fileNames = await fsPromises.readdir(markdownDir);
  return fileNames.map((fileName) => {
    let id = fileName.replace(/\.md$/g, "");
    let filePath = path.join(markdownDir, fileName);
    let text = fs.readFileSync(filePath, "utf-8");
    let {
      data: { title, date },
      content,
    } = matter(text);
    return {
      id,
      title,
      date,
    };
  });
};
