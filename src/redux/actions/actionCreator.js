import { DECREASE_COUNT, GET_LATEST_NEWS, GET_NEWS, INCREASE_COUNT,SET_LATEST_NEWS, SET_POPULAR_NEWS } from "../constants";

export const increaseCount = ()=>({
    type:INCREASE_COUNT
})

export const decreaseCount = ()=>({
    type:DECREASE_COUNT
})

export const getLatestNews = ()=>({
    type:GET_LATEST_NEWS
})

export const setLatestNews = (payload)=>({
    type:SET_LATEST_NEWS,
    payload 
})

export const setPopularNews = (payload)=>({
    type:SET_POPULAR_NEWS,
    payload
})

export const getNews = ()=>({
    type:GET_NEWS
})