// ---- Leer imagenes o videos con FETCH ----

const imagen = document.querySelector(".imagen");

fetch("ImagenPrueba.png")
    .then(res=>res.blob())
    .the(img=>imagen.src = URL.createObjectURL(img)) 


/* lo que hace URL.createObjectURL(img) es que crea una URL válida para que se pueda visualizar la imagen.
se almacena el dato en la URL creada y se muestra la URL en pantalla.*/