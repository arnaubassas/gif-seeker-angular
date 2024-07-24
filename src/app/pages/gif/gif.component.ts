import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { GifService } from '../../service/gif.service';
import { Gif } from '../../interface/gif';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.css',
})
export class GifComponent implements OnInit {
  public gifResults$!: Observable<Gif[]>;
  public errorMessage!: string;
  constructor(private service: GifService) {}

  ngOnInit(): void {
    this.searchGifs('jack');
  }

  searchGifs(search: string): void {
    this.gifResults$ = this.service.getGifs(search).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
