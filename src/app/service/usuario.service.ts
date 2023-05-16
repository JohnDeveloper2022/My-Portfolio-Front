import { Injectable } from '@angular/core';
import { userLogin } from '../userLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    userLogin: userLogin
    usuarioValido: boolean = false;
  constructor() { }

  getSession(): boolean {//metodo que verifica si hay algo en el localstorage
    let usuario = localStorage.getItem('user');
    
    if(usuario)
    {
        this.usuarioValido = true;
    }
    return this.usuarioValido;
  }
}


