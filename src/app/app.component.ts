import { Component } from '@angular/core';
import { PokeApiService } from './poke-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    PokeApiService
  ]
})
export class AppComponent {
  title = 'poke-api';
}
