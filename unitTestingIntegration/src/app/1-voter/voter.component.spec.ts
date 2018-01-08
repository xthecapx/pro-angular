import { TestBed, ComponentFixture } from '@angular/core/testing';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    // new VoterComponent(); // Unit Test mode
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement // Root Element of the component
    // fixture.debugElement // Wrapper around native element
  });

  it('', () => {
  });
});

