import { Injectable } from '@angular/core';
import { ITicketData } from '../interfaces/ticket-data.interface';

@Injectable({
    providedIn: 'root',
})
export class UserInfoService {
    
    ticketData: ITicketData = {} as ITicketData;
    isTicketDataFilled: boolean = false;

    saveTicketData(newTicketData: ITicketData) {
        this.ticketData = newTicketData;
        this.isTicketDataFilled = true;
    }

    getTicketData(): ITicketData {
        return this.ticketData;
    }

}
