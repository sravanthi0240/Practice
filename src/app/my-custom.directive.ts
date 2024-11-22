// import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appMyCustomDirective]'
// })
// export class MyCustomDirective {
//   constructor(private el: ElementRef, private renderer: Renderer2) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
//   }
// }


import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
