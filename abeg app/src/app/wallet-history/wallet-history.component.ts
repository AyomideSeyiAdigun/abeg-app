import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.css']
})
export class WalletHistoryComponent implements OnInit {

  constructor() { }
public transferhistory:any
public recievedhistory:any
@Input() wallet:any
@Input() pageShow:any

  ngOnInit(): void {
    this.recievedhistory=this.wallet.recievedhistory
    let a =[]
    for (let i =this.recievedhistory.length; i>=1 ; i--) {
      const element = this.recievedhistory[i];
      if(element!==undefined){
        a.push(element)
      }
    }
  this.recievedhistory=a
    let b=[]
    this.transferhistory=this.wallet.transferhistory
    // console.log(this.transferhistory.length)
    // for (let  i = this.transferhistory.length;  i>0;  i--) {
    //   const element = this.transferhistory[i];
    //   console.log(element)
    //   if (element !==undefined){
    //     b.push(element)
    //   }
      
    // }
    // this.transferhistory=b
  }

}
