import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        const emojis =
        post.minutes < 30
          ? "☕️".repeat(Math.ceil(post.minutes / 5))
          : "🍱".repeat(Math.ceil(post.minutes / 10));
      
      return (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutesToRead={post.minutes}
        emojis={emojis}
        />
      );
      })}
    </main>
  );
}

export default ArticleList;