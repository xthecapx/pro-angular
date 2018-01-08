import { VoterComponent } from './voter.component';

describe('VoterComponent UnitTesting', () => {
  let component: VoterComponent;

  beforeEach(() => {
    component = new VoterComponent();
  });

  it('Should calculate total votes properly', () => {
    component.myVote = 1;
    component.othersVote = 10;
    expect(component.totalVotes).toBe(11);
  });

  describe('When I upVote,', () => {
    it('should increment total votes', () => {
      component.upVote();

      expect(component.totalVotes).toBe(1);
    });

    it('should NOT increment total votes if I have already submitted a positive vote', () => {
      component.myVote = 1;

      component.upVote();

      expect(component.totalVotes).toBe(1);
    });

    it('should raise an event', () => {
      let eventData = null;
      component.myVoteChanged.subscribe(val => {
        eventData = val
      });

      component.upVote();

      expect(eventData).toEqual({ myVote: 1 });
    })

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
    it('should decrement total votes', () => {
      component.downVote();

      expect(component.totalVotes).toBe(-1);
    });

    it('should NOT decrement total votes if I have already submitted a negative vote', () => {
      component.myVote = -1;

      component.downVote();

      expect(component.totalVotes).toBe(-1);
    });

    it('should raise an event', () => {
      let eventData = null;
      component.myVoteChanged.subscribe(val => {
        eventData = val;
      });

      component.downVote();

      expect(eventData).toEqual({ myVote: -1 });
    })

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

