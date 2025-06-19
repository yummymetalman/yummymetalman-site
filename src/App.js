// src/App.js
import React, { useState } from 'react';

const dummyTrainingStatus = [
  { loss: 0.6977, grad_norm: 0.4688, learning_rate: 6.895e-6, epoch: 0.86 },
  { loss: 0.6565, grad_norm: 0.5840, learning_rate: 6.881e-6, epoch: 0.86 },
  { loss: 0.6586, grad_norm: 0.5011, learning_rate: 6.867e-6, epoch: 0.86 },
  { loss: 0.6392, grad_norm: 0.5650, learning_rate: 6.853e-6, epoch: 0.86 },
];

export default function App() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setImages((imgs) => [...imgs, URL.createObjectURL(file)]);
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Main content (left) */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-4">🤖 Tactical AI Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`uploaded-${idx}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      </div>

      {/* Right panel (settings) */}
      <div className="w-96 bg-gray-900 p-4 border-l border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            onChange={handleUpload}
            accept="image/*"
            className="block w-full text-black rounded"
          />
          {uploading && <p className="text-green-400 mt-1">Uploading...</p>}
        </div>

        <div>
          <h3 className="font-semibold mb-2">AI Training Status</h3>
          <div className="max-h-48 overflow-y-auto text-sm bg-gray-800 p-2 rounded">
            {dummyTrainingStatus.map((stat, idx) => (
              <div key={idx} className="mb-2">
                <p>Loss: {stat.loss}</p>
                <p>Grad Norm: {stat.grad_norm}</p>
                <p>LR: {stat.learning_rate}</p>
                <p>Epoch: {stat.epoch}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
