import { Routes,RouterModule} from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ModuleWithProviders } from '@angular/core';
/*import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './gallery/contact/contact.component';
import { AboutComponent } from './gallery/about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModuleWithProviders } from '@angular/core';*/

const appRoutes: Routes =[
  {path:'',redirectTo:'/inicio', pathMatch: 'full'},
  {path:'inicio', component:ViewUserComponent },
  {path:'create', component:CreateUserComponent },
  {path:'view', component:ViewUserComponent }
 
];


export const routes:ModuleWithProviders= RouterModule.forRoot(appRoutes);