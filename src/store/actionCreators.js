import * as actions from "./actionTypes";

const START_PLAYING_CREATOR = () => {
  return {
    type: actions.START_PLAYING,
  };
};

const LEVELUP_CREATOR = () => {
  return {
    type: actions.LEVELUP,
  };
};

const SUCCESS_CREATOR = () => {
  return {
    type: actions.SUCCESS,
    payload: { win: true },
  };
};

const LOSE_CREATOR = () => {
  return { type: actions.LOSE, payload: { win: false } };
};

const REPLAY_CREATOR = () => {
  return { type: actions.REPLAY };
};

const EXIT_CREATOR = () => {
  return { type: actions.EXIT };
};

export {
  LEVELUP_CREATOR,
  SUCCESS_CREATOR,
  LOSE_CREATOR,
  START_PLAYING_CREATOR,
  REPLAY_CREATOR,
  EXIT_CREATOR,
};
