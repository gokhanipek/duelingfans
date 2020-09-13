import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { sampleSize } from 'lodash';
import { 
    GET_PLAYER_LIST_REQUEST,
    getPlayerListResponse,
 } from "./actions";

export function* getPlayerListRequest(action) {
      try {
        const response = yield axios.get("https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json");
        const { data } = response;
        const randomizePlayers = sampleSize(data.players, 2);
        yield put(getPlayerListResponse(randomizePlayers));
      } catch (e) {
          console.log(e);
      }
};

export default function* requestApiData() {
  yield takeEvery( GET_PLAYER_LIST_REQUEST, getPlayerListRequest );
}
