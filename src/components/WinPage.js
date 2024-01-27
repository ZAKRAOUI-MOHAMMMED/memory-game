import React from "react";
import { useDispatch } from "react-redux";
import { LEVELUP_CREATOR } from "../store/actionCreators";

const WinPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="WinPage">
      <h1>You won! :D</h1>
      <button onClick={() => dispatch(LEVELUP_CREATOR())}>Next level</button>
    </div>
  );
};

export default WinPage;
