import React from 'react';

const TestDetailsPage = () => {
  const testTitle = 'Test 1';
  const flaggedImages = [
    {
      id: 1,
      candidateName: 'John Doe',
      reason: 'Face not detected in frame',
    },
    {
      id: 2,
      candidateName: 'Jane Smith',
      reason: 'Impersonation',
    },
    {
      id: 3,
      candidateName: 'Mark Johnson',
      reason: 'Mobile device detected',
    },
    // Add more flagged images as needed
  ];

  // Generate a random image URL using Lorem Picsum or Unsplash
  const generateRandomImageUrl = () => {
    const width = 200; // Desired width of the image
    const height = 200; // Desired height of the image
    const randomImageId = Math.floor(Math.random() * 1000) + 1; // Random image ID between 1 and 1000
    return `https://picsum.photos/id/${randomImageId}/${width}/${height}`;
  };

  return (
    <div className="p-4 flex">
      <div className="w-2/3 pr-4">
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{testTitle}</h1>
              <p>Test Analysis</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-4">Flagged Images</h2>

          <div className="flex flex-col">
            {flaggedImages.map((image) => (
              <div key={image.id} className="flex items-center mt-4">
                <img
                  src={generateRandomImageUrl()}
                  alt={`Flagged image ${image.id}`}
                  className="w-20 h-20 rounded"
                />
                <div className="ml-4">
                  <p className="font-bold">{image.candidateName}</p>
                  <p>{image.reason}</p>
                  <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Disqualify
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/3 mx-auto">
        {/* Side Column Content */}
        <h2 className="text-xl font-bold">Side Column</h2>
        <p>Content goes here...</p>
      </div>
    </div>
  );
};

export default TestDetailsPage;
