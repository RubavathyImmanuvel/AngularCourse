import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {


  @Input() appHighLight = ''
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighLight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color:any) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
