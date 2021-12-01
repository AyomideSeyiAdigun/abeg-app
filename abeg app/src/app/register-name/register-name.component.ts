import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-name',
  templateUrl: './register-name.component.html',
  styleUrls: ['./register-name.component.css']
})
export class RegisterNameComponent implements OnInit {

  constructor(public myform:FormBuilder, public myroute:Router ) { }
public NewUserName:any=[]
// alert div start
public alertIt:boolean=false
public alertValue:any=''

// alert div ends

// birth day sending to parent//

@Output() birthday= new EventEmitter
public birthdate:String='signBirthday'
// birthayEnds//
public pages :string=''
  ngOnInit(): void {
    let code:any = false 
    code =JSON.stringify(code)
    localStorage.setItem('IDCODE',code)
    
    this.NewUserName=this.myform.group({
      FirstName:'',
      MiddleName:'',
      LastName:'',
      Email:''
    })
  }
  collectNewUserName(){
    let nameValue = this.NewUserName.value
    // authentication starts //
    if (nameValue.FirstName=='' ){
      this.alertValue='INPUT FIRST NAME'
      this.alertIt=true
      this.hidealertDiv()
      return
    }
    if(nameValue.LastName=='' ){
      this.alertValue='INPUT LAST NAME'
      this.alertIt=true
      this.hidealertDiv()
      return
    }if( nameValue.Email==''){
      this.alertValue='INPUT EMAIL'
      this.alertIt=true
      this.hidealertDiv()
      return
    } 
    let code=Math.floor(Math.random() * 938263180) 
    let id = nameValue.FirstName +''+ code
    nameValue.Id = id
    nameValue.accountNumber=Math.floor(Math.random() * 9382631834) 
    nameValue.wallets=[]
    nameValue.accountBalance='000'
    nameValue.recievedHistory=[]
    nameValue.transferHistory=[]
    nameValue.moneyRequests=[]
    nameValue.borrowMeRequest=[]
    nameValue.notification=[]
    // authetication stops //

    // trying to save the user to localstorage where others are...
    let getallUsers = localStorage.getItem('USERS')
    if(getallUsers== null){
      let user=[]
      user.push(nameValue)
      let user2 = JSON.stringify(user)
      localStorage.setItem('USERS',user2)
    }
    else{
      let user = JSON.parse(getallUsers)
      for (let i = 0; i < user.length; i++) {
        const element = user[i];
        if(element.Email==nameValue.Email){
          this.alertValue='Email already Registered'
          this.alertIt=true
          this.hidealertDiv()
          return
        }else{
          let user = JSON.parse(getallUsers)
          user.push(nameValue)
         let user2 = JSON.stringify(user)
          localStorage.setItem('USERS',user2)
          this.alertValue='Good!'
          this.alertIt=true
          this.hidealertDiv()
        }
        
      }
    }
    this. pages='signBirthday'
    
    id=JSON.stringify(id)
    localStorage.setItem('IDCODE',id)
     
  }
  hidealertDiv(){
    setInterval(()=>{
      this.alertIt=false
    }, 4000);
  }
  
  gotoAddressPage(locate:any){
    this.pages=locate
  }
  gotoContactPage(number:any){
    this.pages = number

  }
  gotoLoginpage(loginPage:any){
    this.pages = loginPage
  }
  gotoTokenPage(tokenPage:any){
    this.pages = tokenPage
  }
  gotoPasswordPage(passwordIt:any){
    this.pages=passwordIt
  }
  signTermsandConsPage(termandcon:any){
    this.pages=termandcon
  }
  logIn(){
    this.myroute.navigate(['/ETHWAS/Login'])
  }
  signUp(){
    this.myroute.navigate(['/ETHWAS'])
  }
}
