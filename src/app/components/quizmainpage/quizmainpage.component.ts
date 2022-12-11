import { Component } from '@angular/core';
import { QuizHandlingService } from 'src/app/quiz-handling.service';

@Component({
  selector: 'app-quizmainpage',
  templateUrl: './quizmainpage.component.html',
  styleUrls: ['./quizmainpage.component.css']
})
export class QuizmainpageComponent {
  constructor(private quizService:QuizHandlingService){
    
  }
  quiz(quizType:any){
   this.quizService.quizTypeSelected(quizType);
  }
}
