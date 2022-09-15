import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyles";
import ToDoItem from "./ToDoItem";
import * as S from "./ToDoStyle";

export default function Todo() {
  const [taskName, setTaskName] = useState();
  const [tasklist, setTasklist] = useState([]);

  const add = () => {
    if (taskName !== "") {
      const task = {
        name: taskName,
        id: Date.now()
      };
      setTasklist((prevState) => [...prevState, task]);
      setTaskName("");
    }
  };

  const remove = (id) => {
    const filteredList = tasklist.filter((i) => i.id !== id);
    setTasklist(filteredList);
  };

  useEffect(() => {
    const btn = document.querySelector("#btnClear");
    if (tasklist.length > 0) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }, [tasklist]);

  return (
    <S.Container>
      <GlobalStyle />
      <S.Title>🚀 Notepad 🚀</S.Title>
      <S.FormBox
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <S.Input
          id="entry"
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <S.BtnAdd
          onClick={() => {
            add();
          }}
        >
          👽
        </S.BtnAdd>
      </S.FormBox>
      <S.Items>
        {tasklist.map((i) => (
          <ToDoItem
            key={i.id}
            name={i.name}
            id={i.id}
            toRemove={() => remove(i.id)}
          />
        ))}
      </S.Items>
      <S.BtnClear
        id="btnClear"
        onClick={() => {
          setTasklist([]);
          setTaskName("");
        }}
      >
        CLEAR PAG
      </S.BtnClear>
    </S.Container>
  );
}
