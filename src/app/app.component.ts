import { Component } from '@angular/core';

export interface fruits {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuValue = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Ion-button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'heart' }
  ];

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];


  searchTerm: string = '';

  items: fruits[] = [{ name:"abacaxi" }, { name:"mamão" }, { name:"goiaba" }, { name:"amora"}];

  chosenName: string = '';
  
  constructor() {}

  addValue(item: fruits) {
    this.searchTerm = item.name; 
    this.chosenName = item.name;
  }

  inputValueSearch(value: any) {
    this.searchTerm = value.target.value;
    if(value === '') {
      this.chosenName = '';
      this.searchTerm = ''; 
    }
  }

  resetName() {
    this.searchTerm = '';
    this.chosenName = '';
  }
   
}
