import { Injectable } from '@angular/core';
import { Contacts } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceDataService {

  constructor() { }

  private selectedContact!: Contacts;



  setSelectedContact(contact: Contacts) {
    this.selectedContact = contact;
  }

  getSelectedContact(): Contacts {
    return this.selectedContact;
  }
}
