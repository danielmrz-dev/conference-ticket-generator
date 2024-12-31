import { Routes } from '@angular/router';
import { TicketFormComponent } from './pages/ticket-form/ticket-form.component';

export const routes: Routes = [
    { path: '', component: TicketFormComponent },
    { 
        path: 'ticket', 
        loadComponent: () => import('./components/ticket/ticket.component').then(m => m.TicketComponent) 
    },
];
