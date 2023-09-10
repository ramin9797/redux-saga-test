import {all, call, fork, put, race, select, spawn, take, takeEvery, takeLatest, takeLeading} from "redux-saga/effects"
import { DECREASE_COUNT, GET_LATEST_NEWS, GET_NEWS, INCREASE_COUNT } from "../constants";
import { getLatestNews, getPopularNews } from "../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";


// const delay = (time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve();
//         }, time * 1000);
//     })
// }

export function *getPopularNewsWorker(){
    const {hits} = yield call(getPopularNews,"")
    yield(put(setPopularNews(hits)))
}

export function *getLatestNewsWorker(){
         const {hits} = yield call(getLatestNews,"react")
         yield(put(setLatestNews(hits)));
}

export function *getLatestNewsWorker2(){
    const {hits} = yield call(getLatestNews,"react")
    yield(put(setLatestNews(hits)));
}

export function *handleNews(){
    console.log('11')
    // let counter = yield select((store)=>store.counter?.count)
    // yield(delay(2))
    // console.log(`counter = ${counter}`)
    // const data = yield getLatestNews(); 
    // const data = yield call(getLatestNewsWorker)
    // yield(put(setLatestNews(data)))

    // yield call(getPopularNewsWorker)
    // yield call(getLatestNewsWorker)

    yield fork(getLatestNewsWorker2)
    yield fork(getPopularNewsWorker)
    yield fork(getLatestNewsWorker)

    // yield all([
    //     call(getPopularNewsWorker),
    //     call(getLatestNewsWorker),
    // ])


//   yield race([
//         call(getLatestNewsWorker),
//         call(getPopularNewsWorker),

//     ])
    console.log("all") 

 }

export function *watcherSaga(){
    yield take(GET_NEWS,handleNews);
    // yield takeLeading(GET_LATEST_NEWS,handleNews)
    // yield takeLatest(INCREASE_COUNT,workerSaga)

}

export function *rootSaga(){
    yield watcherSaga();
}

/*
  export const *rootSaga2(){
    yield fork(saga1)
    yield fork(saga2)
    yield fork(saga3)
  }

  //minusi ( yesli upadet odna upadut vse)

  rewayet problem snova spwan
*/