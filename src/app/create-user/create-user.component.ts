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

/*@Input() userData = {
				"nombre" : "",
				"apellido" : "",
				"fechacNacimiento" : "",
				"edad" : "",
				"genero" : "",
				"ciudad" : "",
				"email" : "",
				"login" : "",
				"password" : ""
			}*/
  

  constructor(public rest:UsuarioService, private route: ActivatedRoute,
               private router:Router) { 
  }

  userData = new Usuario();

  ngOnInit() {
  }

  addUser() {

  	console.log("CreateUserComponent: addUser()");

    this.rest.addUser(this.userData).subscribe(
    		(result) => {
      			this.router.navigate(['/view']);
    		}, (err) => {
      			console.log(err);
   			});
  }

}
