import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.css']
})
export class WalletPageComponent implements OnInit {
@Input() Wid:any=''

// sending the remaing wallets after deleting
@Output() walletLeft=new EventEmitter
public walletleft:any=''
@Output() goHome=new EventEmitter
public Home:any='profile'
// end of sending wallets//

//history //

public showPage:any='showRecieved'

  constructor() { }
  public userId:any=''
  public userWallet:any=''
  public show:any='notYet'

  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    let user3 =user2[0].wallets
    let user4 = user3.filter((info:any)=>(info.Id == this.Wid))
    this.userWallet=user4[0]
    
  }
  deleteWallet(){
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    let user3 =user2.map((info:any)=>info.wallets)
    console.log(user3[0])
    let userr = user3[0].filter((info:any)=>(info.Id !== this.Wid))
  user2[0].wallets=userr
    //sending the money back to main //
    let wallet = user3[0].filter((info:any)=>(info.Id == this.Wid))
    user2[0].accountBalance = Number(user2[0].accountBalance)+Number(wallet[0].amount)
    // sending money back endss//
    let user5 = user.find((info:any)=>(info.Id==this.userId))
    let user6 =user.indexOf(user3)
    user[user6]=user2[0]
    let user7 = JSON.stringify(user)
    localStorage.setItem('USERS',user7)
    this.walletleft = user2[0].wallets
    this.walletLeft.emit(this.walletleft)
    window.location.reload()
    
    
  }

  // funding wallet function
  fundWallet(){
    this.show='fund'
  }

  //funding wallet ends

  // withdraw fund back to main account //
  withdrawFund(){
   this.show= 'withdrawFund'
  }
  //withdraw ends
  //cancel wallet starts//
  cancelwallet(){
    this.goHome.emit(this.Home)
  }
  //cancel wallet ends 


  // show receiced history//
  SentHistory(){
    this.showPage='showRecieved'
  }
  //show rec history ends

  // show transfer history
  RecievedHistory(){
    this.showPage='showTransfer'
  }
  // show transfer history ends 

  //show history btn//
  showHistory(){
    this.show="showHistory"
  }

  // show history ends


  
}
