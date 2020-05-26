import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BastketRoutingModule } from './bastket-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BastketRoutingModule,
    SharedModule
  ]
})
export class BasketModule { }
