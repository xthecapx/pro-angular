import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <i
       class="glyphicon glyphicon-heart"
       [class.highlighted]="iLike"
       (click)="click()">
    </i>
    <span>{{ totalLikes }}</span>
    `,
  styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
  @Input() totalLikes = 0;
  @Input() iLike = false;

  // 1. When user click like should be equal to !like
  // 2. If like was true, totalLikes++
  // 3. If like was false, totalLikes--
  click() {
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }
}

