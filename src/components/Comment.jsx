
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from './Avatar';

function Comment({content}) {
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

            <button title='delete'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
