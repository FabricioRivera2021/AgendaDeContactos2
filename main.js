'use strict'

const nombre = document.querySelector('.formulario-datos__input-nombre');
const numero = document.querySelector('.formulario-datos__input-numero');
const direccion = document.querySelector('.formulario-datos__input-direccion');
const btnAddTarea = document.querySelector('.formulario-datos__btn');
const msg = document.querySelector('.message');
const clear = document.querySelector('.clear');

const listado = document.querySelector('.lista-tareas')

const localStorage = window.localStorage;

cantidadUsuarios(listado);

inputUsuario(btnAddTarea);

displayContacto(localStorage, listado);

clearLista(clear);
