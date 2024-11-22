import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
< >
       <div className="stopwatch-container container-fluid bg-dark btnshop  text-white rounded-5 " style={{height:'100vh'}}>
     <div className="rounded-5 bg-danger w-50 mx-auto mt-5 pt-5 ">
 <img className="text-center mx-auto d-flex" style={{height:'30vh', width:'50vh',borderRadius:'50vh'}} src="https://images.pexels.com/photos/9944852/pexels-photo-9944852.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" srcset="" />
      <h1 className="text-center">Click on Start</h1>
      <p className="stopwatch-time text-center mx-auto bg-primary fs-1 rounded-5 display-6 w-50">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons border mx-auto text-center borderd bntshop rounded-5">
        <button className="stopwatch-button btn btnshop me-5 " onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button btnshop btn me-5" onClick={reset}>
          Reset
        </button>
        </div>
      </div>
    </div>     

</>
  );
};

export default App;
