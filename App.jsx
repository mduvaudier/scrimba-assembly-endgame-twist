import { useState } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Button from "./components/Button";
import { stAlphabet } from "./assets/alphabet";
import { words } from "./assets/word";
import ReactConfetti from "react-confetti";
import { holidays } from "./assets/holidays";
import employeeImage from "./assets/images/employee-6038877_1280.png"

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
  const [answer, setAnswer] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [displayAnswer, setDisplayAnswer] = useState(initDisplayAnswer(answer));
  const [alphabet, setAlphabet] = useState(stAlphabet);
  const [counter, setCounter] = useState(0);
  const [win, setWin] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(holidays[0].image)
  const [displayMessage, setDisplayMessage] = useState(holidays[0].text)

  
  function init() {
        setAnswer(
          () => {const newAnswer = words[Math.floor(Math.random() * words.length)]
            setDisplayAnswer(initDisplayAnswer(newAnswer));
            return newAnswer
          });
        setAlphabet(stAlphabet);
        setCounter(0);
        setWin(false);
        setBackgroundImage(holidays[0].image)
        setDisplayMessage(holidays[0].text)
  }

  function initDisplayAnswer(newAnswer) {
    const word = [];
    for (let i = 0; i < newAnswer.length; i++) {
      word.push({ letter: "", color: "" });
    }
    return word;
  }

  function onClick(touch) {
    if (answer.indexOf(touch) === -1) {
      setAlphabet((prev) =>
        prev.map((item) =>
          item.text === touch
            ? { ...item, bgcolor: "rgba(236, 93, 73, 1)" }
            : item
        )
      );
      if (counter < 7) {
        setCounter(counter + 1);
        setBackgroundImage(holidays[counter + 1].image)
        setDisplayMessage(holidays[counter + 1].text)
      } else {
        setDisplayAnswer((prev) =>
          prev.map((item, id) =>
            item.letter === answer[id]
              ? item
              : { letter: answer[id], color: "rgba(236, 93, 73, 1)" }
          )
        );
        setBackgroundImage(employeeImage)
        setDisplayMessage(holidays[8].text)
        setCounter(8)
      }
    } else {
      setAlphabet((prev) =>
        prev.map((item) =>
          item.text === touch
            ? { ...item, bgcolor: "rgba(16, 169, 91, 1)" }
            : item
        )
      );
      setDisplayAnswer((prev) => {
        const newAnswer = prev.map((item, id) =>
          answer[id] === touch ? { ...item, letter: touch } : item
        );
        const newAnswerFlat = newAnswer.map((item) => item.letter);
        if (newAnswerFlat.join("") == answer) {
          setDisplayMessage(holidays[9].text);
          setWin(true)
        }
        return newAnswer;
      });
    }
  }

  return (
    <main style={{backgroundImage: `url(${backgroundImage})`}}>
      {win && <ReactConfetti />}
      <Header counter={counter}/>
      <Message message={displayMessage} counter={counter}/>
      <Languages counter={counter} win={win}/>
      <Word displayWord={displayAnswer} />
      <Keyboard alphabet={alphabet} onClick={onClick} counter={counter}/>
      {counter >= 8 || win ? (
        <Button onClick={init} />
      ) : (
        ""
      )}
    </main>
  );
}
