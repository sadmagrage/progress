export const fetchData = async () => {
    const data = await fetch("./json/output.json")//https://tryingrailway-production.up.railway.app/progress")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err));
    
    const response = await data;
    return response[response.length-1]
}