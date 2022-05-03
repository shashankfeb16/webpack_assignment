import {navbar} from "../components/navbar.js";
import "../styles/style.css";
document.getElementById("navbar").innerHTML = navbar();

import { Food,append } from "./fetch.js";

let searchFood = ()=>{
    let food = document.getElementById("search").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    let container = document.getElementById("foodcontainer")
    Food(url).then((res)=>{
        append(res,container)
    })
}
document.getElementById("btn").addEventListener("click",searchFood);
