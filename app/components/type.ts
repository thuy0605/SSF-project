type Props = {
  name: string;
};

interface Question {
  id: number;
  question: string;
}

interface Answer {
  id: number;
  answer: string;
}

export type { Props, Question, Answer };
