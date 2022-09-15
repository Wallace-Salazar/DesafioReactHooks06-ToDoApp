import React from "react";
import * as S from "./ToDoItemStyle";

export default function TodoItem(p) {
  return (
    <S.Item>
      <S.Input type="checkbox" name="task" id={`task-${p.id}`} />
      <S.Label htmlFor={`task-${p.id}`}>
        <span></span>
        <p>{p.name}</p>
      </S.Label>
      <S.BtnBox>
        <S.BtnItem onClick={p.toRemove}>❌</S.BtnItem>
      </S.BtnBox>
    </S.Item>
  );
}
