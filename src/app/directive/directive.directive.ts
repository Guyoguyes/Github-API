import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(public elemRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.textDeco('darkgreen')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.textDeco('none')
  }


  private textDeco(color){
    this.elemRef.nativeElement.backgroundColor = color
  }

}
