import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  
  currentRoute = '/';
  
  constructor(private router: Router) {
    // Suivre les changements de route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }
  
 
  getCurrentPageName(): string {
    const route = this.currentRoute.split('/')[1];
    const pageNames: { [key: string]: string } = {
      'etudiants': 'Étudiants',
      'abonnements': 'Abonnements',
      'livre': 'Livres',
      'formulaire': 'Formulaire',
      'liste': 'Liste'
    };
    
    if (!route || route === '') {
      return 'Accueil';
    }
    
    return pageNames[route] || route.charAt(0).toUpperCase() + route.slice(1);
  }
}