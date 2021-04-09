import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{OpenaccountComponent} from '../app/components/openaccount/openaccount.component';
import{LoginComponent} from '../app/components/login/login.component'
const routes: Routes = [
{path : 'openaccount', component:OpenaccountComponent},
{path : 'login', component:LoginComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
