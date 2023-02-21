import { Component, ElementRef, ViewChild } from '@angular/core';
import { contacts, Contacts } from '../../interfaces/Contact';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

 
  contact!: Contacts;
  contacts = contacts;

  newName = '';
  newEmail = '';
  newNumber = '';
  selectedContact!: Contacts;


  ngOnChanges() {
    if (this.contact) {
      this.newName = this.contact.name;
      this.newEmail = this.contact.email;
      this.newNumber = this.contact.number;
    }
  }

 

  addContact() {
    if(this.newName !='' && this.newEmail !='' && this.newNumber){
     this.contacts.push({name: this.newName, email: this.newEmail, number: this.newNumber});
     this.newName = '';
     this.newEmail  = '';
     this. newNumber = '';
     
    }
    else{
     alert("cant add missing field")
    }
 }

 onClose() {
  const wrapper1 = document.getElementById('frm');
  if (wrapper1) {
    wrapper1.style.display = 'none';
  }
}



onClick() {
  const add = document.getElementById('frm');
  const update = document.getElementById('frm1');
  if (add) {
   add.style.display = 'flex';
  }
  if (update) {
    update.style.display = 'none';
   }
}

}
