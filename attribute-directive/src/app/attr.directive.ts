import { Directive, ElementRef, Attribute, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('pa-attr') bgClass: string;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.classList.add(this.bgClass || 'bg-success');
  }
}
