/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";
import { useState } from 'react';

function Post({author, publishedAt,  content }) {
  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState([
      "Muito bom Devon, parabéns!! 👏👏",
  ])

  const publishedDateFormatter = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function newCommentChange(event) {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </div>

        <time title={publishedDateFormatter} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map((item) =>{
            if(item.type === 'paragraph') {
              return <p>{item.content}</p>
            } else if(item.type === 'link') {
              return <p><a href='#'>{item.content}</a></p>
            }
          })
        }
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder="Deixe seu comentario"
          onChange={newCommentChange}
          value={newCommentText}
        />
        <footer>
          <button onClick={handleCreateNewComment} >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => (
            <Comment content={comment} />
          ))
        }
      </div>
    </article>
  );
}

export default Post;
