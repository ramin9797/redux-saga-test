export const getLatestNews = async(query="")=>{
    const request = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
    console.log(request)
    return request.json()
}
export const getPopularNews = async(query="")=>{
    const request = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
    return request.json()
}