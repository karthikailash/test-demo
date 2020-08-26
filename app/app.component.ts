import { Component }from '@angular/core';
@Component({
  selector:'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent
{
 pageHeader:string="Employee Details";
 imagePath:string='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png';
 firstname:string ='Karthi';
 lastname:string='kailash';

 getfullname():string
 {
   return this.firstname+' '+this.lastname;
 }

}