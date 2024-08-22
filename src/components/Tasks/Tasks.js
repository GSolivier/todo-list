import React from "react";
import styled from "styled-components";
import CardsTasks from "../CardsTasks/CardsTasks";

const ContainerTasks = styled.section`
  height: 250px;
  width: 90%;
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: auto; /* Permite scroll vertical */
  overflow-x: hidden; /* Evita o scroll horizontal */
  scroll-behavior: auto;
  scrollbar-width: thin;
  scrollbar-color: white transparent;
`;

const Tasks = ({onDelete, onEdit, taskList}) => {
  return (
    <ContainerTasks>
      {taskList.map((title) => {
        return (
          <CardsTasks key={title.id} taskId={title.id} textTitle={title.description} onDelete={onDelete} onEdit={onEdit}></CardsTasks>
        );
      })}
    </ContainerTasks>
  );
};

export default Tasks;
