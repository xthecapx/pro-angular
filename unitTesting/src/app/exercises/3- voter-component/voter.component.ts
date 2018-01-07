import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'voter',
  template: `
    <div class="voter">
        <i
            class="glyphicon glyphicon-menu-up vote-button"
            [class.highlighted]="myVote == 1"
            (click)="upVote()"></i>

        <span class="vote-count">{{ totalVotes }}</span>

        <i
            class="glyphicon glyphicon-menu-down vote-button"
            [class.highlighted]="myVote == -1"
            (click)="downVote()"></i>
    </div>
    `,
  styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }

        .vote-count {
            font-size: 1.2em;
        }

        .vote-button {
            cursor: pointer;
        }

        .highlighted {
            font-weight: bold;
            color: orange;
        }
    `]
})
export class VoterComponent {
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() myVoteChanged = new EventEmitter();

  // 1. Should increment totalVotes
  // 2. if myVote = 1, and call upVote() totalVotes won't increment
  // 3. If no votes and call upVote() should emit { myVote: 1 }
  // 4. If you have votes and call upVote() it shouldn't emit.
  upVote() {
    if (this.myVote == 1) {
      return;
    }

    this.myVote++;
    this.myVoteChanged.emit({ myVote: this.myVote });
  }

  // 1. Should decrement totalVotes
  // 2. If myVote = -1. won't decrement votes
  // 3. When decrement votes it should emit { myVote: -1 }
  // 4. If myVote = -1. won't emit.
  downVote() {
    if (this.myVote == -1) {
      return;
    }

    this.myVote--;
    this.myVoteChanged.emit({ myVote: this.myVote });
  }

  // 1. If othersVote = 10 and myVote = 1, returns 11
  get totalVotes(): number {
    return this.othersVote + this.myVote;
  }
}

