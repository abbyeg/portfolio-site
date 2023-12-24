const Footer = () => {
  return (
    <div id="footer" className="py-6 px-4 w-full mt-auto flex flex-row justify-center">
      <div className="w-7 opacity-20 hover:opacity-100 mr-2 ml-2">
        <a href="https://github.com/abbyeg"><img src="/social/github-mark.svg" alt="Github" /></a>
      </div>
      <div className="w-7 opacity-20 hover:opacity-100 mr-2 ml-2">
        <a href="https://linkedin.com/in/abbygrobbel/"><img src="/social/linkedin.svg" alt="LinkedIn" /></a>
      </div>
    </div>
  );
};

export default Footer;