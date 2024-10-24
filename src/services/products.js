//Productos
import Swal from "sweetalert2";

import {productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

//guardamos el producto o lo modificamos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', ()=>{
    saveOrModifyElements();
});

//Tomamos los valores de los inputs
const saveOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("imagen").value,
    precio = document.getElementById("precio").value,
    categories = document.getElementById("categoria").value;

    let objectProducts = null;

    if(productoActivo){
        objectProducts = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        };
    }else{
        objectProducts = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }

    //Alerta para guardar el producto
    Swal.fire({
        title: "OK",
        text: "Producto guardado",
        icon: "success"
    });

    setInLocalStorage(objectProducts);
    handleGetProductsToStore();
    closeModal();

};

//eliminamos el producto
export const handleDeleteProduct = () =>{

    //Alerta para eliminar el producto
    Swal.fire({
        title: "Desea eliminar producto?",
        text: "Si lo elimina sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
    });

};