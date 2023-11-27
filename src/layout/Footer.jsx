function Footer() {
  return (
    <footer className="page-footer #7986cb indigo lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/zhibeky/movies"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
