let Food = async(url)=>{
    try{
        let res = await fetch(url);
        let data = await res.json();
        data = data.meals;
        return data;
    }
    catch(err){
        console.log(err);
    }
}

let append = (data,container) =>{
    container.innerHTML = " ";
   data.map(({strMealThumb,strMeal})=>{
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = strMealThumb;
    let name = document.createElement("h2");
    name.innerText = strMeal;
    box.append(image,name);
    container.append(box);
   })
}

export{Food,append}