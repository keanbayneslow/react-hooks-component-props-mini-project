import React from "react";

function Article({ title, date, preview, minutesToRead, emojis }) {
  const defaultDate = "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <p>
        {emojis} {minutesToRead} min read
      </p>
    </article>
  );
}

export default Article;