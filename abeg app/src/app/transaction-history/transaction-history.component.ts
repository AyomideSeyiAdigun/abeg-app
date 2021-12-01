import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor() { }
  public page:String='transferHistory'
  public userId:any
  public user :any
  public RecievedHistory:any
  public SentHistory:any
  public user2:any
  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
    this.userId = JSON.parse(this.userId)
    this.user=localStorage.getItem('USERS')
    this.user=JSON.parse(this.user)
    this.user2 = this.user.filter((info:any)=>(info.Id == this.userId))
    this.RecievedHistory = this.user2.map((info:any)=>info.recievedHistory)
    this.SentHistory = this.user2.map((info:any)=>info.transferHistory)
    this.RecievedHistory = this.RecievedHistory[0]
    this.SentHistory= this.SentHistory[0]
    let a =[]
    let b=[]
    for (let i = this.RecievedHistory.length; i>=1; i--) {
      const element = this.RecievedHistory[i];
      if(element !== undefined){
        a.push(element)
      }
     
      
    }
    for (let i = this.SentHistory.length; i>=1; i--) {
      const element = this.SentHistory[i];
      if(element !==undefined){
        b.push(element)
      }
      
      
    }
    this.RecievedHistory=a
    this.SentHistory=b
    
     
  }
  transferHistory(){
    this.SentHistory = this.user2.map((info:any)=>info.transferHistory )
    this.SentHistory= this.SentHistory[0]
    console.log(this.SentHistory)
     
    let b=[]
    
    for (let i = this.SentHistory.length; i>=1; i--) {
      const element = this.SentHistory[i];
      if(element!==undefined){
      b.push(element)
      }
      
    }
    this.SentHistory=b

    this.page ='transferHistory'
    
  }
  recieveHistory(){
    this.RecievedHistory = this.user2.map((info:any)=>info.recievedHistory)
    this.RecievedHistory = this.RecievedHistory[0]
    let a =[]
  
    for (let i = this.RecievedHistory.length; i>=1; i--) {
      const element = this.RecievedHistory[i];
      if(element !== undefined){
      a.push(element)
      }
      
    }
     
    this.RecievedHistory=a
  
    this.page='recieveHistory'
  }
  

}
