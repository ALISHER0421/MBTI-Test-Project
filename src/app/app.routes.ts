import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Главная страница
  { path: 'quiz', component: QuizComponent }  // Страница теста
];
