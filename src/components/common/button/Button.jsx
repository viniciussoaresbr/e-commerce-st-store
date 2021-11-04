import "./Button.css";
const Button = ({ text, handleClick = () => {}, myId }) => {
  return (
    <button
      id={myId}
      className="btn"
      onClick={() => {
        handleClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
