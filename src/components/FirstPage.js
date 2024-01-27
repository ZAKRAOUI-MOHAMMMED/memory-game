import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actionCreators";

const FirstPage = () => {
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(actions.START_PLAYING_CREATOR());
  };
  return (
    <div className="FirstPage">
      <h3>Visual memory game</h3>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default FirstPage;
