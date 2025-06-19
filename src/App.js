import React, { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...newImages]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold mb-2">Welcome to YummyMetalMan Site</h1>
        <p className="text-lg text-gray-400">AI Engineering Dashboard</p>
      </header>

      <section className="bg-gray-800 rounded-xl p-6 mb-6 shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">AI Training Status</h2>
        <p><strong>Status:</strong> Training in progress...</p>
        <p><strong>Epoch:</strong> 0.42 / 1.00</p>
        <p><strong>Loss:</strong> 0.6789</p>
        <p><strong>ETA:</strong> ~3 hours remaining</p>
      </section>

      <section className="bg-gray-800 rounded-xl p-6 shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Image Dashboard</h2>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 text-gray-200"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Uploaded ${idx}`}
              className="rounded-lg object-cover w-full h-40 border border-gray-700"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
