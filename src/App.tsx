import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import { pwa } from "pwafire";
import './App.css'


interface IButtons {
  index: number,
  color: string,
}

const BUTTONS: IButtons[] = [
  {
    index: 0,
    color:'blue',
  },
  {
    index: 1,
    color:'red',
  },
  {
    index: 2,
    color:'yellow',
  },
  {
    index : 3,
    color:'green',
  }
]

const notification = {
  title: "Remy suce des ourses!",
  options: {
      body: "Remy suce des ourses!",
      icon: "../images/icons/icon-192x192.png",
      tag: "pwa",
    },
  };

function App() {
  const [choice1, setChoice1] = useState<number | null>(null)
  const [choice2, setChoice2] = useState<number | null>(null)
  const [choice3, setChoice3] = useState<number | null>(null)
  const [choice4, setChoice4] = useState<number | null>(null)

  const handleChoiceClick = useCallback(
    (num: number) => {
      if (!choice1){
        setChoice1(num);
      } else if (!choice2){
        setChoice2(num);
      } else if (!choice3){
        setChoice3(num);
      } else if (!choice4){
        setChoice4(num);
      }
    },
    [choice1, setChoice2, setChoice3, setChoice4]
  )

  return (
    <div className="App">
      <div>
        <img src="/android-chrome-512x512.png" className="logo" alt="App logo" />
      </div>

      <h1>Ynov - WebMobile - Simon</h1>

      <div className="game">
        <div className="buttons">
          {BUTTONS.map(button =>
            <button
              className={button.color}
              onClick={() => {
                console.log(button.index),
                pwa.Notification(notification);
              }}
            >
              {button.color}
            </button>)}
        </div>
      </div>
    </div>
  )
}

export default App
