
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/search";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'

/*APLICAITON */

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
};


handleGetProductsToStore();
renderCategories();


//añadir o modificar un producto del header
const addButton = document.getElementById("addButtonElement");
addButton.addEventListener('click', ()=>{

    openModal();
});


//buscar un producto del header en la barra de busqueda
const buttonSearch = document.getElementById("searchButton");
buttonSearch.addEventListener("click", () =>{
    handleSearchProductByName();
});