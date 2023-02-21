import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Contacts } from '../interfaces/Contact';



@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

 


  constructor() { }
 

  public selectedContact = new BehaviorSubject<Contacts | null>(null);
  selectedContact$ = this.selectedContact.asObservable();
}
