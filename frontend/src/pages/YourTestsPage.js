import React from 'react';
import { Link } from "react-router-dom";

const YourTestsPage = () => {
  //
  const tests = [
    {
      id: 1,
      title: 'Test 1',
      candidatesSubmitted: 5,
    },
    {
      id: 2,
      title: 'Test 2',
      candidatesSubmitted: 3,
    },
    {
      id: 3,
      title: 'Test 3',
      candidatesSubmitted: 8,
    },
  ];


  return (
    <div className="p-4">
      <h1 className="pl-4 text-2xl font-bold">Your Tests</h1>
      <ul className="mt-4">
        {tests.map((test) => (
          <li
            key={test.id}
            className="flex items-center justify-between p-2 mb-2 border border-gray-300 rounded"
          >
            <div>
              <h2 className="text-lg font-bold">{test.title}</h2>
              <p>{test.candidatesSubmitted} Candidates Submitted</p>
            </div>
            <Link
              to={`/testDetails`}
              className="py-2 px-4 ml-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourTestsPage;
