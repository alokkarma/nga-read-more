import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-read-more',
  template: `
  <div>
    <span>{{text}}</span>
    <a *ngIf="!showOnlyText" style="cursor:pointer;color:#3498db;" (click)="toggleLength()">
      <span *ngIf="!hide">...more</span>
      <span *ngIf="hide">...less</span>
    </a>
  </div>`,
  styles: []
})
export class NgaReadMoreComponent implements OnInit {

  @Input() text: string;
  @Input() textLength: number;
  public showMoreText:string;
  public hide:boolean = true;
  public showOnlyText:boolean = false;
  constructor() { }

  ngOnInit() {
    this.showMoreText = this.text;
    this.textLength = this.textLength || 20;
    (this.text.length <= 20 || this.text.length <= this.textLength) ? this.showOnlyText = true : this.toggleLength();
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

}
