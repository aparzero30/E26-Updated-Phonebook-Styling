import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private primarySubject = new BehaviorSubject<string>('cadetblue');
  primary$ = this.primarySubject.asObservable();

  private secondarySubject = new BehaviorSubject<string>('white');
  secondary$ = this.secondarySubject.asObservable();

  private fontColorSubject = new BehaviorSubject<string>('black');
  fontColor$ = this.fontColorSubject.asObservable();

  private iconColorSubject = new BehaviorSubject<string>('indianred');
  iconColor$ = this.iconColorSubject.asObservable();

  private fontSubject = new BehaviorSubject<string>('Poppins');
  font$ = this.fontSubject.asObservable();

  updatePrimary(color: string) {
    this.primarySubject.next(color);
  }

  updateSecondary(color: string) {
    this.secondarySubject.next(color);
  }

  updateFontColor(color: string) {
    this.fontColorSubject.next(color);
  }

  updateIconColor(color: string) {
    this.iconColorSubject.next(color);
  }

  updateFont(font: string) {
    this.fontSubject.next(font);
  }
}