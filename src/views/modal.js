/*POPUP*/

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";



//Para poder cerrar el modal
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', ()=>{
    closeModal();
});

//Apertura
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("imagen"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
        imagen.value = productoActivo.imagen;
        categories.value = productoActivo.categories;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
    }
};
//Cierre
export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};


const resetModal = () =>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("imagen"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");

    imagen.value = "";
    categories.value = "Seleccione una categoria";
    precio.value = 0;
    nombre.value = "";
};

//Manejamos el evento click de eliminar un producto 

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', () => {
    handlebuttonDelete();
});

const handlebuttonDelete = () => {
    handleDeleteProduct();

};

