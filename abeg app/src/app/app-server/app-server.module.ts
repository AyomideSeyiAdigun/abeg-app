import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServerModule,
    AppModule
  ]
})
export class AppServerModule { }
