import styles from './Message.module.css';

type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessageType) {
  return (
    <div className={styles.message}>
      <img src={props.avatar} alt={props.name} className={styles.avatar} />
      <div className={styles.textContainer}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.text}>{props.message}</div>
        <div className={styles.time}>{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
