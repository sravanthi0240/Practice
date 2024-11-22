import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-listeners',
  templateUrl: './host-listeners.component.html',
  styleUrls: ['./host-listeners.component.css']
})
export class HostListenersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter = 0;
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }

  @HostListener('window:keydown.Backspace', ['$event'])
  handleBackspace(event: KeyboardEvent) {
    this.counter--;
  }

  resetCounter() {
    this.counter = 0;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.keyCode);
  }

}
