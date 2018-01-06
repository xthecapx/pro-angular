import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should raise voteChanged event when upvoted', () => {
    // ARRANGE
    let totalVotes = null;
    component.voteChanged.subscribe(data => {
      totalVotes = data;
    });

    // ACT
    component.upVote();

    //ASSERT
    // expect(totalVotes).not.toBeNull(); // Works but we can be more specifid
    expect(totalVotes).toBe(1);
  });
});
