import React from "react";
import styled from "styled-components";
import { AppColors } from "../../utils/Appcolors";
import { TasksUser } from "../../services/Tasks";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FaRegWindowClose } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Title from "../Title/Title";

const Cards = styled.div`
  background-color: ${AppColors.whiteText};
  border-radius: 10px;
  padding: 10px 20px;
  margin: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerButtons = styled.div`
  display: flex;
`;

const CardsTasks = ({ textTitle, taskId }) => {
  
  function cancelTaskById(taskId) {
    const taskIndex = TasksUser.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      TasksUser.splice(taskIndex, 1);
      alert(`Tarefa com id ${taskId} removida.`);
    } else {
      alert("Tarefa não encontrada");
    }

    console.log("Lista atualizada:", TasksUser);
  }

  return (
    <>
      <Cards>
        <Input
          type={"checkbox"}
          height={"20px"}
          width={"20px"}
          backgroundColor={AppColors.purpleButton}
        />

        <Title
          textTitle={textTitle}
          color={AppColors.purpleText}
          textAlign={""}
          width={"80%"}
        />

        <ContainerButtons>
          <Button
            textButton={<FaRegWindowClose />}
            fontSize={"35px"}
            backgroundColor={"transparent"}
            border={"transparent"}
            fontWeight={800}
            onClick={() => cancelTaskById(taskId)}
          />

          <Button
            textButton={<FaEdit />}
            fontSize={"35px"}
            backgroundColor={"transparent"}
            border={"transparent"}
            fontWeight={800}
          />
        </ContainerButtons>
      </Cards>
    </>
  );
};

export default CardsTasks;
