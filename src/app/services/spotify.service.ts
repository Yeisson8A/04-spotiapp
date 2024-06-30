import { Injectable } from '@angular/core';
// Libreria para manejar peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getQuery(query: string) {
    // Construir url para el servicio
    const url = `https://api.spotify.com/v1/${query}`;

    // Creamos headers con los encabezados necesarios por el servicio
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAKFMkcZKDafMLur-4zmeYOc3B5dyVKFmQnVuKZNDcwkIn_A-eGjQGYX95N2xp5GFzyJmzF31WCJtiSzMhLTxsbsFsiq36spceENvV9NWQRLUjUWc4'
    });

    // Llamamos  al servicio pasandole la url y los headers,
    // subscribiendonos al observador a fin de obtener los datos
    return this._http.get(url, { headers });
  }

  getNewReleases() {
    // Creamos headers con los encabezados necesarios por el servicio
    /* const headers = new HttpHeaders({
      Authorization: 'Bearer BQAsY-IQcDbhCr9d8ST_mPYdi-uO81crXyYSzCgs8Ow8OmeFwury8LUe6fuzDkk4-BQYmiYwFiAIV-QcuMw'
    }); */

    // Llamamos  al servicio pasandole la url y los headers,
    // subscribiendonos al observador a fin de obtener los datos

    // Usamos la función pipe y map para filtrar por la información
    // que únicamente necesitamos de la respuesta del servicio
    /* return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
               .pipe(map((data) => data['albums'].items)); */

    // Usamos la función pipe y map para filtrar por la información
    // que únicamente necesitamos de la respuesta del servicio
    return this.getQuery('browse/new-releases').pipe(map((data) => data['albums'].items));
  }

  getArtists(textSearch: string) {
    // Creamos headers con los encabezados necesarios por el servicio
    /* const headers = new HttpHeaders({
      Authorization: 'Bearer BQAsY-IQcDbhCr9d8ST_mPYdi-uO81crXyYSzCgs8Ow8OmeFwury8LUe6fuzDkk4-BQYmiYwFiAIV-QcuMw'
    }); */

    // Llamamos  al servicio pasandole la url y los headers,
    // subscribiendonos al observador a fin de obtener los datos

    // Usamos la función pipe y map para filtrar por la información
    // que únicamente necesitamos de la respuesta del servicio
    /* return this._http.get(`https://api.spotify.com/v1/search?q=${textSearch}&type=artist`, { headers })
               .pipe(map((data) => data['artists'].items)); */

    // Usamos la función pipe y map para filtrar por la información
    // que únicamente necesitamos de la respuesta del servicio
    return this.getQuery(`search?q=${textSearch}&type=artist`).pipe(map((data) => data['artists'].items));
  }

  getArtist(id: string) {
    // llamamos al servicio del artista pasandole el id
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    // Llamamos al servicio del top track del artista pasandole el id

    // Usamos la función pipe y map para filtrar por la información
    // que únicamente necesitamos de la respuesta del servicio
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data) => data['tracks']));
  }
}
