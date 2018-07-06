import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: "[simple]"
})

export class SimpleDirective {
  @HostListener('mouseover', ['$event.target'])
  mouseMoved(e) {
    console.log(e);
    this.el.nativeElement.style='background:yellow';
  }

  @HostListener('mouseleave', ['$event.target'])
  mouseRemoved(e) {
    console.log(e);
    this.el.nativeElement.style='background:white';
  }

  constructor(private el: ElementRef) {
    console.log('direcitve invoked');
    console.log(this.el.nativeElement);
    //this.el.nativeElement.style='background:yellow';
  }
}