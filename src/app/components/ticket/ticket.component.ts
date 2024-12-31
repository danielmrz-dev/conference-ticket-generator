import { Component, Input, OnInit } from '@angular/core';
import { ITicketData } from '../../interfaces/ticket-data.interface';
import { UserInfoService } from '../../services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {
  userData: ITicketData = {} as ITicketData;

  constructor(
    private readonly _userInfo: UserInfoService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['data']) {
      this.userData = navigation.extras.state['data'];
    }
  }

  ngOnInit(): void {
    this.userData = this._userInfo.getTicketData()
  }
}
