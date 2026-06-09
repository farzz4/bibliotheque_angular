import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiants',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './fomulaire-etudiants.html',
  styleUrl: './fomulaire-etudiants.scss',
})
export class FomulaireEtudiants implements OnInit {
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmitForm() {
    if (this.studentForm.valid) {
      console.log('Données du formulaire:', this.studentForm.value);

      alert(
        `Étudiant ajouté :\n` +
        `${this.studentForm.value.nom} ${this.studentForm.value.prenom}\n` +
        `Email : ${this.studentForm.value.email}\n` +
        `Téléphone : ${this.studentForm.value.telephone}`
      );

      this.studentForm.reset();
    }
  }

  get nom() { return this.studentForm.get('nom'); }
  get prenom() { return this.studentForm.get('prenom'); }
  get email() { return this.studentForm.get('email'); }
  get telephone() { return this.studentForm.get('telephone'); }
}