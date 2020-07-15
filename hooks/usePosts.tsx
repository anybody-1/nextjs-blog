import { useEffect, useState } from "react";
import axios from "axios";
type Post = {
  id: string;
  date: string;
  title: string;
};
export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/v1/posts").then(
      (res) => {
        setIsLoading(false);
        setPosts(res.data);
        if (res.data.length === 0) {
          setIsEmpty(true);
        }
      },
      (err) => {
        setIsLoading(false);
      }
    );
  }, []);
  return { posts, setPosts, isLoading, setIsLoading, isEmpty, setIsEmpty };
};
