import { Component, OnInit,Input} from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  

  users:any = [];
  mData:any=[];
  userId = 0;
  deleteUserFlag=false;

  constructor(private usuarioService:UsuarioService,private rest:UsuarioService) { }

  ngOnInit() {
    this.getUser();
    console.log("ngOnInit()  deleteUserFlag: "+this.deleteUserFlag);
  }
  
  getUser() {
    console.log("viewUserComponent:getUser");

    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
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

         this.getUser();
        
        }
      );
    }

  setUserId(id){
    this.userId=id;
    console.log("this.userId: "+this.userId);
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
