import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinion',
  template: `
    <div>Like/Dislike component</div>
    <button id="like" (click)="like()" class="like-button">
      Like | <span class="likes-counter">{{ likes }}</span>
    </button>
    <button id="dislike" (click)="dislike()" class="dislike-button">
      Dislike | <span class="dislikes-counter">{{ dislikes }}</span>
    </button>
  `,
  styles: [
    `
      .like-button,
      .dislike-button {
        font-size: 1rem;
        padding: 5px 10px;
        color: #585858;
      }

      .liked,
      .disliked {
        font-weight: bold;
        color: #1565c0;
      }
    `,
  ],
})
export class OpinionComponent implements OnInit {
  likes = 100;
  dislikes = 25;

  like_button: any;
  dislike_button: any;

  // when dom loaded to see nodes
  ngOnInit(): void {
    this.like_button = document.querySelector('#like');
    this.dislike_button = document.querySelector('#dislike');
  }

  like() {
    // remove liked
    if (this.like_button.classList.contains('liked')) {
      this.like_button.classList.remove('liked');
      this.likes--;

      // like
    } else {
      this.like_button.classList.add('liked');
      this.likes++;

      // remove dislike if there
      if (this.dislike_button.classList.contains('disliked')) {
        this.dislikes--;
        this.dislike_button.classList.remove('disliked');
      }
    }
  }

  dislike() {
    // let like_button = document.querySelector('#like');
    // let dislike_button = document.querySelector('#dislike');

    // remove disliked
    if (this.dislike_button.classList.contains('disliked')) {
      this.dislike_button.classList.remove('disliked');
      this.dislikes--;

      // dislike
    } else {
      this.dislike_button.classList.add('disliked');
      this.dislikes++;

      // remove like if there
      if (this.like_button.classList.contains('liked')) {
        this.likes--;
        this.like_button.classList.remove('liked');
      }
    }
  }
}
