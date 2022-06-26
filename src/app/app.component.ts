import { Component } from '@angular/core';
import * as firebase from 'firebase';

/// Fire Base credenetials
const config = {
  apiKey: ' AIzaSyAQUgCVbXoCjsaltCBvgvgNPWj67P2RLuE ',
  databaseURL: 'https://fire-chat-26236-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fire-chat';
}
