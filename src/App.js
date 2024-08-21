import "./App.css";
import styled from "styled-components";
import Button from "./components/Button/Button";
import { AppColors } from "./utils/Appcolors";
import { useEffect, useState } from "react";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import { IoMdSearch } from "react-icons/io";
import Tasks from "./components/Tasks/Tasks";
import ReactModal from "react-modal";
import { TasksUser } from "./services/Tasks";

export const ModalBackground = styled.section`
  background-color: #1e123b;
  height: 500px;
  width: 800px;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateY(-20%);
  transform: translateX(-50%);
  border-radius: 20px;
`;

const customStyles = {
  content: {
    top: "52%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: AppColors.purpleModal,
    width: "45%",
    height: "350px",
    borderRadius: "10px",
  },
};

function App() {
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [inputValue, setInputValue] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState(TasksUser);

  function extensiveDate() {
    var day = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    var actualDay = new Date().getDay();

    setDay(day[actualDay]);

    var month = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    var actualMonth = new Date().getMonth();

    setMonth(month[actualMonth]);
  }

  function openModal() {
    setModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalOpen(false);
  }

  function createTask() {
    const min = 1;
    const max = 100;
    const rand = Math.floor(min + Math.random() * (max - min));

    setRandomNumber(rand);

    const enviarDadados = {
      id: rand,
      description: inputValue,
    };

    setTasks([...tasks, enviarDadados]);

    console.log("Objeto que será adicionado:", enviarDadados);

    TasksUser.push(enviarDadados);

    console.log("Array após adição:", TasksUser);

    closeModal();
  }

  useEffect(() => {
    extensiveDate();
  }, []);

  return (
    <>
      <ModalBackground>
        <Title
          textTitle={`${day}, ${new Date().getDate()} ${month}`}
          color={AppColors.whiteText}
          fontSize={"30px"}
          fontWeight={600}
          textAlign={"center"}
          marginTop={"60px"}
        />

        <Input
          backgroundColor={"transparent"}
          border={"2px solid white"}
          borderRadius={"10px"}
          width={"50%"}
          height={"25px"}
          placeholderColor={"white"}
          padding={"10px"}
          textPlaceholder={"Procurar Tarefa"}
          position={"relative"}
          left={"50%"}
          fontSize={"15px"}
        />

        <IoMdSearch
          color="white"
          style={{
            position: "relative",
            height: "25px",
            width: "25px",
            top: "8px",
            right: "-150px",
          }}
        />

        <Tasks />

        <Button
          width={"220px"}
          height={"55px"}
          border={"2px solid white"}
          borderRadius={"8px"}
          textButton={"Nova Tarefa"}
          color={AppColors.whiteText}
          fontSize={"20px"}
          fontWeight={600}
          position={"relative"}
          top={"15%"}
          left={"72.7%"}
          backgroundColor={AppColors.purpleButton}
          onClick={openModal}
        />

        <ReactModal
          isOpen={modalOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Title
            textTitle={"Descreva sua tarefa"}
            color={AppColors.whiteText}
            fontWeight={600}
            fontSize={"24px"}
            textAlign={"center"}
          />

          <Input
            backgroundColor={"transparent"}
            border={"2px solid white"}
            borderRadius={"10px"}
            width={"70%"}
            height={"150px"}
            position={"relative"}
            left={"50%"}
            top={"20px"}
            textPlaceholder={"Exemplo de descrição"}
            placeholderColor={AppColors.whiteText}
            padding={"10px"}
            fontSize={"20px"}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button
            padding={"20px"}
            textButton={"Confirmar Tarefa"}
            borderRadius={"10px"}
            border={"2px solid white"}
            backgroundColor={AppColors.purpleButton}
            color={AppColors.whiteText}
            width={"280px"}
            height={"60px"}
            position={"relative"}
            top={"15%"}
            left={"32%"}
            fontSize={"20px"}
            fontWeight={600}
            onClick={() => {
              createTask();
            }}
          />
        </ReactModal>
      </ModalBackground>
    </>
  );
}

export default App;
