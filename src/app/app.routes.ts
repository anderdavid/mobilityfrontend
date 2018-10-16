import { Routes,RouterModule} from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewUserIdComponent } from './view-user/view-user-id.component';
import { EditUserComponent} from './edit-user/edit-user.component';
import { TestFormComponent} from './test-form/test-form.component';
import { ModuleWithProviders } from '@angular/core';



const appRoutes: Routes =[
  {path:'',redirectTo:'/inicio', pathMatch: 'full'},
  {path:'inicio', component:ViewUserComponent },
  {path:'create', component:CreateUserComponent },
  {path:'view', component:ViewUserComponent },
  {path:'test', component:TestFormComponent },
  {
    path: 'view/:id',
    component: ViewUserIdComponent,
    data: { title: 'Detalle-usuario' }
  },
  {
    path: 'edit/:id',
    component: EditUserComponent,
    data: { title: 'Edit-usuario' }
  },
 
];


export const routes:ModuleWithProviders= RouterModule.forRoot(appRoutes);