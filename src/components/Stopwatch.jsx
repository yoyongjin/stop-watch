import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [recordIsOn, setRecordIsOn] = useState(false);

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  const [secIsSingle, setSecIsSingle] = useState(true);
  const [minIsSingle, setMinIsSingle] = useState(true);

  useEffect(() => {
    let timePass;
    if (recordIsOn) {
      timePass = setInterval(() => {
        setSecond((sec) => sec + 1);

        if (second / 9 === 1 && second % 9 === 0) {
          setSecIsSingle((prevState) => !prevState);
        }
        if (minute === 9 && second === 59) {
          setMinIsSingle((prevState) => !prevState);
        }
        if ((second + 1) % 60 === 0) {
          setMinute((min) => min + 1);
          setSecond(0);
          setSecIsSingle((prevState) => !prevState);
        }
      }, 1000);
    }
    return () => clearInterval(timePass);
  }, [recordIsOn, second, minute]);

  const recordStartHandler = () => {
    setRecordIsOn(true);
  };
  const recordStopHandler = () => {
    setRecordIsOn(false);
    console.log("stop");
  };

  const onReset = () => {
    setRecordIsOn(false);
    setSecond(0);
    setMinute(0);
    setSecIsSingle(true);
    setMinIsSingle(true);
  };

  return (
    <div>
      <div>
        {minIsSingle ? "0" + minute : minute}:
        {secIsSingle ? "0" + second : second}
      </div>
      {!recordIsOn && <button onClick={recordStartHandler}>Start</button>}
      {recordIsOn && <button onClick={recordStopHandler}>Stop</button>}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export default StopWatch;
