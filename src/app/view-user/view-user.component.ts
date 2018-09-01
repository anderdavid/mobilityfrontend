import { Component, OnInit,Input} from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  usuarios:Usuario[] =[];
  usuarioSelected:Usuario;

  products:any = [];

  constructor(private usuarioService:UsuarioService,private rest:UsuarioService) { }

  ngOnInit() {

  	//this.usuarios =this.usuarioService.getUsuarios();
    this.getProducts();
  }

  onSelected(usuario:Usuario){
  	this.usuarioSelected =usuario;
  }

  getProducts() {
    console.log("viewUserComponent:getProducts");

    this.products = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }



}
