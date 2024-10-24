/* CATEGORIAS*/

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilterPorductsByCategory = (categoryIn) =>{
    const products = handleGetProductLocalStorage(); //nos traemos los productos

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categories === categoryIn);
            handleRenderList(result);
        default:
            break;
        
        case "menorPrecio":
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
            break;
    
        case "mayorPrecio":
            const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
            break;
        
    }
};



//Funcion para la muestra de categorias

export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="menorPrecio">Menor precio</li>
    <li id="mayorPrecio">Mayor precio</li>
    `;

    //a cada li le añadimos su evento click
    const liElements = ulList.querySelectorAll("li"); //todos los elementos que tengan la etiqueta li
    
    liElements.forEach((liElem)=>{

        liElem.addEventListener("click", ()=>{
            styleClick(liElem);
        });

    });

    //se agrega el estilo al elemento que esta activo con el click
    const styleClick = (elemento) =>{
        handleFilterPorductsByCategory(elemento.id);
        liElements.forEach((el) =>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive");
            }else{
                if(elemento === el){
                    el.classList.add("liActive");
                }
            }
        });
    };
};