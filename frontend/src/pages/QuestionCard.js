import React, { useState } from 'react';

const QuestionCard = ({ question, choices }) => {
  const [selectedChoices, setSelectedChoices] = useState([]);

  const handleChoiceChange = (choice) => {
    if (selectedChoices.includes(choice)) {
      setSelectedChoices(selectedChoices.filter((selectedChoice) => selectedChoice !== choice));
    } else {
      setSelectedChoices([...selectedChoices, choice]);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 pb-6 mb-4">
      <div className="font-bold text-xl mb-2">{question}</div>
      <ul className="list-disc pl-5">
        {choices.map((choice, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedChoices.includes(choice)}
                onChange={() => handleChoiceChange(choice)}
              />
              <span className="ml-2">{choice}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
