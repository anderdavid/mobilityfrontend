import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsuarioService } from './services/usuario.service';
import { Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserIdComponent } from './view-user/view-user-id.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TestFormComponent } from './test-form/test-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    ViewUserComponent,
    CreateUserComponent,
    ViewUserIdComponent,
    EditUserComponent,
    TestFormComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
