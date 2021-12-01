import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public myroute:Router) { }
public showsidebar:boolean=false
public dashboardBox:any=''
public showcomp:any='profile'
public userId:any=""
public wallets:any=''
public walletId:any=''
public total:any
public hideall:any='profile'
public notification:any
  ngOnInit(): void {
    this.userId = localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    this.total= user2[0].accountBalance
   this.wallets= user2[0].wallets
   this.notification=user2[0].notification

  }
  showSideBar(){
    if(this.showsidebar==false){
      this.showsidebar=true
      this. dashboardBox ={
        marginLeft:'220px',
        marginTop:'-500px'
      }
      
    }else{
      this.showsidebar=false
      this. dashboardBox ={
        marginLeft:'0px',
        marginTop:'0px'
      }
      
    }
  }
  // route to create wallet page//
  createWallet(){
    this.showcomp='wallet'
  }
  // route to create wallet page ends

  // route to wallet profile//
  OpenWallet(info:any){
    this.walletId=info
   this.hideall='walletProfile'

  }

  // route to wallet profile ends

  // collect the wallet left, coming from wallet-profile page //
  collectingWallet(walletleft:any){
    this.wallets=walletleft
    this.showcomp='profile'
  }
  // colecting wallet ends here//

  // transfer page function//
  gotoTransferPage(sendIt:any){
    this.showcomp=sendIt
    this.hideall='profile'
    
  }
  // trandfer page ends here //

  // fund main account page//
  gotoFundMainAccountPage(openFund:any){
    this.showcomp=openFund
    this.hideall='profile'
    
  }

  /// fund main account ends//

  // request money from people page //
  gotoRequestMoneyPage(){
    this.showcomp='moneyRequestPage'
  }

  // request money from people ends

  // recieve money requests from people page //
  gotoRecieveRequestMoneyPage(){
    this.showcomp='recieveMoneyRequestPage'
  }

  // recieve money request from people ends

  // show history page .
  gotoHistoryPage(){
    this.showcomp='transactionHistoryPage'
  }
  // show history page ends

  // go to dashboard home 
  gotoHome(Home:any){
    this.hideall=Home
    this.showcomp='profile'
  }
  gotoProfilePage(){
    this.hideall='userprofile'
  }
  // goto wallet 
  gotocreatewallet(wallet:any){
    this.showcomp=wallet
    this.hideall='profile'
  }
  
  
  //
  gotouserprofile(profile:any){
    this.showcomp=profile
    this.hideall='userprofile'
  }
//
}

 