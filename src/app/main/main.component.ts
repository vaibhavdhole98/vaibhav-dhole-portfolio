import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  showNavbar: boolean = false;
  showBurgerMenu: boolean = false;
  showNavbar2: boolean = false;
  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }

  @HostListener('document:click', ['$event'])
  clickOutsideHeader(event: MouseEvent) {
    const header = document.querySelector('header');
    if (header && !header.contains(event.target as Node)) {
      this.showBurgerMenu = false;
    }
  }

  downloadPdf(): void {
    //  E:\Real Projects\vaibhav-portfolio-website\src\assets\downloads\Vaibhav Dhole (Angular Developer).pdf
    //const pdfUrl = 'assets/downloads/Vaibhav Dhole (Angular Developer).pdf'; // Path to your PDF file
    const pdfUrl = 'assets/downloads/Vaibhav Dhole Angular Developer (Resume).pdf'; // Path to your PDF file

    //   const link = document.createElement('a');
    //   link.href = pdfUrl;
    //   link.download = 'Vaibhav Dhole (Angular Developer).pdf'; // Name of the downloaded file
    window.open(pdfUrl, '_blank');
    //   link.click();
  }
}
