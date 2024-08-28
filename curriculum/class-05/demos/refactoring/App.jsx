import { useState } from "react";

/**
Utilizando el siguiente prompt, utiliza ChatGPT para ayudar a separar el siguiente
componente. Comenta qué tan fácil o difícil fue utilizar las herramientas de IA al
crear tus componentes.

Prompt: Tu compañero de equipo es nuevo en React y te ha pedido
un consejo sobre este código. ¿Cómo le aconsejarías dividir. este código en componentes?
*/

const App = () => {
  const [imageOneVotes, setImageOneVotes] = useState(0);
  const [imageTwoVotes, setImageTwoVotes] = useState(0);
  const [imageThreeVotes, setImageThreeVotes] = useState(0);

  const imageOne =
    "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg";
  const imageTwo =
    "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg";
  const imageThree =
    "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi";

  return (
    <>
      <h1>Vote on Your Favorite Animal!</h1>
      <p>
        We have three adorable animals here. Vote on your favorite one and watch
        their likes go up!
      </p>

      <div onClick={() => setImageOneVotes(imageOneVotes + 1)}>
        <h2>UniWhal</h2>
        <span>likes: {imageOneVotes}</span>
        <img src={imageOne} alt="UniWhal" />
      </div>

      <div onClick={() => setImageTwoVotes(imageTwoVotes + 1)}>
        <h2>Baby Rhino</h2>
        <span>likes: {imageTwoVotes}</span>
        <img src={imageTwo} alt="Baby Rhino" />
      </div>

      <div onClick={() => setImageThreeVotes(imageThreeVotes + 1)}>
        <h2>Baby Markhor</h2>
        <span>likes: {imageThreeVotes}</span>
        <img src={imageThree} alt="Baby Markhor" />
      </div>
    </>
  );
};

export default App;
