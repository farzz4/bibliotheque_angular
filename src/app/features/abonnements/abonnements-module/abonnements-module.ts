import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abonnements',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './abonnements-module.html',
  styleUrls: ['./abonnements-module.scss']
})
export class AbonnementsModule {
  // Types d'abonnement disponibles
  typesAbonnement = [
    { id: 'mensuel', nom: 'Mensuel', prix: 9.99 },
    { id: 'trimestriel', nom: 'Trimestriel', prix: 24.99 },
    { id: 'annuel', nom: 'Annuel', prix: 89.99 }
  ];

  // Méthodes de paiement
  methodesPaiement = [
    { id: 'carte', nom: 'Carte bancaire' },
    { id: 'paypal', nom: 'PayPal' },
    { id: 'virement', nom: 'Virement bancaire' }
  ];

  // Modèle pour stocker les données
  abonnementData = {
    nom: '',
    email: '',
    telephone: '',
    typeAbonnement: '',
    methodePaiement: '',
    conditions: false,
    newsletter: false
  };

  // Méthode pour suivre les éléments dans ngFor
  trackByFn(index: number, item: any): any {
    return item.id;
  }

  onSubmitForm(form: any) {
    if (form.valid) {
      console.log('Abonnement souscrit:', form.value);

      // Calculer le prix en fonction du type d'abonnement
      const typeChoisi = this.typesAbonnement.find(t => t.id === form.value.typeAbonnement);
      const prix = typeChoisi ? typeChoisi.prix : 0;

      alert(`✅ Abonnement souscrit avec succès !\n\n` +
            `Nom: ${this.abonnementData.nom}\n` +
            `Email: ${this.abonnementData.email}\n` +
            `Téléphone: ${this.abonnementData.telephone}\n` +
            `Type: ${typeChoisi?.nom}\n` +
            `Prix: ${prix} €\n` +
            `Paiement: ${this.methodesPaiement.find(m => m.id === this.abonnementData.methodePaiement)?.nom}`);

      // Réinitialiser le formulaire
      form.resetForm();
      this.abonnementData = {
        nom: '', email: '', telephone: '',
        typeAbonnement: '', methodePaiement: '',
        conditions: false, newsletter: false
      };
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });

      alert('❌ Veuillez remplir tous les champs obligatoires.');
    }
  }
}