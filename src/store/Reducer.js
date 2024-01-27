import * as actions from "./actionTypes";
import { produce } from "immer";

const initialState = {
  data: {
    level: 1,
    win: false,
    isPlaying: false,
    finished: true,
    side: 3,
    tiles: 3,
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.START_PLAYING:
      const newState = produce(state, (draft) => {
        draft.data.isPlaying = true;
        draft.data.finished = false;
      });
      return newState;

    case actions.SUCCESS:
      const successState = produce(state, (draft) => {
        draft.data.win = true;
      });
      return successState;

    case actions.LEVELUP:
      const levelupState = produce(state, (draft) => {
        draft.data.level += 1;
        draft.data.win = false;
        if (draft.data.level % 3 === 0) {
          draft.data.side = draft.data.side + 1;
        }
        if (draft.data.level % 2 === 0) {
          draft.data.tiles = draft.data.tiles + 1;
        }
      });
      return levelupState;

    case actions.LOSE:
      const loseState = produce(state, (draft) => {
        draft.data.finished = true;
      });
      return loseState;

    case actions.REPLAY:
      console.log(state);
      const replayState = produce(initialState, (draft) => {
        draft.data.isPlaying = true;
        draft.data.finished = false;
        draft.data.level = 1;
      });
      return replayState;

    case actions.EXIT:
      return initialState;

    default:
      return state;
  }
}
