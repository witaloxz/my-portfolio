import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

declare global {
  interface Window {
    particlesJS: any;
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  textos = ['Full-Stack', 'Java', 'Spring Boot', 'Angular', 'APIs RESTful', 'Microserviços' ];
  textoDigitado = '';

  private textoIndex = 0;
  private charIndex = 0;
  private apagando = false;
  private intervalId: any;

  ngAfterViewInit() {
    
    setTimeout(() => {
      if (window.particlesJS) { 
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 60 },
            color: { value: "#3498db" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3498db",
              opacity: 0.4,
              width: 1
            },
            move: { enable: true, speed: 2 }
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" }
            }
          }
        });
        console.log('✅ Partículas carregadas!');
      } else {
        console.error('❌ particlesJS não encontrado!');
      }
    }, 500);
  }

  ngOnInit() {
    this.iniciarAnimacao();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  iniciarAnimacao() {
    this.intervalId = setInterval(() => {

      const textoAtual = this.textos[this.textoIndex];

      if (!this.apagando) {
        this.textoDigitado = textoAtual.slice(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === textoAtual.length) {
          setTimeout(() => this.apagando = true, 1200);
        }

      } else {
        this.textoDigitado = textoAtual.slice(0, this.charIndex - 1);
        this.charIndex--;

        if (this.charIndex === 0) {
          this.apagando = false;
          this.textoIndex = (this.textoIndex + 1) % this.textos.length;
        }
      }

    }, this.apagando ? 30 : 100);
  }
}