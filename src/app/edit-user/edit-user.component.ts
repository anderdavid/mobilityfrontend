import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

    vacio=false;

    user:any;

  	mData:any=[];
  	userId = 0;
  	id = this.route.snapshot.params['id'];

	nombreTest="";
	nombreEmpty=false;
	apellidoEmpty=false;
	fechaEmpty=false;
	edadEmpty=false;
	generoEmpty=false;
	ciudadEmpty=false;
	emailEmpty=false;
	loginEmpty=false;
	passwordEmpty=false;

  constructor(public rest:UsuarioService, private route: ActivatedRoute,
               private router:Router) { }

  userData = new Usuario();
  
  ngOnInit() {

  	this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.user = data;
    });
  }

  validateUser(){

  	let validate =true;

  	if(this.userData.nombre==null || this.userData.nombre==""){
  		this.nombreEmpty=true;
  		validate=false;
  	}else{
  		this.nombreEmpty=false;

  	}

  	if(this.userData.apellido==null|| this.userData.apellido==""){
  		this.apellidoEmpty=true;
  		validate=false;
  	}else{
  		this.apellidoEmpty=false;
  	}

  	if(this.userData.fechacNacimiento==null|| this.userData.fechacNacimiento==""){
  		this.fechaEmpty=true;
  		validate=false;
  	}else{
  		this.fechaEmpty=false;
  	}

  	if(this.userData.edad==null|| this.userData.edad==""){
  		this.edadEmpty=true;
  		validate=false;
  	}else{
  		this.edadEmpty=false;
  	}

  	if(this.userData.genero==null|| this.userData.genero==""){
  		this.generoEmpty=true;
  		validate=false;
  	}else{
  		this.generoEmpty=false;
  	}

  	if(this.userData.ciudad==null || this.userData.ciudad==""){
  		this.ciudadEmpty=true;
  		validate=false;
  	}else{
  		this.ciudadEmpty=false;
  	}

  	if(this.userData.email==null || this.userData.email==""){
  		this.emailEmpty=true;
  		validate=false;
  	}else{
  		this.emailEmpty=false;
  	}

  	if(this.userData.login==null || this.userData.login==""){
  		this.loginEmpty=true;
  		validate=false;
  	}else{
  		this.loginEmpty=false;
  	}

  	if(this.userData.password==null || this.userData.password==""){
  		this.passwordEmpty=true;
  		validate=false;
  	}else{
  		this.passwordEmpty=false;
  	}

  	if(validate==false){
  		this.vacio=true;
  		return false;
  	}else{
  		this.vacio=false;
  		return true;
  	}

  }

  updateUser(){

  	console.log("update user");
  	console.log("nombre: "+this.userData.nombre);

  	this.validateUser();

 }

}
