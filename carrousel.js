class Carousel {
  constructor(element) {
      this.container = element;
      this.currentIndex = 0;
      this.isPaused = false;
      this.pauseTimeout = null;
      console.log('Carousel initialized');
      this.images = [
          {
              url: "/images/IMG_2190.jpg",
              alt: "Salle de consultation",
              caption: "Un environnement propice à l'échange"
          },
          {
              url: "/images/IMG_2193.jpg",
              alt: "Salle de consultation",
              caption: "Un cadre serein et professionnel"
          },
          {
            url: "/images/IMG_1669.jpg",
            alt: "Espace d'attente",
            caption: "L'espace d'attente"
        }
      ];

      this.track = this.container.querySelector('.carousel-track');
      this.prevButton = this.container.querySelector('.nav-button-prev');
      this.nextButton = this.container.querySelector('.nav-button-next');
      this.indicators = this.container.querySelector('.indicators');

      this.setupCarousel();
      this.setupEventListeners();
      this.startAutoplay();
  }

  setupCarousel() {
      // Créer les slides
      this.images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            if (index === this.currentIndex) {
            slide.classList.add('activeLeft');
            }
    
            const img = document.createElement('img');
            img.src = image.url;
            img.alt = image.alt;
            img.loading = 'lazy';
    
            const caption = document.createElement('div');
            caption.className = 'slide-caption';
    
            const captionText = document.createElement('p');
            captionText.className = 'caption-text';
            captionText.textContent = image.caption;
    
            caption.appendChild(captionText);
            slide.appendChild(img);
            slide.appendChild(caption);
            this.track.appendChild(slide);

          // Créer les indicateurs
          const indicator = document.createElement('button');
          indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
          indicator.setAttribute('aria-label', `Aller à l'image ${index + 1}`);
          this.indicators.appendChild(indicator);
      });
  }

  setupEventListeners() {
      this.prevButton.addEventListener('click', () => this.goToSlide(
          this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1,'right'
      ));

      this.nextButton.addEventListener('click', () => this.goToSlide(
          this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1,'left'
      ));

      // Ajouter les événements pour les indicateurs
      const indicatorButtons = this.indicators.querySelectorAll('.indicator');
      indicatorButtons.forEach((button, index) => {
          button.addEventListener('click', () => this.goToSlide(index));
      });

       // Pause sur hover et touch
    const pauseCarousel = () => {
        this.isPaused = true;
        if (this.pauseTimeout) {
          clearTimeout(this.pauseTimeout); // Annuler le précédent timeout
        }
        this.pauseTimeout = setTimeout(() => {
          this.isPaused = false;
          console.log("End of pause");
        }, 10000);
        console.log('Carousel paused');
      };
  
      this.container.addEventListener('mouseenter', pauseCarousel);
      this.container.addEventListener('touchstart', pauseCarousel);
    }
    
  

  goToSlide(index, direction) {
      console.log(this.isPaused);
      
      const slides = this.track.querySelectorAll('.carousel-slide');
      if(direction === 'left') {
        slides.forEach((slide, i) => {
            slide.classList.remove('activeLeft','activeRight','previousLeft','previousRight');
            if (i === this.currentIndex) {
            slide.classList.add('previousLeft');
            }
            if (i === index) {
            slide.classList.add('activeLeft');
            }
        
         });
        }
      
        else {//right
            slides.forEach((slide, i) => {
                slide.classList.remove('activeRight','activeLeft','previousLeft','previousRight');
                if (i === this.currentIndex) {
                slide.classList.add('previousRight');
                }
                if (i === index) {
                slide.classList.add('activeRight');
                }
            });
            }
        
      
  
      this.currentIndex = index;
  
      // Mettre à jour les indicateurs
      this.indicators.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }

  startAutoplay() {
      setInterval(() => {
          if (!this.isPaused) {
            console.log("paused is false switching slide");
              const nextIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
              this.goToSlide(nextIndex);
          }
          else {
            console.log("paused is true, not switching slide");
          }
      }, 3500);
  }
}

// Initialiser le carrousel
document.addEventListener('DOMContentLoaded', () => {
  new Carousel(document.getElementById('carousel'));
});