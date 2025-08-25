import { FaDownload } from "react-icons/fa";

const ResumePage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">My Resume</h1>

            {/* Resume PDF Viewer */}
            <iframe
                src="/resume_Bibhu.pdf"
                title="Resume"
                className="w-full max-w-4xl h-[80vh] border-2 border-gray-600 rounded-lg"
            ></iframe>

            {/* Download Button */}
            <a
                href="/resume_Bibhu.pdf"
                download="Resume_Bibhu.pdf"
                className="mt-6 flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
                <FaDownload /> Download Resume
            </a>
        </div>
    );
};

export default ResumePage;
