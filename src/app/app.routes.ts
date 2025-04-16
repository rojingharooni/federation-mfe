import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
 // {path:'',component:AppComponent},
 // {path:'',redirectTo:'',pathMatch:'full'},
  {path:'test',component:TestComponent},
  {path:'tt',loadChildren:()=>import('./share/share.module').then(m=>m.ShareModule)}
];
