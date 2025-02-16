const Footer = () => {
    return (
      <footer className="Footer mb-4">
        <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
          <p className="text-xs">&copy; {new Date().getFullYear()} All rights reserved. Made by Rhea Jain</p>
          <ul className="flex text-xs gap-4 mt-3 md:mt-0">
            <li>
              <a href="#" className="hover:text-red-500">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">Terms of Service</a>
            </li>
            <li>
              <a href="mailto:contact@superstudio.com" className="hover:text-red-500">
                Email Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  