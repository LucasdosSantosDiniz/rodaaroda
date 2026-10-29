import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1> QUAL É A PALAVRA ?</h1>
      <p> Teste seus conhecimentos e descubra a palavra secreta!</p>
      <button onClick={startGame}> Começar o jogo </button>
    </div>
  );
};

export default StartScreen;
