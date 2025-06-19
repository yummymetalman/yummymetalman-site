import React, { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  // TODO: Replace this with actual API call to load images from backend
  useEffect(() => {
    setImages([
      // Placeholder images or empty array initially
    ]);
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    // TODO: Upload file to backend API here
    
    // For now, show preview immediately
    setImages((imgs) => [...imgs, URL.createObjectURL(file)]);
    setUploading(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Moving gradient background */}
      <div
        className="fixed inset-0 bg-gradient-to-r from-green-800 via-blue-900 to-purple-900 opacity-30 animate-moveBackground"
        style={{ zIndex: -1 }}
      />

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Tactical AI Training Dashboard</h1>

        {/* Test message added here */}
        <h2 className="text-center text-xl mb-6">This is a test message!</h2>

        {/* Upload Panel */}
        <section className="mb-10 max-w-lg mx-auto">
          <label className="block mb-2 text-lg font-semibold" htmlFor="file-upload">
            Upload Image
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="block w-full text-black rounded"
          />
          {uploading && <p className="mt-2 text-green-400">Uploading...</p>}
        </section>

        {/* Gallery Panel */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Uploaded Images</h2>
          {images.length === 0 ? (
            <p className="text-gray-300">No images uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Uploaded #${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Moving background animation */}
      <style>{`
        @keyframes moveBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-moveBackground {
          background-size: 200% 200%;
          animation: moveBackground 30s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
