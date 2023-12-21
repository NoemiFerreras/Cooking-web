document.addEventListener("DOMContentLoaded", ()=>{




/* Creamos el array de objetos*/
    const photos = [{
        "img":"./img/gallery sushi (1).jpg"
    },{
        "img":"./img/gallery sushi (2).jpg"
    },{
        "img":"./img/gallery sushi (3).jpg"
    },{
        "img":"./img/gallery sushi (4).jpg"
    },{
        "img":"./img/gallery sushi (5).jpg"
    },{
        "img":"./img/gallery sushi (6).jpg"
    },{
        "img":"./img/gallery sushi (7).jpg"
    },{
        "img":"./img/gallery sushi (8).jpg"
    }]




/* Creamos con la ID la caja donde vamos a meterlo*/
    const gallery = document.getElementById("gallery")



/* Cojemos el objeto que hemos creado y le aplicamos la función map
La función map lleva dentro una función en la que como parámetro va cada objeto por individual de nuestro array
Como return ponemos la tarjeta que queremos que se nos muestre*/
    const mapGallery = photos.map(
        (photo)=>{
            return(`  
                <div class="photo">
                    <img src="${photo.img}" alt="Gallery">
                </div>`)
        }
        /* Se pone photo.img porque photo es el parámetro de la función map e img es como hemos nombrado en el array a cada elemento y es lo que queremos que se nos pinte en la tarjeta */
        )


        /* Dentro de la caja que habíamos creado hacemos un innerHTML del map y le ponemos el método join para que separe cada elemento*/
    gallery.innerHTML=mapGallery.join("")













})
