import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-fomulaire-etudiants',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- Verifie bien ces deux-là
  templateUrl: './fomulaire-etudiants.html',
  styleUrls: ['./fomulaire-etudiants.scss']
})
export class FomulaireEtudiants {
  // Cette variable DOIT être ici
  student = {
    nom: '',
    prenom: '',
    email: ''
  };

  // Cette fonction DOIT être ici
  onSubmitForm(form: NgForm) {
    console.log('Formulaire:', form.value);
    if (form.valid) {
      alert('Succès !');
      form.resetForm();
    }
  }
}
