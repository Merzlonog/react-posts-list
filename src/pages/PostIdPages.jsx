import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "./../hooks/useFetching";

const PostIdPages = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const params = useParams();

  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []); // eslint-disable-line

  return (
    <div>
      <h2>Вы открыли страницу поста с ID = {params.id}</h2>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Комментарии</h2>
      {isCommentsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h4>{comm.email}</h4>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPages;

//2:29:59
