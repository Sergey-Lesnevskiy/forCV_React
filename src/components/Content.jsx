import { useState } from "react";
import TEXT_COLOR from "./ForContent/Text_Color";
import style from "./content.module.css";
import Todo from "./Todo/Todo";

function Content({light}) {
  const [color, setColor] = useState("");
  const [text, setText] = useState("Привет");
  let colorVaries = light ? 'black': 'white'
  if(!color){
    setColor(colorVaries)
  }

  return (
    <div className={style.content}>
      <div className={style.wrapperTextColor}>
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        :
        <TEXT_COLOR {...{ text: text, color: color }} />
      </div>
      <Todo/>
    </div>
  );
}

export default Content;
