import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IConversationMessage } from '../interfaces/conversation-message';

@Component({
  selector: 'app-conversation',
  imports: [CommonModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent implements AfterViewChecked{

  @ViewChild('conversationContainer', { static: true }) conversationContainer!: ElementRef<HTMLDivElement>;

  @Input() messages: IConversationMessage[] = [];

  ngAfterViewChecked(): void {
    const calculatedTop = this.conversationContainer.nativeElement.scrollHeight 
        - this.conversationContainer.nativeElement.clientHeight;
    if (calculatedTop != this.conversationContainer.nativeElement.scrollTop)
    this.conversationContainer.nativeElement.scrollTop = calculatedTop;
  }
}
