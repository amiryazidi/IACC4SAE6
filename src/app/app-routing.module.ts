import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const ROUTES: Routes=[
{path:'home',component:HomeComponent},
{path:'', redirectTo:'/home', pathMatch:'full'},
{path:'product',component:TestComponent},
{path:'form',component:ReactiveFormComponent},
{path:'showApparts/:id',component:ApartmentsComponent},
{path:'product/:id',component:DetailProductComponent},
{path:'residence',component:ResidencesComponent},
{path:'**',component:NotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
