export const fetchData = async () => {
    const data = await fetch("https://humorous-angry-detail.glitch.me/progress")
        .then(res => res.json())
        .then(data => data[data.length])
        .catch(err => console.log(err));
    
    const response = await data;
    return response[response.length-1]
}