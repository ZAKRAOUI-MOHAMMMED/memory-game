import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SUCCESS_CREATOR, LOSE_CREATOR } from "../store/actionCreators";

const GamePage = () => {
  const state = useSelector((e) => e.data);
  const dispatch = useDispatch();
  const x = [];

  const createShape = () => {
    const surface = state.side ** 2;
    const tiles = state.tiles;
    const tileType = [];

    for (let index = 0; index < tiles; index++) {
      tileType.push({ id: index, type: "firstClickable" });
    }

    const max = tileType.length;
    const cond = surface - tiles + max;

    for (let index = max; index < cond; index++) {
      tileType.push({ id: index, type: "firstNotClickable" });
    }

    setTimeout(() => {
      document
        .querySelectorAll(".firstClickable")
        .forEach((e) => (e.className = "clickable"));
      document
        .querySelectorAll(".firstNotClickable")
        .forEach((e) => (e.className = "notClickable"));
    }, 3000);

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    const usedTiles = [];

    const getTileType = () => {
      const y = tileType.splice(randomNumber(0, tileType.length), 1);
      usedTiles.push(y);
      return y[0].type;
    };

    const clickedTiles = [];
    let winCond = 0;
    let loseCond = 0;

    const checkIfWin = () => {};

    const handleClick = (e) => {
      let targetClass = e.target.classList;
      if (targetClass.contains("clickable")) {
        if (targetClass.contains("correct")) {
        } else {
          e.target.className = " correct";
          winCond++;
          winCond === state.tiles && dispatch(SUCCESS_CREATOR());
        }
      } else {
        if (targetClass.contains("firstClickable")) {
        } else {
          if (targetClass.contains("firstNotClickable")) {
          } else {
            if (targetClass.contains("notClickable"))
              if (targetClass.contains("notCorrect")) {
              } else {
                e.target.className = " notCorrect";
                loseCond++;
                loseCond === 3 && dispatch(LOSE_CREATOR());
              }
          }
        }
      }

      !clickedTiles.includes(e.target.id) && clickedTiles.push(e.target.id);
      checkIfWin();
    };

    let d = 0;

    for (let index = 0; index < state.side; index++) {
      for (let index2 = 0; index2 < state.side; index2++) {
        x.push(
          <button
            id={d}
            className={getTileType()}
            style={{
              width: `calc(100% / ${state.side})`,
              height: `calc(100% / ${state.side})`,
            }}
            onClick={handleClick}
          ></button>
        );
        d++;
      }
    }

    return x;
  };

  return (
    <div className="container">
      <h1>
        Level: <span>{state.level}</span>
      </h1>
      <div className="buttonsContainer" style={{ textAlign: "center" }}>
        {createShape()}
      </div>
    </div>
  );
};

export default GamePage;
