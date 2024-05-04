"use client";
import React, { use, useEffect, useState } from "react";
import { Props, Answer, Question } from "./type";
import { GET_QUESTIONS, useFetch } from "./dataQuestion";
import { useMutation, useQuery, gql } from "@apollo/client";

const CREATE_QUESTION = gql`
  mutation CreateQuestion($body: QuestionInput) {
    createQuestion(body: $body) {
      id
      question
    }
  }
`;

export function Chat({ name }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [createQuestion] = useMutation(CREATE_QUESTION, {
    refetchQueries: [GET_QUESTIONS],
  });

  const { data } = useFetch();

  useEffect(() => {
    if (data) {
      setQuestions([...data.questions]);
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const question = e.currentTarget.message.value;
    try {
      createQuestion({
        variables: {
          body: {
            question,
          },
        },
      });
    } catch (error) {
      console.log("error", error);
    }
    e.currentTarget.reset();
  };

  // const handleAnswer = () => {
  //   for (let i = 0; i < questions.length; i++) {
  //     setAnswers([
  //       ...answers,
  //       { id: questions[i].id, message: answers[i].message },
  //     ]);
  //   }
  // };

  console.log("questions", questions);
  console.log("answers", answers);
  return (
    <div className="flex flex-col relative h-screen w-full">
      <div className="h-4/6 w-11/12 ml-10 mt-10">
        <h1>Answer will show here</h1>
        <div className="flex flex-col h-full w-full bg-stone-900 rounded-md overflow-y-scroll">
          {questions?.map((question: Question) => (
            <div
              key={question.id}
              className="flex flex-col w-3/4 mx-4 my-4 bg-stone-800 rounded-md p-4"
            >
              <h1 className="text-slate-100">{question.question}</h1>
              <p className="text-slate-400">
                {answers.find((answer) => answer.id === question.id)?.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center absolute bottom-10  w-full py-5 ">
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="message" className="flex-none ml-5">
            Message
          </label>
          <input
            type="text"
            id="message"
            className="flex-grow w-3/4 px-4 py-2 ml-4 text-slate-100 bg-stone-900	border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="flex-none px-4 py-2 ml-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
