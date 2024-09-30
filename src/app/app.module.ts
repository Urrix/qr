import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { AppComponent } from './app.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    QrGeneratorComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // Asegúrate de que ReactiveFormsModule está en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
