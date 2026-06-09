import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-livre',
  imports: [CommonModule],
  templateUrl: './livre.html',
  styleUrl: './livre.scss',
})
export class Livre {
  livres = [
    { id: 1, titre: 'Le Petit Prince', auteur: 'Saint-Exupéry', genre: 'Conte philosophique', disponible: true },
    { id: 2, titre: '1984', auteur: 'George Orwell', genre: 'Dystopie', disponible: true },
    { id: 3, titre: 'Les Misérables', auteur: 'Victor Hugo', genre: 'Roman', disponible: false },
    { id: 4, titre: 'Le Comte de Monte-Cristo', auteur: 'Alexandre Dumas', genre: 'Aventure', disponible: true },
    { id: 5, titre: 'Harry Potter à l\'école des sorciers', auteur: 'J.K. Rowling', genre: 'Fantasy', disponible: true },
    { id: 6, titre: 'Le Seigneur des Anneaux', auteur: 'J.R.R. Tolkien', genre: 'Fantasy', disponible: false }
  ];

  // Méthode pour suivre les éléments dans ngFor (optimisation)
  trackByFn(index: number, item: any): any {
    return item.id;
  }

  // Méthode pour emprunter un livre
  emprunterLivre(livre: any): void {
    if (livre.disponible) {
      alert(`📖 Vous avez emprunté "${livre.titre}" de ${livre.auteur}`);
      livre.disponible = false;
    } else {
      alert(`❌ Le livre "${livre.titre}" n'est pas disponible pour le moment.`);
    }
  }

  // Méthode pour voir les détails d'un livre
  voirDetails(livre: any): void {
    alert(`📚 Détails du livre:\n\nTitre: ${livre.titre}\nAuteur: ${livre.auteur}\nGenre: ${livre.genre}\nDisponible: ${livre.disponible ? 'Oui' : 'Non'}`);
  }

  // Méthode pour obtenir le nombre d'auteurs uniques
  getNombreAuteursUniques(): number {
    const auteurs = new Set(this.livres.map(livre => livre.auteur));
    return auteurs.size;
  }

  // Méthode pour obtenir le nombre de livres disponibles
  getNombreLivresDisponibles(): number {
    return this.livres.filter(livre => livre.disponible).length;
  }

  // Méthode pour obtenir les genres uniques
  getGenresUniques(): string[] {
    const genres = new Set(this.livres.map(livre => livre.genre));
    return Array.from(genres);
  }
}
