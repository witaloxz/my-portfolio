import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../core/reveal.directive';
import { CV_FILE } from '../../core/translations';

// EmailJS — public keys are meant to be exposed client-side and are
// domain-restricted in the EmailJS dashboard. Swap these for your own.
const EMAILJS = {
  serviceId: 'service_cddfzp5',
  templateId: 'template_p07z8so',
  publicKey: 'r8MohbNf8FxtAi9ZV',
};

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly i18n = inject(I18nService);
  readonly cvFile = CV_FILE;

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly status = signal<SendStatus>('idle');

  /** Error key for a control, or null when it's valid / untouched. */
  errorKey(name: 'name' | 'email' | 'message'): 'required' | 'email' | 'short' | null {
    const control = this.form.controls[name];
    if (!control.touched || control.valid) {
      return null;
    }
    if (control.errors?.['required']) return 'required';
    if (control.errors?.['email']) return 'email';
    return 'short';
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const { name, email, message } = this.form.getRawValue();

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { name, email, message, time: new Date().toLocaleString() },
        { publicKey: EMAILJS.publicKey },
      );
      this.status.set('sent');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }
}
