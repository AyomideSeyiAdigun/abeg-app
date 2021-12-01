import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output() sendCash = new EventEmitter
  @Output() openFundMain= new EventEmitter
  @Output() goHome= new EventEmitter
  @Output() gotoProfilePage= new EventEmitter
  @Output() gotoWalletPage= new EventEmitter
  public openFund='fundMain'
  public sendIt ='transferPage'
  public Home :any='profile'

  public profile:any='userprofile'
  public wallet :any='profile'
  constructor() { }

  ngOnInit(): void {
  }
  sendMoney(){
    this.sendCash.emit(this.sendIt)
    
  }
  gotoFundMainPage(){
    this.openFundMain.emit(this.openFund)
  }
  logOut(){
    let code:any = false 
    code =JSON.stringify(code)
    localStorage.setItem('IDCODE',code)
    window.location.reload()
  }
  home(){
    this.goHome.emit(this.Home)
  }
  gotoProfile(){
    this.gotoProfilePage.emit(this.profile)
  }
  gotoCreateWallet(){
    this.gotoWalletPage.emit(this.wallet)
  }
}
