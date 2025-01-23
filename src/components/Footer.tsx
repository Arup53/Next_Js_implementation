const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 overflow-hidden">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EJP. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mr-4 hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="mr-4 hover:text-blue-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          <a href="#" className="mr-4 hover:text-blue-400">
            Facebook
          </a>
          <a href="#" className="mr-4 hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="mr-4 hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
