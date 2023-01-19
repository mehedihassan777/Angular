import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @Input('appBetterHighlight') defaultColor: string = 'yellow';
  @Input() changeColor: string = 'red';

  @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;

  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.changeColor;
  }

  @HostListener('mouseleave') mouseout(eventData: Event) {
    //this.renderer.removeStyle(this.elRef.nativeElement, 'background-color');
    this.bgColor = this.defaultColor;
  }
}
