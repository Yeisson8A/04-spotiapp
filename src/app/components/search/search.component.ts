import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  // Variables para manejo de errores
  error: boolean;
  messageError: string;

  constructor(private _spotifyService: SpotifyService) { }

  search(textSearch: string) {
    this.loading = true;
    this.error = false;

    if (textSearch !== '') {
      this._spotifyService.getArtists(textSearch)
          .subscribe((data: any) => {
             this.artists = data;
             this.loading = false;
          }, (errorService: any) => { // En caso de error
            this.loading = false;
            this.error = true;
            this.messageError = errorService.error.error.message;
          });
    } else {
      this.artists = [];
      this.loading = false;
    }
  }

}
