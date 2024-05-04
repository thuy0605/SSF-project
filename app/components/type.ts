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

interface User {
  id: number;
  username: string;
  password: string;
}

export type { Props, Question, Answer, User };
