import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() pageNumber!: number;
  @Input() hasMore!: boolean;
  @Output() pageChange = new EventEmitter<string>();

  onPrevious() {
    this.pageChange.emit('previous');
  }

  onNext() {
    this.pageChange.emit('next');
  }
}
