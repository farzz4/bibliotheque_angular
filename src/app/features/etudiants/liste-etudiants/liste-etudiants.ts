import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: Date;
  adresse: string;
  niveau: string;
  dateInscription: Date;
  statut: 'actif' | 'inactif';
}

@Component({
  selector: 'app-liste-etudiants',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-etudiants.html',
  styleUrl: './liste-etudiants.scss',
})
export class ListeEtudiants implements OnInit {
  etudiants: Etudiant[] = [];
  etudiantsFiltres: Etudiant[] = [];

  // Filtres
  searchTerm: string = '';
  niveauFilter: string = '';
  statusFilter: string = '';

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    // Données d'exemple
    this.etudiants = [
      {
        id: 1,
        nom: 'Dupont',
        prenom: 'Jean',
        email: 'jean.dupont@email.com',
        telephone: '01 23 45 67 89',
        dateNaissance: new Date('2000-05-15'),
        adresse: '123 Rue de la Paix, Paris',
        niveau: 'L3',
        dateInscription: new Date('2023-09-01'),
        statut: 'actif'
      },
      {
        id: 2,
        nom: 'Martin',
        prenom: 'Marie',
        email: 'marie.martin@email.com',
        telephone: '01 98 76 54 32',
        dateNaissance: new Date('1999-12-03'),
        adresse: '456 Avenue des Étudiants, Lyon',
        niveau: 'M1',
        dateInscription: new Date('2023-09-01'),
        statut: 'actif'
      },
      {
        id: 3,
        nom: 'Durand',
        prenom: 'Pierre',
        email: 'pierre.durand@email.com',
        telephone: '01 11 22 33 44',
        dateNaissance: new Date('2001-08-20'),
        adresse: '789 Boulevard Universitaire, Marseille',
        niveau: 'L2',
        dateInscription: new Date('2022-09-01'),
        statut: 'actif'
      },
      {
        id: 4,
        nom: 'Leroy',
        prenom: 'Sophie',
        email: 'sophie.leroy@email.com',
        telephone: '01 55 66 77 88',
        dateNaissance: new Date('2000-03-10'),
        adresse: '321 Rue des Études, Toulouse',
        niveau: 'M2',
        dateInscription: new Date('2021-09-01'),
        statut: 'inactif'
      },
      {
        id: 5,
        nom: 'Moreau',
        prenom: 'Lucas',
        email: 'lucas.moreau@email.com',
        telephone: '01 44 55 66 77',
        dateNaissance: new Date('1998-11-25'),
        adresse: '654 Place de l\'Université, Bordeaux',
        niveau: 'L1',
        dateInscription: new Date('2023-09-01'),
        statut: 'actif'
      }
    ];

    this.etudiantsFiltres = [...this.etudiants];
  }

  // Méthode pour suivre les éléments dans ngFor
  trackByFn(index: number, item: Etudiant): number {
    return item.id;
  }

  // Filtrage des étudiants
  filterEtudiants(): void {
    this.etudiantsFiltres = this.etudiants.filter(etudiant => {
      const matchesSearch = !this.searchTerm ||
        `${etudiant.prenom} ${etudiant.nom}`.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        etudiant.email.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesNiveau = !this.niveauFilter || etudiant.niveau === this.niveauFilter;
      const matchesStatus = !this.statusFilter || etudiant.statut === this.statusFilter;

      return matchesSearch && matchesNiveau && matchesStatus;
    });
  }

  // Effacer les filtres
  clearFilters(): void {
    this.searchTerm = '';
    this.niveauFilter = '';
    this.statusFilter = '';
    this.filterEtudiants();
  }

  // Méthodes pour les statistiques
  getEtudiantsActifs(): number {
    return this.etudiants.filter(e => e.statut === 'actif').length;
  }

  getEtudiantsParNiveau(): number {
    const niveaux = new Set(this.etudiants.map(e => e.niveau));
    return niveaux.size;
  }

  getMoyenneAge(): number {
    if (this.etudiants.length === 0) return 0;
    const totalAge = this.etudiants.reduce((sum, e) => sum + this.calculerAge(e.dateNaissance), 0);
    return Math.round(totalAge / this.etudiants.length);
  }

  // Calculer l'âge
  calculerAge(dateNaissance: Date): number {
    const today = new Date();
    const birthDate = new Date(dateNaissance);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  // Actions sur les étudiants
  voirDetails(etudiant: Etudiant): void {
    alert(`📋 Détails de l'étudiant:\n\n` +
          `Nom: ${etudiant.prenom} ${etudiant.nom}\n` +
          `Email: ${etudiant.email}\n` +
          `Téléphone: ${etudiant.telephone}\n` +
          `Date de naissance: ${etudiant.dateNaissance.toLocaleDateString()}\n` +
          `Âge: ${this.calculerAge(etudiant.dateNaissance)} ans\n` +
          `Adresse: ${etudiant.adresse}\n` +
          `Niveau: ${etudiant.niveau}\n` +
          `Inscription: ${etudiant.dateInscription.toLocaleDateString()}\n` +
          `Statut: ${etudiant.statut}`);
  }

  modifierEtudiant(etudiant: Etudiant): void {
    alert(`✏️ Modification de l'étudiant ${etudiant.prenom} ${etudiant.nom}\n\nFonctionnalité à implémenter...`);
  }

  toggleStatut(etudiant: Etudiant): void {
    etudiant.statut = etudiant.statut === 'actif' ? 'inactif' : 'actif';
    alert(`✅ Statut de l'étudiant ${etudiant.prenom} ${etudiant.nom} mis à jour: ${etudiant.statut}`);
  }

  ajouterEtudiant(): void {
    alert(`➕ Création d'un nouvel étudiant\n\nFonctionnalité à implémenter...`);
  }

  exporterListe(): void {
    alert(`📄 Export de la liste des étudiants\n\nFonctionnalité à implémenter...`);
  }
}