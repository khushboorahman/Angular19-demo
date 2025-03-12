import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConversationMessage } from './interfaces/conversation-message';

const apiUrl: string = 'https://api.openai.com/v1/completions';
const apiKey: string = 'YOUR_OPENAI_API_KEY';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  
  constructor(private http: HttpClient) { }

  public messages: IConversationMessage[] = [{
    text: "Hello Angular Mantra AI",
    from: "user"
  },
  {
    text: "Hello User, I am Mantra AI",
    from: "bot"
  }];


  submitPrompt(userInput: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${apiKey}`);

    return this.http.post<any>(
      apiUrl,
      {
        model: 'gpt-3.5-turbo',
        message: [{ role: 'user', content: userInput }],
        max_tokens: 150,
        temperature: 0.7,
        stop: ['\n']
      },
      { headers }
    );
  }
}