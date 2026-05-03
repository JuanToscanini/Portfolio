export default function Footer() {
  return (
    <footer className="py-6" style={{ backgroundColor: '#0A0E10', borderTop: '1px solid #94A3B8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p style={{ color: '#CBD5E1' }}>© 2026 Juan Toscanini</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/JuanToscanini" className="transition-colors hover:underline" style={{ color: '#CBD5E1' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/juan-toscanini-942115204/" className="transition-colors hover:underline" style={{ color: '#CBD5E1' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
