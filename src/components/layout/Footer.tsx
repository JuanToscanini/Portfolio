export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Tu Nombre</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/JuanToscanini" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/juan-toscanini-942115204/" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
