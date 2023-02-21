import { Component } from '@angular/core';
import { PhoneServiceService} from 'src/app/phoneservice/phone-service.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  newName = '';
  newEmail = '';
  newNumber = '';

  constructor(private contactService: PhoneServiceService) {
    this.contactService.selectedContact$.subscribe(contact => {
      // Do something with the selected contact data
      console.log(contact);

      if (contact) {
        this.newName = contact.name;
        this.newEmail = contact.email;
        this.newNumber = contact.number;
      }

    
    });
  }

  onSubmit() {
    const selectedContact = this.contactService.selectedContact.getValue();

  
    if(selectedContact?.name !='' && selectedContact?.email !='' && selectedContact?.number !=''){
      if (selectedContact) {
        selectedContact.name = this.newName;
        selectedContact.email = this.newEmail;
        selectedContact.number = this.newNumber;
        (this.contactService as any)['updateContact'](selectedContact);
      }
     
      
     }
     else{
      alert("missing field")
     }




   
  }



  onClose() {
    const update = document.getElementById('frm1');
    if (update) {
      update.style.display = 'none';
    }
  }

  ngOnInit(): void {
    console.log("hello");
  }

}
