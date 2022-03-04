import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterNameComponent } from './register-name/register-name.component';
import { RegisterBirthDayComponent } from './register-birth-day/register-birth-day.component';
import { RegisterLocationComponent } from './register-location/register-location.component';
import { RegistrNumberComponent } from './registr-number/registr-number.component';
import { TokenPageComponent } from './token-page/token-page.component';
import { TermsAndConsComponent } from './terms-and-cons/terms-and-cons.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { BorrowMoneyComponent } from './borrow-money/borrow-money.component';
import { AcceptMoneyComponent } from './accept-money/accept-money.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { SearchHistoryPipe } from './pipes/search-history.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordPageComponent } from './password-page/password-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FundingMainAccountComponent } from './funding-main-account/funding-main-account.component';
import { FundWalletComponent } from './fund-wallet/fund-wallet.component';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';
import { UserServiceService } from './services/user-service.service';
import { TransferrequestPageComponent } from './transferrequest-page/transferrequest-page.component';
import { SendMoneyRequestPageComponent } from './send-money-request-page/send-money-request-page.component';
import { WithdrawFundPageComponent } from './withdraw-fund-page/withdraw-fund-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterNameComponent,
    RegisterBirthDayComponent,
    RegisterLocationComponent,
    RegistrNumberComponent,
    TokenPageComponent,
    TermsAndConsComponent,
    LoginPageComponent,
    DashboardComponent,
    ProfilePageComponent,
    WalletPageComponent,
    TransactionHistoryComponent,
    TransferMoneyComponent,
    BorrowMoneyComponent,
    AcceptMoneyComponent,
    CreateWalletComponent,
    SearchHistoryPipe,
    PasswordPageComponent,
    SideBarComponent,
    FundingMainAccountComponent,
    FundWalletComponent,
    WalletHistoryComponent,
    TransferrequestPageComponent,
    SendMoneyRequestPageComponent,
    WithdrawFundPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
