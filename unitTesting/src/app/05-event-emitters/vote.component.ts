import { EventEmitter } from '@angular/core';

export class VoteComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter(); // Usually as @Output

  // We should test
  // 1. Votes is increased.
  // 2. An event is emited with the vote increased
  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
