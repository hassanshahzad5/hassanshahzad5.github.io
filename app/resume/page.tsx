export default function Resume() {
  return (
    <div className="font-sans flex items-center justify-items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Resume</h1>
        <p className="text-lg text-gray-300">
          This is where you can add your resume content or a downloadable PDF link.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
