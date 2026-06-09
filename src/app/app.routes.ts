import { Routes } from '@angular/router';
import { AbonnementsModule } from './features/abonnements/abonnements-module/abonnements-module';
import { ListeAbonnement } from './features/abonnements/liste-abonnement/liste-abonnement';
import { FomulaireEtudiants } from './features/etudiants/fomulaire-etudiants/fomulaire-etudiants';
import { ListeEtudiants } from './features/etudiants/liste-etudiants/liste-etudiants';
import { Layout } from './core/layout/layout';
import { Livre } from './features/livre/livre';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'livres',
        component: Livre
      },
      {
        path: 'liste-etudiants',
        component: ListeEtudiants
      },
      {
        path: 'formulaire-etudiants',
        component: FomulaireEtudiants
      },
      {
        path: 'liste-abonnements',
        component: ListeAbonnement
      },
      {
        path: 'formulaire-abonnements',
        component: AbonnementsModule
      },
      {
        path: '',
        redirectTo: 'livres',
        pathMatch: 'full'
      }
    ]
  }
];
