

export default {
    fetchInfo : async(id) =>{
        return  await (await fetch(`https://apipcd.herokuapp.com/detailinfo/${id}`)).json();
    },
    fetchDetail : async(type,page) =>{
        return  await (await fetch(`https://apipcd.herokuapp.com/apijson/${type}/${page}`)).json();
    },
    fetchPictures : async(page) =>{
        return await (await fetch(`https://apipcd.herokuapp.com/apidetailsjson/${page}`)).json();
    },
    fetchCategory : async(category) =>{
        return await (await fetch(`https://apipcd.herokuapp.com/apicategoryjson/${category}`)).json();
    },
    
}