export const fetchData = async () => {
    const data = await fetch("https://sadmagro-production.up.railway.app/progress")
        .then(res => res.json())
        .then(data => data.filter(progress => progress.nome == "nfp"))
        .catch(err => console.log(err));
    
    const response = await data;
    return response[response.length-1]
}