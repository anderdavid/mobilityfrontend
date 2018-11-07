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

  Ciudades = ["Bogota","Medellin","Cali","Pereira","Armenia","Pasto","Ipiales"];
  years = ["1900","1901","1902","1903","1904","1905","1906","1907","1908","1909","1910","1911","1912","1913","1914","1915","1916","1917","1918","1919","1920","1921","1922","1923","1924","1925","1926","1927","1928","1929","1930","1931","1932","1933","1934","1935","1936","1937","1938","1939","1940","1941","1942","1943","1944","1945","1946","1947","1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004"];
  months=["01","02","03","04","05","06","07","08","09","10","11","12"];
  days=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

  year="1900";
  month="01";
  day="01";
  date="";
  
  nombreEmpty=false;
  apellidoEmpty=false;
  fechaEmpty=false;
  edadEmpty=false;
  generoEmpty=false;
  ciudadEmpty=false;
  emailEmpty=false;
  loginEmpty=false;
  passwordEmpty=false;

  vacio=false;

  user:any;
  
  usuario=new Usuario();
  userData = new Usuario();

  mData:any=[];

  existUserFlag =false;
  msgError="Error";

 constructor(public rest:UsuarioService, private route: ActivatedRoute,
               private router:Router) { 
  }

  ngOnInit() {
	
	this.usuario.genero="M";
    this.usuario.ciudad="Bogota";
    this.usuario.edad="undefine";
  }

  createUser(){ 
    console.log("createUser()");
    alert("createUser");
  }

  addUser() {

  	console.log("CreateUserComponent: addUser()");
    console.log("crear "+this.usuario.nombre);
  	this.mData = [];

  	if(this.validateUser()){

  		this.rest.addUser(this.usuario).subscribe(
        (data:{})=>{
          console.log(data);
          this.mData=data;
          status =this.mData.status;

		  if(status=="true"){
            this.router.navigate(['/view']);
          }else if(status=="false"){
            this.showExistUser();
            this.msgError =this.mData.msg;
          }
        },
        (err) => {
          console.log(err);
        }  


        );
  	}
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

  showExistUser(){
    this.existUserFlag=true;
    console.log("showExistUser()  deleteUserFlag: "+this.existUserFlag);
  }
  closeAlertExistUser(){
  	this.existUserFlag=false;
    console.log("closeAlertExistUser()  deleteUserFlag: "+this.existUserFlag);
  }


  onSelectYear(year){
    console.log(year);
    this.year =year;

    this.usuario.fechacNacimiento=this.year+"-"+this.month+"-"+this.day;
  }
  onSelectMonth(month){
     console.log(month);
     this.month =month;

     this.usuario.fechacNacimiento=this.year+"-"+this.month+"-"+this.day;
  }
  onSelectDay(day){
    console.log(day);
    this.day =day;

    this.usuario.fechacNacimiento=this.year+"-"+this.month+"-"+this.day;
  }

  CalculateAge(fechaNacimiento): number{
    let edad=null;

    if(fechaNacimiento!=null){
      var timeDiff =Math.abs(Date.now()-Date.parse(fechaNacimiento));
      edad = Math.ceil((timeDiff/(1000*3600*24))/365);
      
      var date =Date.now();
      console.log("edad de nacimiento "+Date.parse(fechaNacimiento));
      console.log("fecha actual "+Date.now());
      console.log("timediff "+timeDiff);
      console.log("edad: "+edad);
    }
    return edad;
  }



 }
