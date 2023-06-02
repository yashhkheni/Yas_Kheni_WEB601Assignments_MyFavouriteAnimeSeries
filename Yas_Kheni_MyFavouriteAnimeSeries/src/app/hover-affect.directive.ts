import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input('appHoverAffect') hoverAffect: string = ''; // Initialize the property

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = 'normal';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resetStyle();
  }

  private applyStyle() {
    if (this.hoverAffect === 'underline') {
      this.el.nativeElement.style.textDecoration = 'underline';
    } else if (this.hoverAffect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }

  private resetStyle() {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = 'normal';
  }
}
