import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbumById(id).subscribe(album => {
      this.album = album;
      this.newTitle = album.title;
    });
  }

  saveTitle(): void {
    this.albumsService.updateAlbum(this.album.id, this.newTitle).subscribe(() => {
      this.album.title = this.newTitle;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}