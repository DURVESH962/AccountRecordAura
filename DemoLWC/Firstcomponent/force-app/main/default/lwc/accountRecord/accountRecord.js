import { LightningElement, wire,track } from 'lwc';

import getAccountList from '@salesforce/apex/AccountRecordLWCController.getAccountList';

export default class AccountRecord extends LightningElement {

    @track Acclist = [];;
     @wire(getAccountList, {})
     getAccountList ({error, data}) {
         if (error) {
             // TODO: Error handling
         } else if (data) {
             // TODO: Data handling
             console.log(data);
           
             data.forEach(element => {
                console.log(element.Name);
                this.Acclist.push(element.Name);
            
          });         }
     }
  

    connectedCallback(){
        console.log('account list ', this.accounts);
    }

}