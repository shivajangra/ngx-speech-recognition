import { Component } from '@angular/core';

import {
  // Service
  SpeechRecognitionService,
} from 'lib/speech-recognition/service';

@Component({
  selector: 'demo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [
    SpeechRecognitionService,
  ],
})
export class MainComponent {

  public message = '';

  constructor(
    private service: SpeechRecognitionService
  ) {
    // You can see Dependency Injected service in Console.
    // DI resolved from DemoModule with SpeechRecognitionModuke::withConfig.
    console.log('MainComponent', this.service);


    this.service.onstart = (e) => {
      console.log('onstart');
    };
    this.service.onresult = (e) => {
      this.message = e.results[0].item(0).transcript;
      console.log('MainComponent:onresult', this.message, e);
    };
  }

  start() {
    this.service.start();
  }

  stop() {
    this.service.stop();
  }
}
