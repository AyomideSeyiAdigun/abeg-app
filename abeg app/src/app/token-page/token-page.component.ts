import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-token-page',
  templateUrl: './token-page.component.html',
  styleUrls: ['./token-page.component.css']
})
export class TokenPageComponent implements OnInit {

  constructor() { }
  public tokenValue:any=''
  public token:any=''
  public showToken:boolean=false
  // password starts//
  @Output() password=new EventEmitter
  public passwordIt:any='signPasswordPage'
  // password ends //
  ngOnInit(): void {
  this.token=Math.floor(Math.random() * 938263)
  this.showIt()
}
  confirmToken(){
    if(this.token == this.tokenValue){
      this.password.emit(this.passwordIt)
    }
  }
  showIt(){
    setTimeout(()=>{
      this.showToken=true
      this.hideIt()
    },2000)
  }
  hideIt(){
    setTimeout(()=>{
      this.showToken=false
    },9000)
  }
}
