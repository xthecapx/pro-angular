import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() myVoteChanged = new EventEmitter();

  upVote() {
    if (this.myVote == 1 ) {
      return;
    }

    this.myVote++;

    this.myVoteChanged.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote == -1) {
      return;
    }

    this.myVote--;

    this.myVoteChanged.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }
}

