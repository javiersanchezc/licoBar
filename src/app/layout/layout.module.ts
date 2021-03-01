import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent ],
  imports: [
    CommonModule,RouterModule,SharedModule,MaterialModule
  ],
  exports: [ShellComponent]
})
export class LayoutModule { }
