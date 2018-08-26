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

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {

  	this.usuarios =this.usuarioService.getUsuarios();
  }

  onSelected(usuario:Usuario){
  	this.usuarioSelected =usuario;
  }



}
