import { Routes } from '@angular/router';
import { TicketFormComponent } from './pages/ticket-form/ticket-form.component';
import { ticketPageProtectorGuard } from './guards/ticket-page-protector.guard';
import { TicketComponent } from './components/ticket/ticket.component';

export const routes: Routes = [
    { path: '', component: TicketComponent },
    // { path: '', component: TicketFormComponent },
    { 
        path: 'ticket', 
        loadComponent: () => import('./components/ticket/ticket.component').then(m => m.TicketComponent),
        canActivate: [ticketPageProtectorGuard]
    },
];
