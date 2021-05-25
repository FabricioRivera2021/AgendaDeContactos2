//--------------> _``_ <-- dejo esto por aca porque no se como se hacen en el teclado

//funciones--------------------------------

//Funcion para tomar los datos.. Validarlos y pasar los datos para crear la entrada del usuario
function inputUsuario(btnAgregar){
    btnAgregar.addEventListener('click',()=>{
    if (nombre.value === "" || numero.value === "" || direccion.value === ""){
        displayAlert("Error - Campo vacio", "danger")
        update();
    }  else if (!parseInt(numero.value)) {
        console.log(parseInt(numero.value))
        displayAlert("Error - ingrese solo numeros en telefono", "danger");
        update();
    }  else if (parseInt(nombre.value)){
        displayAlert("Error - ingrese solo caracteres en el nombre", "danger");
        update();
    }
    else {
        let contacto = {
            id: Math.random(1,100),
            nombre: nombre.value,
            numero: numero.value,
            direccion: direccion.value,
        }
        console.log(nombre.value);
        guardarContacto(localStorage, contacto);
        displayAlert("Valor agregado exitosamente", "success")
    }
})
}

//Guarda el contacto en el local Storage
function guardarContacto(db, contact){
    db.setItem(contact.id,JSON.stringify(contact))
    update();
}

//Muestra el contacto en el display
function displayContacto(db, parentNode){
    let claves = Object.keys(db);
    claves.forEach(function(clave){ //uso for each porque no tengo ni idea de q es (clave of claves) pero supongo que es algo parecido
        let contacto = JSON.parse(db.getItem(clave));  //db.getItem(item)
        crearContacto(parentNode, contacto, db);
    })
}

//Crea el elemento con los datos de la persona
function crearContacto(parentNode, persona, db){
    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('em');

    nombreContacto.innerHTML = persona.nombre
    numeroContacto.innerHTML = persona.numero
    direccionContacto.innerHTML = persona.direccion
    iconoBorrar.innerHTML = ""

    divContacto.classList.add('lista-tareas__tarea');
    iconoBorrar.classList.add('fas');
    iconoBorrar.classList.add('fa-trash-alt');
    
    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);
    
    parentNode.appendChild(divContacto);
    
    deleteItem(iconoBorrar, persona);
}

//muestra feedback en pantalla para el usuario
function displayAlert(text, action){
    msg.classList.remove("alert-danger");
    msg.classList.remove("alert-success");
    msg.classList.remove("alert-standar");
    msg.textContent = text;
    msg.classList.add(`alert-${action}`);
    // timeout para que desaparezca el mensage
    // setTimeout(function(){
    //     msg.textContent = "";
    // }, 1000);
}

//Borra el item seleccionado
function deleteItem(item, persona){
    item.addEventListener('click',()=>{
        localStorage.removeItem(persona.id)
        displayAlert("Exito", "success")
        update();
    })
}

//Refresca el navegador
function update(){
    setTimeout(function(){
        window.location.href = '/'
    }, 500);
}

//Borra todos los usuarios de la lista
function clearLista(clearBtn){
    clearBtn.addEventListener('click',()=>{
        if(localStorage.length == 0 ){
            displayAlert('No hay usuarios', "danger")
            update();
        } else {
            localStorage.clear();
            displayAlert('Exito', "success")
            update();
        }
    })
}

//Mira la cantidad de usuarios registrados
function cantidadUsuarios(lista){
    window.addEventListener('DOMContentLoaded',function(){
        if (lista.childNodes.length === 0){
            displayAlert("No hay usuarios ingresados","danger")
        } else {
            let usuarios = lista.childNodes.length;
            displayAlert(`hay ${usuarios} usuario/s ingresado/s`,"standar")
        }
    })
}
