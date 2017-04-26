import { Directive,Input,OnChanges,SimpleChanges } from '@angular/core';

@Directive({
  selector: '[doNothing]'
})
export class DoNothingDirective {
  constructor() {
   console.log('Do nothing directive');
  }
}

@Directive({
  selector: 'div.loggable[logText]:not([notLoggable=true])'
})
export class ComplexSelectorDirective {
  constructor() {
   console.log('Complex selector directive');
  }
}

@Directive({
  selector: '[loggable]',
})
export class SimpleTextWithSetterDirective {

  @Input()
  set logText(value) {
   console.log(value);
  }
}

@Directive({
  selector: '[changeDirective]'
})
export class OnChangesDirective implements OnChanges {
  @Input() pony: string;
  ngOnChanges(changes: SimpleChanges) {
   const ponyValue = changes['pony'];
   console.log(`changed from ${ponyValue.previousValue}to ${ponyValue.currentValue}
`);
   console.log(`is it the first change? ${ponyValue.isFirstChange()}`);
  }
}
