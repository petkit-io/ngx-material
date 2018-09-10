import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOperationComponent } from './mat-operation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatOperationComponent,
  ],
  declarations: [
    MatOperationComponent,
  ]
})
export class MatOperationModule { }
