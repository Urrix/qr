import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  name: string | null = '';
  email: string | null = '';
  phone: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Lee los parámetros de la URL
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.phone = this.route.snapshot.queryParamMap.get('phone');
  }
}
