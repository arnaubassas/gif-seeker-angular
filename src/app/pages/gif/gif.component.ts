import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { GifService } from '../../service/gif.service';
import { Gif } from '../../interface/gif';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from '../../components/input/input.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  pageNumber!: number;
  searchTerm!: string;
  searchParam!: string;

  constructor(
    private service: GifService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchParam = params['search'];
      this.pageNumber = +params['page'];
      this.searchGifs(this.searchParam, this.pageNumber);
    });
  }

  searchGifs(search: string, page: number): void {
    this.gifResults$ = this.service.getGifs(search, page).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
  onSearch() {
    this.router.navigate([this.searchTerm, 1]);
  }
  pagination(action: string) {
    if (action === 'next') {
      this.router.navigate([this.searchParam, this.pageNumber + 1]);
    } else {
      this.router.navigate([this.searchParam, this.pageNumber - 1]);
    }
  }
}
