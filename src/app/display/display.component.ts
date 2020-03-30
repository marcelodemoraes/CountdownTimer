import { Component, OnInit, Input } from '@angular/core';
import { DeclareFunctionStmt } from '@angular/compiler';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() minutes;

  time = new Date();
  refreshIntervalId: any;
  isTimerRunning = false;
  isStart = true;
  timeSeted = {
    hour: 0,
    minute: 25,
    second: 0
  };

  startTimer() {
    this.isStart = false;
    this.refreshIntervalId = setInterval(() => {
      if (
        this.time.getHours() !== 0 ||
        this.time.getMinutes() !== 0 ||
        this.time.getSeconds() !== 0
      ) {
        this.time.setSeconds(this.time.getSeconds() - 1);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.refreshIntervalId);
  }

  resetTimer() {
    this.stopTimer();
    this.time.setHours(this.timeSeted.hour);
    this.time.setMinutes(this.timeSeted.minute);
    this.time.setSeconds(this.timeSeted.second);
    this.isTimerRunning = false;
    this.isStart = true;
  }

  toogleTimer() {
    if (this.isTimerRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
    this.isTimerRunning = !this.isTimerRunning;
  }

  setTimer(event) {
    this.timeSeted = event;
    this.resetTimer();
  }

  constructor() {}

  ngOnInit(): void {
    this.resetTimer();
  }
}
