import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// Servicio
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // paises: any[] = [];

  // constructor( private _http: HttpClient) {
    // Para realizar una petición GET,
    // usamos un observable y nos subscribimos
    // a fin de poder obtener los datos
    /* this._http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((data: any) => {
          this.paises = data;
          console.log(data);
        }); */
  // }

  newsReleases: any[] = [];
  loading: boolean;

  // Variables para manejo de errores
  error: boolean;
  messageError: string;

  constructor(private _spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this._spotify.getNewReleases()
        .subscribe((data: any) => {
          this.newsReleases = data;
          this.loading = false;
        }, (errorService: any) => { // En caso de error
          this.loading = false;
          this.error = true;
          this.messageError = errorService.error.error.message;
        });
  }

}
