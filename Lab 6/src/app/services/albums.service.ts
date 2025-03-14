import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/albums`);
  }

  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/albums/${albumId}/photos`);
  }

  updateAlbum(id: number, title: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/albums/${id}`, { title });
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/albums/${id}`);
  }
}