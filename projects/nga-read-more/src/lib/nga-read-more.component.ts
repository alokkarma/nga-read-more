import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-read-more',
  template: `
  <ng-container>
    <span>{{text}}</span>
    <a *ngIf="!showOnlyText" [ngStyle]="{'color': linkColor,'cursor': 'pointer'}" (click)="toggleLength()">
      <span *ngIf="!hide">...more</span>
      <span *ngIf="hide">...less</span>
    </a>
  </ng-container>`
})
export class NgaReadMoreComponent implements OnInit {

  @Input() text: string;
  @Input() textLength: number;
  @Input() linkColor:string;
  public showMoreText:string;
  public hide:boolean = true;
  public showOnlyText:boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.text && typeof this.text === 'string') {
      this.showMoreText = this.text;
      this.linkColor = this.linkColor || "#0000ff";
      this.textLength = this.getLength();
      (this.text.length <= 20 || this.text.length <= this.textLength) ? this.showOnlyText = true : this.toggleLength();  
   } else {
    this.showOnlyText = true;
   }
  }
  toggleLength() {
    if(this.text.length > this.textLength && this.hide){
      this.hide=false;
      this.text =this.text.substring(0, this.textLength);
    } else {
      this.hide=true;
      this.text=this.showMoreText;
    }
  }
 getLength() {
   if(this.textLength > 0) return this.textLength;
   return 20;
 }
}
