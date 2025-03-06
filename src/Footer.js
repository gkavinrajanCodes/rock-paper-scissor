import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} React Benefits Showcase</p>
    </footer>
  );
}

export default Footer;