import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(
      albums => {
        this.albums = albums;
        console.log('Albums loaded:', albums);
      },
      error => {
        console.error('Error loading albums:', error);
      }
    );
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  viewAlbumDetails(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}