import path from "path";
import fs, { promises as fsPromises } from "fs";
import matter from "gray-matter";
import marked from "marked";

const markdownDir = path.join(process.cwd(), "markdown");

export const getPosts = async () => {
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
export const getPost = async (id: string) => {
  let filePath = path.join(markdownDir, id + ".md");
  let text = fs.readFileSync(filePath, "utf-8");
  let {
    data: { title, date },
    content,
  } = matter(text);
  let htmlContent = marked(content);

  return JSON.parse(
    JSON.stringify({
      id,
      title,
      date,
      content,
      htmlContent,
    })
  );
};
export const getFileIds = async () => {
  let fileNames = await fsPromises.readdir(markdownDir);
  return fileNames.map((fileName) => {
    return fileName.replace(/\.md$/g, "");
  });
};
