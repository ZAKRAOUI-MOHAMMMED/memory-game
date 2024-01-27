import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REPLAY_CREATOR, EXIT_CREATOR } from "../store/actionCreators";

const LosePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  console.log("form LosePage:", state);
  return (
    <div className="LosePage">
      <h1>You Lost! :(</h1>
      <p>You got to level {state.level} </p>
      <button onClick={() => dispatch(REPLAY_CREATOR())}>Replay</button>
      <button onClick={() => dispatch(EXIT_CREATOR())}>Exit</button>
    </div>
  );
};
export default LosePage;
