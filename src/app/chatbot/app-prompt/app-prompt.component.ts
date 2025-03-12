import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-app-prompt',
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './app-prompt.component.html',
  styleUrl: './app-prompt.component.scss'
})
export class AppPromptComponent {
  userInput: string = '';
  @Output() textChange = new EventEmitter<string>();

  constructor() {}

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.textChange.emit(this.userInput.trim());
      this.userInput = ''; // Clear input after sending message
    }
  }
}
