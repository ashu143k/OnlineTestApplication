import { TestBed } from '@angular/core/testing';

import { QuizHandlingService } from './quiz-handling.service';

describe('QuizHandlingService', () => {
  let service: QuizHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
