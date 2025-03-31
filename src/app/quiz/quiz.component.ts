import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  finishQuiz() {
    alert('Тест завершён!');
  }
}
