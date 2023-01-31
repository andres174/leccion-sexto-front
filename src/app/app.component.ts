import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Mis canciones', url: '/mis-canciones', icon: 'musical-notes' },
  ];
  constructor(private router: Router) {}

  nHome(){
    this.router.navigate(['/home']);
  }
}
