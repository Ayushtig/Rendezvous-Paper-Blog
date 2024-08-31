import { useParams } from "react-router-dom";
import articles from "./articleContent";
import NotFound from "./NotFound";
import axios from "axios";
import { useState, useEffect } from "react";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";


const Article = () => {
  
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote:false });
  const {canUpvote}=articleInfo
  const { articleId } = useParams();
  const { user, isLoading } = useUser();  
  
  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {headers});
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    
    if(!isLoading){ 
      loadArticleInfo();
    }
  }, [isLoading,user]);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `/api/articles/${articleId}/upvote`,
      null,
      { headers }
    );
    const updateArticle = response.data;
    setArticleInfo(updateArticle);
  };

  if (!article) {
    return <NotFound />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        {user ? (
          <button onClick={addUpvote}>{canUpvote ? "Upvote": "Already voted"}</button>
        ) : (
          <button> Log in to upvote</button>
        )}
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div><br />
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button>Log in to add a comment</button>
      )}
      <CommentsList comments={articleInfo.comments} />
      
    </>
  );
};
export default Article;
