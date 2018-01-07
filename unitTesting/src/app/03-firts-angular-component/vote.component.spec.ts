import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  // Setup function
  beforeEach(() => {
    component = new VoteComponent();
  });

  // afterEach(() => {}); // Good place for cleanup something
  // beforeAll(() => {});
  // afterAll(() => {}); // Tear down

  it('Should increment totalVotes when upvoted', () => {
    // Pattern -> ARRANGE ACT ASSERT
    // ARRANGE -> Create an instace of the component. Initialice everything
    // Use empty lines between each block
    // let component = new VoteComponent();

    // ACT -> call a method
    component.upVote();

    // ASSERT -> Expected results
    expect(component.totalVotes).toBe(1);
  });

  it('Should decrement totalVotes when downvotes', () => {
    // Pattern -> ARRANGE ACT ASSERT
    // ARRANGE -> Create an instace of the component. Initialice everything
    // Use empty lines between each block
    // let component = new VoteComponent(); // Moved beforeEach

    // ACT -> call a method
    component.downVote();

    // ASSERT -> Expected results
    expect(component.totalVotes).toBe(-1);
  });
});
