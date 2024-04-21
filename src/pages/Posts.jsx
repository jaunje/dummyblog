// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import usePostsStore from "../zustand/postStore";

function Posts() {
  const { posts, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-10 mb-10">
        posts page
      </h1>

      <div className="container mx-auto flex flex-wrap gap-6">
        {posts &&
          posts.map((item) => {
            return <Card key={item.id} postItem={item} />;
          })}
      </div>
    </>
  );
}

export default Posts;
