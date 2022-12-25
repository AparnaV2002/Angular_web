import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomeComponent}from './home/home.component';
import{ AboutComponent}from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { OfferComponent } from './offer/offer.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'offer',
    component:OfferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
