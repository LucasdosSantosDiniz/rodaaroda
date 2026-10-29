import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1> FIM DE JOGO !</h1>
      <h2>
        {" "}
        Sua pontuação foi :<span> {score} </span>
      </h2>
      <button onClick={retry}> Finalizar o Jogo</button>
    </div>
  );
};

export default GameOver;
