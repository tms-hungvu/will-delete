interface IUser {
  id: string | number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IQuizz {
  id: string | number;
  title: string;
  description: string;
  categoryId: string | number;
  userId: string | number;
  createdAt: Date;
  updatedAt: Date;
}

interface ICategory {
  id: string | number;
  name: string;
}

interface IQuestion {
  id: string | number;
  text: string;
  type: string;
  quizzId: string | number;
}

interface IAnswer {
  id: string | number;
  text: string;
  questionId: string | number;
}

interface IResult {
  id: string | number;
  userId: string | number;
  quizzId: string | number;
  score: number;
  attemptedAt: Date;
}
