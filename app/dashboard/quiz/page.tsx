"use client";

import { QuizInterface, Question } from "@/components/organisms/Quiz";

const quizQuestions: Question[] = [
  {
    id: 'q1',
    question: 'What is the operating voltage of Arduino Uno?',
    options: [
      { id: 'a', text: '3.3V' },
      { id: 'b', text: '5V' },
      { id: 'c', text: '9V' },
      { id: 'd', text: '12V' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 'q2',
    question: 'Which pin is used for digital output on Arduino?',
    options: [
      { id: 'a', text: 'A0-A5' },
      { id: 'b', text: 'D0-D13' },
      { id: 'c', text: 'GND' },
      { id: 'd', text: 'VIN' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 'q3',
    question: 'What does LED stand for?',
    options: [
      { id: 'a', text: 'Light Emitting Diode' },
      { id: 'b', text: 'Light Energy Device' },
      { id: 'c', text: 'Low Energy Display' },
      { id: 'd', text: 'Linear Electric Diode' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 'q4',
    question: 'What is the purpose of pinMode() function?',
    options: [
      { id: 'a', text: 'To read digital input' },
      { id: 'b', text: 'To write digital output' },
      { id: 'c', text: 'To configure a pin as input or output' },
      { id: 'd', text: 'To set pin voltage' },
    ],
    correctAnswer: 'c',
  },
];

export default function QuizPage() {
  const handleSubmit = (answers: Record<string, string>, timeElapsed: number) => {
    console.log('Quiz submitted:', { answers, timeElapsed });
    
    // Calculate score
    let correct = 0;
    quizQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    
    const score = (correct / quizQuestions.length) * 100;
    alert(`Quiz completed! Score: ${score.toFixed(0)}%\nTime taken: ${Math.floor(timeElapsed / 60)}:${(timeElapsed % 60).toString().padStart(2, '0')}`);
  };

  return (
    <QuizInterface
      title="Quiz: Arduino Basics"
      description="Test your understanding of Arduino fundamentals"
      level="beginner"
      questions={quizQuestions}
      timeLimit={900} // 15 minutes
      onSubmit={handleSubmit}
    />
  );
}
