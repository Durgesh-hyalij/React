import React, { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-10">
      <div className="w-full max-w-7xl flex gap-10">

        {/* Left Side */}
        <div className="w-1/2 border-r border-gray-500 pr-10">
          <h1 className="text-5xl font-bold mb-8">Add Notes</h1>

          <form onSubmit={(e) => {
            handleSubmit(e)
          }}>

            {/* Title */}
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-black border-2 border-white rounded-md px-4 py-3 mb-5 outline-none"
            />

            {/* Description */}
            <textarea
              name="description"
              placeholder="Enter Description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-black border-2 border-white rounded-md px-4 py-3 resize-none mb-5 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-md font-semibold"
            >
              Add Note
            </button>

          </form>
        </div>

        {/* Right Side */}
        <div className="w-1/2 pl-10">
          <h1 className="text-5xl font-bold mb-8">Live Preview</h1>

          <div className="bg-white text-black rounded-xl p-5 w-64 min-h-60">
            <h2 className="text-2xl font-bold">
              {formData.title || "Title"}
            </h2>

            <p className="mt-4">
              {formData.description || "Description"}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;