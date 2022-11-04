import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");

  const [num, setNum] = useState(0);
  const [isHappy, setFaceChange] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitchFace = () => {
    setFaceChange(!isHappy);
  };

  useEffect(() => {
    console.log("USEeffect");
    if (num > 0) {
      if (num % 3 === 0) {
        isHappy || setFaceChange(true);
      } else {
        isHappy && setFaceChange(false);
      }
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "#ff3333" }}>こんにちは</h1>
      <ColorfulMessage color="blue">ブルーベリー</ColorfulMessage>
      <ColorfulMessage color="pink">いちご</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップぼたん</button>
      <br />
      <p>{num}</p>
      <button onClick={onClickSwitchFace}>on/off</button>
      {isHappy ? <p>(^_-)-☆</p> : <p>(’皿’)凸</p>}
    </React.Fragment>
  );
};

export default App;
