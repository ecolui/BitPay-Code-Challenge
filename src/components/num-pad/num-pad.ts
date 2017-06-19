import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NumPadModel } from './num-pad-model'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Component({
  selector: 'num-pad',
  templateUrl: 'num-pad.html'
})
export class NumPadComponent implements OnInit{

  @Input() currentNum : number;
  //notify clients as users click buttons in the numpad
  @Output() lastNum : EventEmitter<CustomEvent>;

  private currentNumStrFrmt : string;
  private keypad : Array<Array<number>> = [[7,8,9],[4,5,6],[1,2,3]];
  private trailingDecimalRegex = /^[0-9]+\.[0-9]$/;

  private strWatcher : Subject<string>;

  constructor() {
    this.lastNum = new EventEmitter();      
    this.strWatcher = new Subject();
    this.strWatcher.subscribe(
      (val) => this.updateStr(val)
    );
  }      

  private updateNum(newValue : number){
    this.currentNum = newValue;
    this.currentNumStrFrmt = String(newValue);
    this.NotifyClients();
  }

  private updateStr(newValue : string){
    this.currentNumStrFrmt = newValue;
    this.currentNum = Number(this.currentNumStrFrmt);
    this.NotifyClients();
  }

  private NotifyClients(){
    this.lastNum.emit(
      new CustomEvent('updt',{
        detail:
        {
          numeric : this.currentNum,
          str : this.currentNumStrFrmt,
          undo : ()=>{this.pressBackSpace();}
        }
      })
    );
  }

  ngOnInit(){        
    if (this.currentNum != undefined && this.currentNum != NaN){
      this.currentNumStrFrmt = String(this.currentNum);
    }
    else
    {
      this.currentNumStrFrmt = "0";
    }    
    this.NotifyClients();
  }

  pressDigit(selectedDigit:number){
    this.strWatcher.next(
        (this.currentNumStrFrmt === "0")
        ? selectedDigit.toString()
        : this.currentNumStrFrmt + selectedDigit.toString()
    );
  }

  pressBackSpace(){ 
    if (this.currentNumStrFrmt.length > 1){
      this.strWatcher.next(
          (this.currentNumStrFrmt.match(this.trailingDecimalRegex) != null)
          ? this.currentNumStrFrmt.slice(0, -2)
          : this.currentNumStrFrmt.slice(0, -1)
      );
    }
    else
    {
      this.strWatcher.next(
        this.currentNumStrFrmt = "0"
      );
    }
  }

  pressDecimal(){
    if (this.currentNumStrFrmt.indexOf('.') === -1){
      if (this.currentNumStrFrmt.length === 0){
        this.strWatcher.next(
          this.currentNumStrFrmt + '0.'
        );
      }
      else{
        this.strWatcher.next(
          this.currentNumStrFrmt + '.'
        );
      }
    }
  }

}
