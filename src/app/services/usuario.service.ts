import { Injectable } from '@angular/core';
import {Usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	usuarios:Usuario[] =[
  		new Usuario("1","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf"),
  		new Usuario("2","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf"),
  		new Usuario("3","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf"),
  		new Usuario("4","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf"),
  		new Usuario("5","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf")

  	];

  constructor() { }

   getUsuarios(){
  	return this.usuarios;
  }
}
