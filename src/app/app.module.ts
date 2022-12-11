import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuizmainpageComponent } from './components/quizmainpage/quizmainpage.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { DisplayQuizComponent } from './components/display-quiz/display-quiz.component';
import { ReviewComponent } from './components/review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    QuizmainpageComponent,
    QuizPageComponent,
    DisplayQuizComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
