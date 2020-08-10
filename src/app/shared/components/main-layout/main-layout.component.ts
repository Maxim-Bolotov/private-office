import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
