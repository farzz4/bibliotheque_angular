import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Abonnement {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  type: string;
  prix: number;
  methodePaiement: string;
  dateInscription: Date;
  dateExpiration: Date;
  statut: 'actif' | 'inactif' | 'expire';
}

@Component({
  selector: 'app-liste-abonnement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-abonnement.html',
  styleUrl: './liste-abonnement.scss',
})
export class ListeAbonnement implements OnInit {
  abonnements: Abonnement[] = [];
  abonnementsFiltres: Abonnement[] = [];

  // Filtres
  searchTerm: string = '';
  statusFilter: string = '';
  typeFilter: string = '';

  ngOnInit(): void {
    this.loadAbonnements();
  }

  loadAbonnements(): void {
    // Données d'exemple
    this.abonnements = [
      {
        id: 1,
        nom: 'Jean Dupont',
        email: 'jean.dupont@email.com',
        telephone: '01 23 45 67 89',
        type: 'annuel',
        prix: 89.99,
        methodePaiement: 'carte bancaire',
        dateInscription: new Date('2024-01-15'),
        dateExpiration: new Date('2025-01-15'),
        statut: 'actif'
      },
      {
        id: 2,
        nom: 'Marie Martin',
        email: 'marie.martin@email.com',
        telephone: '01 98 76 54 32',
        type: 'mensuel',
        prix: 9.99,
        methodePaiement: 'paypal',
        dateInscription: new Date('2024-03-01'),
        dateExpiration: new Date('2024-04-01'),
        statut: 'actif'
      },
      {
        id: 3,
        nom: 'Pierre Durand',
        email: 'pierre.durand@email.com',
        telephone: '01 11 22 33 44',
        type: 'trimestriel',
        prix: 24.99,
        methodePaiement: 'virement',
        dateInscription: new Date('2023-12-01'),
        dateExpiration: new Date('2024-03-01'),
        statut: 'expire'
      },
      {
        id: 4,
        nom: 'Sophie Leroy',
        email: 'sophie.leroy@email.com',
        telephone: '01 55 66 77 88',
        type: 'annuel',
        prix: 89.99,
        methodePaiement: 'carte bancaire',
        dateInscription: new Date('2024-02-20'),
        dateExpiration: new Date('2025-02-20'),
        statut: 'actif'
      }
    ];

    this.abonnementsFiltres = [...this.abonnements];
  }

  // Méthode pour suivre les éléments dans ngFor
  trackByFn(index: number, item: Abonnement): number {
    return item.id;
  }

  // Filtrage des abonnements
  filterAbonnements(): void {
    this.abonnementsFiltres = this.abonnements.filter(abonnement => {
      const matchesSearch = !this.searchTerm ||
        abonnement.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        abonnement.email.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus = !this.statusFilter || abonnement.statut === this.statusFilter;
      const matchesType = !this.typeFilter || abonnement.type === this.typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }

  // Effacer les filtres
  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = '';
    this.typeFilter = '';
    this.filterAbonnements();
  }

  // Méthodes pour les statistiques
  getAbonnementsActifs(): number {
    return this.abonnements.filter(a => a.statut === 'actif').length;
  }

  getAbonnementsExpires(): number {
    return this.abonnements.filter(a => a.statut === 'expire').length;
  }

  getRevenusTotaux(): string {
    const total = this.abonnements.reduce((sum, a) => sum + a.prix, 0);
    return total.toFixed(2);
  }

  // Actions sur les abonnements
  voirDetails(abonnement: Abonnement): void {
    alert(`📋 Détails de l'abonnement:\n\n` +
          `Nom: ${abonnement.nom}\n` +
          `Email: ${abonnement.email}\n` +
          `Téléphone: ${abonnement.telephone}\n` +
          `Type: ${abonnement.type}\n` +
          `Prix: ${abonnement.prix}€\n` +
          `Paiement: ${abonnement.methodePaiement}\n` +
          `Inscription: ${abonnement.dateInscription.toLocaleDateString()}\n` +
          `Expiration: ${abonnement.dateExpiration.toLocaleDateString()}\n` +
          `Statut: ${abonnement.statut}`);
  }

  modifierAbonnement(abonnement: Abonnement): void {
    alert(`✏️ Modification de l'abonnement de ${abonnement.nom}\n\nFonctionnalité à implémenter...`);
  }

  toggleStatut(abonnement: Abonnement): void {
    abonnement.statut = abonnement.statut === 'actif' ? 'inactif' : 'actif';
    alert(`✅ Statut de l'abonnement de ${abonnement.nom} mis à jour: ${abonnement.statut}`);
  }

  ajouterAbonnement(): void {
    alert(`➕ Création d'un nouvel abonnement\n\nFonctionnalité à implémenter...`);
  }

  exporterListe(): void {
    alert(`📄 Export de la liste des abonnements\n\nFonctionnalité à implémenter...`);
  }
}
