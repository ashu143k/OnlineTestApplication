import { ReviewComponent } from './components/review/review.component';

import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { QuizmainpageComponent } from './components/quizmainpage/quizmainpage.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayQuizComponent } from './components/display-quiz/display-quiz.component';

const routes: Routes = 
[
  {
    path:'review', component:ReviewComponent
  },
  { 
    path:'',component:HomePageComponent 
  },
  {
    path : "quizEntryPage" , component : QuizmainpageComponent
  },
  {
    path: "quizpage" , component: QuizPageComponent
  },
  {
    path:"quizdisplay" ,component:DisplayQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
