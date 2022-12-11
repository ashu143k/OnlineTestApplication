import { QuizHandlingService } from 'src/app/quiz-handling.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Quizformat } from './quizformat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.css']
})
export class DisplayQuizComponent implements OnInit {
  min: number = 14;
  i: number = 0;
  public questionList: any[] = [];
  public currentQuestion: number = 0;
  subscribeTimer: any;
  timeLeft: number = 60;
  uname: string = '';
  quizType: string = '';
  interval: any;
  constructor(private quizServiceObj: QuizHandlingService, private router: Router) {

  }
  ngOnInit(): void {
    this.uname = this.quizServiceObj.userName.toString();
    this.quizType = this.quizServiceObj.quizTypeSelect.toString();
    if (this.quizType === "General Knowledge Quiz") {
      this.questionList = this.quizServiceObj.gk_content;
      for (var i = 0; i < 10; ++i) {
        this.quizServiceObj.cans.push(this.questionList[i].answer);
      }
    } else if (this.quizType === "Java Programing Quiz") {
      this.questionList = this.quizServiceObj.java_content;
      for (var i = 0; i < 10; ++i) {
        this.quizServiceObj.cans.push(this.questionList[i].answer);
      }
    }
    this.startTimer();
  }


  next() {
    this.uncheck();
    if (this.i == 9) {
      (<HTMLInputElement>document.getElementById('savenext')).disabled = true;
      (<HTMLInputElement>document.getElementById('next')).disabled = true;
      (<HTMLInputElement>document.getElementById('prev')).disabled = false;
    } else {
      (<HTMLInputElement>document.getElementById('prev')).disabled = false;
      ++this.i;
      this.currentQuestion++;
    }

  }
  prev() {
    this.uncheck();
    if (this.i == 0) {
      (<HTMLInputElement>document.getElementById('prev')).disabled = true;
      (<HTMLInputElement>document.getElementById('next')).disabled = false;

    } else {
      (<HTMLInputElement>document.getElementById('next')).disabled = false;
      (<HTMLInputElement>document.getElementById('savenext')).disabled = false;
      --this.i;
      this.currentQuestion--;
    }
  }
  savenext() {
    var option = new Array();
    option = [this.questionList[this.i].option1,
    this.questionList[this.i].option2,
    this.questionList[this.i].option3,
    this.questionList[this.i].option4]
    var list = new Array();
    for (var i = 1; i <= 4; ++i) {
      var inputValue = (<HTMLInputElement>document.getElementById("op" + i.toString())).checked;
      list.push(inputValue);
    }
    for (var i = 0; i < 4; ++i) {
      if (list[i] == true) {
        this.quizServiceObj.User_option_update(eval(this.questionList[this.i].questionid) - 1, option[i])
      }
    }
    if (this.currentQuestion == 8) {
      (<HTMLInputElement>document.getElementById('savenext')).hidden = true;
    }
    if (this.i == 9) {
      (<HTMLInputElement>document.getElementById('savenext')).disabled = true;
      (<HTMLInputElement>document.getElementById('next')).disabled = true;
      (<HTMLInputElement>document.getElementById('prev')).disabled = false;
    } else {
      (<HTMLInputElement>document.getElementById('prev')).disabled = false;
      ++this.i;
      this.currentQuestion++;

    }
    this.uncheck();
  }
  submitquiz() {
    var option = new Array();
    var list = new Array();
    option = [this.questionList[this.i].option1,
    this.questionList[this.i].option2,
    this.questionList[this.i].option3,
    this.questionList[this.i].option4]
    for (var i = 1; i <= 4; ++i) {
      var inputValue = (<HTMLInputElement>document.getElementById("op" + i.toString())).checked;
      list.push(inputValue);
    }
    for (var i = 0; i < 9; ++i) {
      if (list[i] == true) {
        this.quizServiceObj.User_option_update(eval(this.questionList[this.i].questionid) - 1, option[i])
      }
    }
    var ask = window.confirm("Are you sure want to Submit Quiz?");
    if (ask) {
      this.router.navigate(['/review']);
    }
  }
  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }
  uncheck() {
    for (var i = 1; i <= 4; ++i) {
      var rbutton = (<HTMLInputElement>document.getElementById("op" + i.toString()));
      rbutton.checked = false;
    }
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
        this.min--;
      }
      if (this.min < 2) {
        (<HTMLInputElement>document.getElementById("time")).style.backgroundColor = "#EC7063";
      }

      if (this.min == 0 && this.timeLeft == 0) {
        var option = new Array();
        var list = new Array();
        option = [this.questionList[this.i].option1,
        this.questionList[this.i].option2,
        this.questionList[this.i].option3,
        this.questionList[this.i].option4]

        for (var i = 1; i <= 4; ++i) {
          var inputValue = (<HTMLInputElement>document.getElementById("op" + i.toString())).checked;
          list.push(inputValue);
        }

        for (var i = 0; i < 4; ++i) {
          if (list[i] == true) {
            this.quizServiceObj.User_option_update(eval(this.questionList[this.i].questionid) - 1, option[i])
          }
        }
        alert("Time up ! You will be Redirected to Result & Review Page..")
        this.router.navigate(['/review']);

      }
    }, 1000)
  }

}
