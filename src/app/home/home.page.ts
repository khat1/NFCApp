import { Component } from '@angular/core';
import { HCE } from '@ionic-native/hce/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = "Host Card Emulation (HCE) Test";
  accountNumber: string;


  constructor(private HCE:HCE) {  
   //onCommand is called when an  APUD command is received from the HCE reader
   //if received the loyalty card data is returned to the reader
   //other with unknown command is returned. 
    HCE.registerCommandCallback(onCommand);
    this.accountNumber = "999333333333";
    console.log(this.accountNumber);    
    function onCommand(command) {
     // this.accountNumber = "999333333333";
     var accountNumberAsBytes= HCE.util.StringToBytes(this.accountNumber);
     console.log(this.accountNumber);
      
   }
      //this.HCE.registerCommandCallback().Then(onCommand);
   }
  


}