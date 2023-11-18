/* eslint-disable react/prop-types */

import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from './Avatar';
import { useState } from 'react';

function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content);
  }

  const handleLikeComment = () => {
    setLikeCount((state) => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ThaSMorato.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thales Morato</strong>
              <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atras</time>
            </div>

            <button onClick={handleDeleteComment} title='delete'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{ likeCount }</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
