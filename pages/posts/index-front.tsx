import { GetStaticProps, NextPage } from "next";
import React from "react";
import { usePosts } from "hooks/usePosts";

const PostsIndex: NextPage = () => {
  const { isLoading, isEmpty, posts } = usePosts();
  return (
    <div>
      <h1>文章列表</h1>
      {isLoading ? (
        <div>加载中...</div>
      ) : isEmpty ? (
        <div>没有数据</div>
      ) : (
        posts.map((e) => <div key={e.id}>{e.id}</div>)
      )}
    </div>
  );
};
export default PostsIndex;
