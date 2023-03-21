import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  return <PostContainer postId={parseInt(params.id, 10)} />;
};

export default PostPage;
