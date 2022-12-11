import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuizHandlingService } from 'src/app/quiz-handling.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
	@ViewChild('scoller1') scroller!:ElementRef ;
	point:number = 0;
	userans!: any[];
	cans!: string[];
	filecontent!: any[];
  quizType:string='';
	constructor(private quizServiceObj:QuizHandlingService) { }

	ngOnInit(): void {

    this.quizType=this.quizServiceObj.quizTypeSelect.toString();
    if(this.quizType==="General Knowledge Quiz"){
			this.filecontent = this.quizServiceObj.gk_content;	
		}
		else  if(this.quizType==="Java Programing Quiz"){
			this.filecontent = this.quizServiceObj.java_content;
		}

		this.userans = this.quizServiceObj.user_option;
		this.cans = this.quizServiceObj.cans;
		for(var i=0;i<10;++i){
			if(this.userans[i].length==0){
				this.filecontent[i]["uans"] = "Not Attempted";
			}
			else{
				this.filecontent[i]["uans"] = this.userans[i];
			}
			
			if(this.userans[i]==this.cans[i]){
				this.filecontent[i]["col"] = true;
			}
			else{
				this.filecontent[i]["col"] = false;
			}
		}
		this.score();

	}
	score(){
		for(var i=0;i<10;++i){
			if(this.userans[i]==this.cans[i]){
				this.point+=10;
			}
			
		}
	}
  isShowDivIf = true;  
  Review(){
    this.isShowDivIf = !this.isShowDivIf;  
  }
}

