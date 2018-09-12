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
    usuario:Usuario;

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

  ngOnInit() {

  	this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.user = data;
      console.log(this.user);
      this.usuario =this.user.usuario;
      this.usuario.fechacNacimiento=this.user.usuario.fechac_nacimiento;
      console.log(this.usuario);
    });
  }

  validateUser(){

  	let validate =true;

  	if(this.usuario.nombre==null || this.usuario.nombre==""){
  		this.nombreEmpty=true;
  		validate=false;
  	}else{
  		this.nombreEmpty=false;

  	}

  	if(this.usuario.apellido==null|| this.usuario.apellido==""){
  		this.apellidoEmpty=true;
  		validate=false;
  	}else{
  		this.apellidoEmpty=false;
  	}

  	if(this.usuario.fechacNacimiento==null|| this.usuario.fechacNacimiento==""){
  		this.fechaEmpty=true;
  		validate=false;
  	}else{
  		this.fechaEmpty=false;
  	}

  	if(this.usuario.edad==null|| this.usuario.edad==""){
  		this.edadEmpty=true;
  		validate=false;
  	}else{
  		this.edadEmpty=false;
  	}

  	if(this.usuario.genero==null|| this.usuario.genero==""){
  		this.generoEmpty=true;
  		validate=false;
  	}else{
  		this.generoEmpty=false;
  	}

  	if(this.usuario.ciudad==null || this.usuario.ciudad==""){
  		this.ciudadEmpty=true;
  		validate=false;
  	}else{
  		this.ciudadEmpty=false;
  	}

  	if(this.usuario.email==null || this.usuario.email==""){
  		this.emailEmpty=true;
  		validate=false;
  	}else{
  		this.emailEmpty=false;
  	}

  	if(this.usuario.login==null || this.usuario.login==""){
  		this.loginEmpty=true;
  		validate=false;
  	}else{
  		this.loginEmpty=false;
  	}

  	if(this.usuario.password==null || this.usuario.password==""){
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
  	console.log("nombre: "+this.usuario.nombre);

  	if(this.validateUser()){

      this.rest.updateUser(this.route.snapshot.params['id'], this.usuario).subscribe(
      (data:{})=>{
        console.log(data);
         this.mData=data;
         status =this.mData.status;

         if(status=="true"){
               this.router.navigate(['/view']);
           }
        },
      (err) => {
            console.log(err);
         }  


      );

      /*this.rest.updateUser(this.route.snapshot.params['id'], this.usuario).subscribe((result) => {
        this.router.navigate(['/view']);
      }, (err) => {
        console.log(err);
      });*/
    
    }

    
  

  }

 



 }

 
