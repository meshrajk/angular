import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHightlighted = false;

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHightlighted;
  }

  @Output()
  toggleHighlighted = new EventEmitter()

  @HostBinding('attr.disabled')
  get disabled(){
    return "true";
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event){
    console.log("event", $event);
    this.isHightlighted = true;
    this.toggleHighlighted.emit(this.isHightlighted);
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.isHightlighted = false;
    this.toggleHighlighted.emit(this.isHightlighted);
  }

  toggle() {
    this.isHightlighted = !this.isHightlighted;
    this.toggleHighlighted.emit(this.isHightlighted);
  }
}
