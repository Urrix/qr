import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as QRCode from 'qrcode'; // Importamos la librería QRCode

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css']
})
export class QrGeneratorComponent {
  qrForm: FormGroup;
  qrCodeUrl: string | null = null;  // Declaramos qrCodeUrl

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con los campos necesarios
    this.qrForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  // Genera el QR con un enlace a la página de visualización de los datos
  async generateQR() {
    if (this.qrForm.valid) {
      const formValues = this.qrForm.value;

      // Generamos la URL que será convertida en QR
      const baseUrl = window.location.origin;
      const qrData = `${baseUrl}/user-info?name=${encodeURIComponent(formValues.name)}&email=${encodeURIComponent(formValues.email)}&phone=${encodeURIComponent(formValues.phone)}`;

      // Usamos la librería QRCode para generar la imagen
      this.qrCodeUrl = await QRCode.toDataURL(qrData);  // Convierte la URL a un QR code
    }
  }
}
