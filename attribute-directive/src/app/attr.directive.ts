import {
  Directive,
  ElementRef,
  Attribute,
  Input,
  SimpleChange
} from '@angular/core';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('pa-attr') bgClass: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: { [property: string]: SimpleChange }): void {
    const change = changes['bgClass'];
    const classList = this.element.nativeElement.classList;

    console.log(JSON.stringify(change));

    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
      classList.add(change.currentValue);
    } else {
      classList.add(change.currentValue);
    }
  }
}
