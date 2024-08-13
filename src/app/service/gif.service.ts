import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Gif } from '../interface/gif';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  API_URL: string = `https://api.giphy.com/v1/gifs/search`;

  constructor(private httpClient: HttpClient) {}

  getGifs(search: string, page: number): Observable<Gif[]> {
    const offset = page * 20;
    const params = new HttpParams()
      .set('api_key', 'eSuJruLdh1NuoFKB4UUXsicSQmvLrmHD')
      .set('q', search)
      .set('limit', '20')
      .set('offset', offset)
      .set('rating', 'g')
      .set('lang', 'en');

    return this.httpClient.get<{ data: Gif[] }>(this.API_URL, { params }).pipe(
      map((response) => response.data),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error code: ${error.status}`;
        }
        return throwError(() => errorMessage);
      })
    );
  }
}
