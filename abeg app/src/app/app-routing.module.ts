import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserloginGuard } from './guards/userlogin.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterNameComponent } from './register-name/register-name.component';
import { UserServiceService } from './services/user-service.service';
import { WalletPageComponent } from './wallet-page/wallet-page.component';


const routes: Routes = [
  {path:'', redirectTo:"ETHWAS",pathMatch:'full'},
  {path:'ETHWAS', component:LandingPageComponent},
  {path:'ETHWAS/Login',component:LoginPageComponent},
  {path:'ETHWAS/SignUp',component:RegisterNameComponent},
  {path:'ETHWAS/:id',component:WalletPageComponent, canActivate:[UserloginGuard]},
  {path:'Dashboard/:id',component:DashboardComponent, canActivate:[UserloginGuard]},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canLoad:[UserServiceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
