import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
//import { faHeart, faStar, faComment } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 0
  cropWidth: number = 90
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  //Font Awesome classes
  //faHeart = faHeart;
  //faComment = faComment;
  //faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 90 / 5
  }

  sendData() {
    this.ratingClicked.emit('The rating is ' + this.rating)
  }

}


