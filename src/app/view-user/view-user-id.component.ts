import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-view-user-id',
  templateUrl: './view-user-id.component.html',
  styleUrls: ['./view-user-id.component.css']
})
export class ViewUserIdComponent implements OnInit {
  
  user:any;

  id = this.route.snapshot.params['id'];
  constructor(public rest:UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.user = data;
    });
  }

}
