import { Component, OnInit,Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

 constructor(public rest:UsuarioService, private route: ActivatedRoute,
               private router:Router) { 
  }

  userData = new Usuario();
  mData:any=[];

  ngOnInit() {
  }

  addUser() {

  	console.log("CreateUserComponent: addUser()");
    console.log("crear "+this.userData.nombre);
  	this.mData = [];
  	
  	this.rest.addUser(this.userData).subscribe(
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
  }

}
