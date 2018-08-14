import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appMyIf]' })
export class MyIfDirective {
  constructor(private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef) { }

  @Input() set appMyIf(shouldAdd: boolean) {
    if (shouldAdd) {
      //if condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      //else remove template from DOM
      this.viewContainer.clear();
    }
  }
}