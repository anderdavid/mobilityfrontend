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

  mData:any=[];
  userId = 0;
  deleteUserFlag=false;

  id = this.route.snapshot.params['id'];
  constructor(public rest:UsuarioService, private route: ActivatedRoute,
               private router:Router ) { }

  ngOnInit() {
  	this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.user = data;
    });
  }

  setUserId(id){
    this.userId=id;
    console.log("this.userId: "+this.userId);
  }

  deleteUser(){
      this.mData = [];
      console.log("delete "+this.userId);
      this.rest.deleteUser(this.userId)
      .subscribe((data: {}) => {
        console.log(data);
        this.mData=data;
        

        console.log("deleteUser()");
        console.log(this.mData);
        status =this.mData.estado;
        console.log("deleteUser() status: "+status);


         if(status=="true"){
           this.showAlert();
         }
          
         this.router.navigate(['/view']);
        
        }
      );
    }

  showAlert(){
    this.deleteUserFlag=true;
    console.log("showAlert()  deleteUserFlag: "+this.deleteUserFlag);
  }
  closeAlert(){
    this.deleteUserFlag=false;
    console.log("closeAlert()  deleteUserFlag: "+this.deleteUserFlag);
  }

}
