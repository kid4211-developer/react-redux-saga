import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, goToHomePage } from "../modules/posts";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

function PostContainer({ postId }) {
  // postId에 대한 data가 조회된적이 없을 경우에 대해 비구조화 할당 에러가 발생하지 않도록 처리
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHomePage(navigate))}>
        홈으로 이동
      </button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;
