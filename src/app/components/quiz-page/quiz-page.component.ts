import { QuizHandlingService } from 'src/app/quiz-handling.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  angForm:any;
  quizselected: String = "";
  constructor(private quizServiceObj: QuizHandlingService, private formbuild: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
    angForm: FormGroup;
    this.quizselected = this.quizServiceObj.quizTypeSelect;
  }
  createForm() {
    this.angForm = this.formbuild.group({
      name: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }
  setUserName(uname: any) {
    this.quizServiceObj.userName = uname;
    this.quizServiceObj.quizTypeSelect = this.quizselected;
  }
}

