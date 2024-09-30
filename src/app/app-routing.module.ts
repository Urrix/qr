import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { UserInfoComponent } from './user-info/user-info.component';


const routes: Routes = [
  { path: 'qr-generator', component: QrGeneratorComponent },
  { path: 'user-info', component: UserInfoComponent } // Página para el generador de QR
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
