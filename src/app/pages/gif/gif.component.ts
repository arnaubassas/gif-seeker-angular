import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { GifService } from '../../service/gif.service';
import { Gif } from '../../interface/gif';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from '../../components/input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gif',
  standalone: true,
  imports: [CommonModule, CardComponent, InputComponent, FormsModule],
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.css',
})
export class GifComponent implements OnInit {
  public gifResults$!: Observable<Gif[]>;
  public errorMessage!: string;
  searchTerm: string = '';
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
  onSearch() {
    this.searchGifs(this.searchTerm);
    this.searchTerm = '';
  }
}
