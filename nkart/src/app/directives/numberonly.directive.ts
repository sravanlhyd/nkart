import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: "[numberonly]"
})

export class NumberOnlyDirective {


  @HostListener('keypress', ['$event'])
  keyentered(e) {
    console.log(e);
    return e.charCode>=48 && e.charCode<=57;
  }

  constructor(private el: ElementRef) {
    console.log('direcitve invoked');
    console.log(this.el.nativeElement);
    //this.el.nativeElement.style='background:yellow';
  }
}