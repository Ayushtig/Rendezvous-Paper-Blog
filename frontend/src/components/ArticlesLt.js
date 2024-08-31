import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';

const ArticlesLt = ({articles}) => {
  return (
    <>
        {articles.map((article) => (
          <div id="card">
        <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
          <div id="content">
          <h3 style={{fontSize:"16px", fontFamily:"monospace", letterSpacing:"-0.1mm", fontWeight:"100"}}>{article.type} &nbsp; {article.published}</h3>
          <h1 style={{fontFamily:"gtsuper", fontWeight:"100",}}>{article.title}:</h1>
          <p style={{fontSize:"18px"}}>{article.content[0].substring(0, 180)}...</p>
          <i className="ri-arrow-right-line"></i>
          </div>
        </Link>
          <img src={article.poster} alt="" />
      </div>
      ))}
      
    </>
  )
}

export default ArticlesLt