import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getFileIds, getPost } from "../../lib/posts";
type Props = {
  post: Post;
};
const showInfo: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </div>
  );
};
export default showInfo;
export const getStaticPaths = async () => {
  let ids = await getFileIds();
  let paths = ids.map((id) => {
    return {
      params: { id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (x: any) => {
  const id = x.params.id;
  const post = await getPost(id);
  return {
    props: {
      post: post,
    },
  };
};
