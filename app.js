let listaAmigos = [];
let contenidoLista = ''

//Función que agrega un nuevo amigo a la lista y lo muestra en pantalla.
function agregarAmigo(){
    let amigo = document.querySelector('#amigo').value;
    
    if(amigo == ''){
        alert('Ingresa un nombre válido, por favor.');
    }else{
        listaAmigos.push(amigo);
        actualizarContenidoLista(listaAmigos[listaAmigos.length-1]);
    }
    return;
}

//Función que sortea un amigo de la lista y lo muestra en pantalla.
function sortearAmigo(){
    let resultadoSorteo = document.querySelector('#resultado');

    if(listaAmigos.length==0){
        alert('Lista de amigos vacía =(');
    }else{
        let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
        resultadoSorteo.innerHTML = `<li>El amigo secreto sorteado es: ${listaAmigos[amigoSorteado]}.</li>`;
    }
}

//Función que reinicia el sorteo.
function reiniciarSorteo(){
    let resultadoSorteo = document.querySelector('#resultado');
    
    listaAmigos = [];
    actualizarContenidoLista(''); 
    resultadoSorteo.innerHTML = '';
}

//Función que actualiza el contenido de la lista que se verá en pantalla.
function actualizarContenidoLista(elementoLista){
    let listaVisibleHTML = document.querySelector('#listaAmigos');

    if(elementoLista == ''){
        contenidoLista = '';  
    }else{
        contenidoLista += `<li>${elementoLista}</li>`;
    }
    listaVisibleHTML.innerHTML = contenidoLista;
}