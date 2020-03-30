import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.component.html',
  styleUrls: ['./timer-settings.component.css']
})
export class TimerSettingsComponent implements OnInit {
  @Output() timerSetted = new EventEmitter();

  setValues(hours, minutes, seconds) {
    this.timerSetted.emit({
      hour: hours,
      minute: minutes,
      second: seconds
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
