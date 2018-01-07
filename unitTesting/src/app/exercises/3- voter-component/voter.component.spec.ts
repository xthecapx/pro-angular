import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;

  beforeEach(() => {
    component = new VoterComponent();
  });

  // 1. If othersVote = 10 and myVote = 1, returns 11
  it('Should calculate total votes properly', () => {
    component.myVote = 1;
    component.othersVote = 10;
    expect(component.totalVotes).toBe(11);
  });

  // upVote actions
  describe('When I upVote,', () => {
    // 1. Should increment totalVotes
    it('should increment total votes', () => {
      component.upVote();

      expect(component.totalVotes).toBe(1);
    });

    // 2. if myVote = 1, and call upVote() totalVotes won't increment
    it('should NOT increment total votes if I have already submitted a positive vote', () => {
      component.myVote = 1;

      component.upVote();

      expect(component.totalVotes).toBe(1);
    });

    // 3. If no votes and call upVote() should emit { myVote: 1 }
    it('should raise an event', () => {
      let eventData = null;
      component.myVoteChanged.subscribe(val => {
        eventData = val
      });

      component.upVote();

      expect(eventData).toEqual({ myVote: 1 });
    })

    // 4. If you have votes and call upVote() it shouldn't emit.
    it('should NOT raise an event if I have already submitted a positive vote', () => {
      component.myVote = 1;
      let eventData = null;
      component.myVoteChanged.subscribe(val => {
        eventData = val
      });

      component.upVote();

      expect(eventData).toBeNull();
    });
  });

  // downVote actions
  describe('When I downVote,', () => {
    // 1. Should decrement totalVotes
    it('should decrement total votes', () => {
      component.downVote();

      expect(component.totalVotes).toBe(-1);
    });

    // 2. If myVote = -1. won't decrement votes
    it('should NOT decrement total votes if I have already submitted a negative vote', () => {
      component.myVote = -1;

      component.downVote();

      expect(component.totalVotes).toBe(-1);
    });

    // 3. When decrement votes it should emit { myVote: -1 }
    it('should raise an event', () => {
      let eventData = null;
      component.myVoteChanged.subscribe(val => {
        eventData = val;
      });

      component.downVote();

      expect(eventData).toEqual({ myVote: -1 });
    })

    // 4. If myVote = -1. won't emit.
    it('should NOT raise an event if I have already submitted a negative vote', () => {
      component.myVote = -1;
      let eventData = null;
      component.myVoteChanged.subscribe(val => {
        eventData = val
      });

      component.downVote();

      expect(eventData).toBeNull();
    });
  });
});

