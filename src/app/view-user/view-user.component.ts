import { Component, OnInit,Input} from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  usuarios:Usuario[] =[];
  usuarioSelected:Usuario;

  constructor() { }

  ngOnInit() {

  	this.usuarios = [
  		new Usuario("1","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf"),
  		new Usuario("2","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf"),
  		new Usuario("3","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf"),
  		new Usuario("4","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf","sdfsdf")

  	];
  }

  onSelected(usuario:Usuario){
  	this.usuarioSelected =usuario;
  }



}
