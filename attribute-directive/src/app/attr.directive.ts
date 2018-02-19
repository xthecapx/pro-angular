import { Directive, ElementRef, Attribute } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective {
  constructor(
    element: ElementRef,
    @Attribute('pa-attr-class') bgClass: string
  ) {
    element.nativeElement.classList.add(bgClass || 'bg-success');
  }
}
