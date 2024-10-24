import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Reproducir el video al pasar el mouse
    document.querySelectorAll('.trabajo').forEach(trabajo => {
      const video = trabajo.querySelector('video');
      
      if (video) {  // Verifica si el video existe
        trabajo.addEventListener('mouseenter', () => {
          video.currentTime = 0;
          video.play();
        });

        trabajo.addEventListener('mouseleave', () => {
          video.pause();
          video.currentTime = 0;
        });
      }
    });

    // Lógica del modal
    const modal = document.getElementById('myModal') as HTMLElement;
    const modalBtns = document.querySelectorAll('.modalBtn') as NodeListOf<HTMLElement>;
    const closeBtn = document.querySelector('.close') as HTMLElement;

    modalBtns.forEach(button => {
      button.addEventListener('click', function() {
        modal.style.display = 'flex';
      });
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

}
