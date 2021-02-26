import React, { useState } from "react"
import './CommentSection.css'

export const CommentSection = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeComentario = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="commentContainer">
      <div className="inputComment"
        placeholder={"Comentário"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      <button
        onClick={() => {
          props.enviarComentario(this.state.inputValue);
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default CommentSection;
