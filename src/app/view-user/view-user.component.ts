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

  users:any = [];
  userId = 0;

  constructor(private usuarioService:UsuarioService,private rest:UsuarioService) { }

  ngOnInit() {
    this.getUser();
  }

  /*onSelected(usuario:Usuario){
    this.usuarioSelected = usuario;
  }*/

  getUser() {
    console.log("viewUserComponent:getUser");

    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }
  
  deleteUser(){
    console.log("delete "+this.userId);
     this.rest.deleteUser(this.userId)
      .subscribe(res => {
          this.getUser();
        }, (err) => {
          console.log(err);
        }
      );
  }

  setUserId(id){
    this.userId=id;
    console.log("this.userId: "+this.userId);
  }

  alertId(){
    console.log("Desea borrar usuario id: "+this.userId);
    alert("Desea borrar usuario id: "+this.userId);
  }

 }
