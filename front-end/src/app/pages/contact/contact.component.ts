import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    FooterComponent,
    CommonModule 
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  loading = false;

  form = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private toastr: ToastrService) {}

  sendEmail(formRef: NgForm) {
  if (formRef.invalid) {
    this.toastr.warning(
      'Preencha todos os campos corretamente.',
      'Formulário inválido ⚠️'
    );
    return;
  }

  if (this.loading) return;

  this.loading = true;

  emailjs
    .send(
      'service_cddfzp5',
      'template_p07z8so',
      {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message,
        time: new Date().toLocaleString(),
      },
      'r8MohbNf8FxtAi9ZV'
    )
    .then(() => {
      this.toastr.success(
        'Mensagem enviada com sucesso!',
        'Tudo certo ✅'
      );

      formRef.resetForm();
      this.loading = false;
    })
    .catch(() => {
      this.toastr.error(
        'Erro ao enviar mensagem. Tente novamente.',
        'Ops... ❌'
      );
      this.loading = false;
    });
}
}
