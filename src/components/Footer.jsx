function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Roko {year}</p>
    </footer>
  );
}

export default Footer;