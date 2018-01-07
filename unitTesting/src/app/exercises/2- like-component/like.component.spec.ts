import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
    let component: LikeComponent;

    beforeEach(() => {
      component = new LikeComponent();
    });

    // 1. When user click like should be equal to !like
    it('Should toggle the iLike property when User click it', () => {
      component.iLike = true;

      component.click();

      expect(component.iLike).toBe(false);
    });

    // 2. If like was true, totalLikes++
    it('Should decrement total likes if User like an object and click the LikeComponent to unlike it', () => {
      component.iLike = true;
      component.totalLikes = 1;

      component.click();

      expect(component.totalLikes).toBe(0);
    });

    // 3. If like was false, totalLikes--
    it('should increment total likes if User does NOT like an object and click the LikeComponent to like it', () => {
      component.iLike = false;
      component.totalLikes = 0;

      component.click();

      expect(component.totalLikes).toBe(1);
    });
});

