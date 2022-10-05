const ApplicationQuestionAndAnswerField = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="flex items-center">
      <h3>
        {question} <p className="h4 mt-2 block pl-8 font-normal">{answer}</p>
      </h3>
    </div>
  );
};

export default ApplicationQuestionAndAnswerField;
