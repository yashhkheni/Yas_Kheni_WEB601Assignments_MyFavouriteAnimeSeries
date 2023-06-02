import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  private hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.el.nativeElement.style.textDecoration = 'underline';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  }

}