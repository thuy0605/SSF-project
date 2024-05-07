type Props = {
  userID: string;
};

interface Question {
  id: string;
  question: string;
  answer: string;
  owner: string;
}

interface Answer {
  id: string;
  answer: string;
}

interface User {
  id: string;
  username: string;
  password: string;
}

export type { Props, Question, Answer, User };
