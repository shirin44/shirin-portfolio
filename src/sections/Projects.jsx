import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-start px-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Project Title</h3>
          <p className="text-gray-600">Brief project description goes here.</p>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
