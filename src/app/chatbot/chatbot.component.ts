import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ConversationComponent } from '../conversation/conversation.component';
import { AppPromptComponent } from './app-prompt/app-prompt.component';
import { ChatBotService } from '../chat-bot.service';
import { IConversationMessage } from '../interfaces/conversation-message';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule,
    ConversationComponent,
    AppPromptComponent
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements OnInit {
  
  title: any = 'Angular Chatbot Example';
  public messages: IConversationMessage[] = [];
  chatboxOpen: boolean = true;

  constructor(private chatBotService: ChatBotService) {}

  ngOnInit() {
    this.messages = this.chatBotService.messages;
  }

  toggleChatbox() {
    this.chatboxOpen = !this.chatboxOpen;
  }

  handlePromptChange($event: any) {
    this.messages.push({
      from: 'user',
      text: $event
    });
    this.chatBotService.submitPrompt($event).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.messages.push({
            from: 'bot',
            text: res.choices[0].text.trim()
          })}, 500);
      },
      error: (err) => {
        setTimeout(() => {
          this.messages.push({
            from: 'bot',
            text: err.error?.error?.message
          });
        }, 500);
    }});
  }
}
