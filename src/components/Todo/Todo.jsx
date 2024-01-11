import style from "./todo.module.css";
import { todo } from "../../assets/todo.js";
import { useState } from "react";

function Todo() {
  const [todoList, setTodList] = useState(todo);
  const [todoItem, setTodItem] = useState("");
  const [toggleBtn, setToggleBtn] = useState(true);

  function handleClick() {
    if (!todoItem.trim()) {
      console.log("wait, add popup");
    } else {
      setTodList([
        ...todoList,
        { id: todoList.length + 1, title: todoItem, condition: "" },
      ]);
      setTodItem("");
    }
  }
  // todoList.find(i=>i.condition&&setToggleBtn(true))
  return (
    <div className={style.wrapperContent}>
      <div id="myDIV" className={style.headerTodo}>
        <h2>My To Do List</h2>
        <input
          className={style.input}
          type="text"
          id="myInput"
          placeholder="Title..."
          onChange={(e) => {
            setTodItem(e.target.value);
          }}
          value={todoItem}
        />
        <span className={style.addBtn} onClick={handleClick}>
          Add
        </span>
      </div>
      <ul
        id={style.myUL}
        onClick={(e) => {
          if (e.target.closest("li")) {
            let id = e.target.closest("li").dataset.id;
            const item = todoList.find((it) => it.id == id);
            if (!item.condition) {
              item.condition = "checked";
              setTodList([...todoList]);
              setToggleBtn(true)
            } else {
              item.condition = "";
              setTodList([...todoList]);
            }
          }
          if (e.target.closest("span")) {
            let id = e.target.closest("span").parentElement.dataset.id;
            const newTodoList = todoList.filter((it) => it.id != id);
            setTodList([...newTodoList]);
          }
        }}
      >
        {
          todoList.map((item, key) => {
        
          return (
            <li
              id={style.li}
              key={key}
              className={style[item.condition]}
              data-id={item.id}
            >
              {item.title}
              <span className={style.close}>×</span>
            </li>
          );
        })
        
        }
      </ul>
      <div className={style.wrapperBtn}>

      <button className={style.buttonLeft}
        onClick={() => {
          todoList.forEach((it) => {
            it.condition = "checked";
          });
          setTodList([...todoList]);
          setToggleBtn(true)
        }}
      >
        add All
      </button>
      {
        toggleBtn && (
      <button className={style.buttonRight}
        onClick={() => {
          todoList.forEach((it) => {
            it.condition = "";
          });
          setTodList([...todoList]);
          setToggleBtn(false)
        }}
      >
        clean All
      </button>
        )
      }
      </div>
    </div>
  );
}

export default Todo;
