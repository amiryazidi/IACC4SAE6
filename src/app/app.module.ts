import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ResidencesComponent } from './residences/residences.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ResidencesComponent,
    HomeComponent,
    NotFoundComponent,
    DetailProductComponent,
    ApartmentsComponent,
    ReactiveFormComponent,
    TvComponent,
    MobileComponent,
    ShowOneProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
