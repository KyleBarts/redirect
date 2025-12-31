export default function Home() {
  return (
    <main className="page">
      <section className="content">
        <p className="headline">
          This is Barts personal link redirecting tool.
        </p>

        <p className="subtext">
          Down with big URL
        </p>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1.5rem, 5vw, 4rem);
          font-family: system-ui, -apple-system, sans-serif;
          background: #fff;
          color: #111;
        }

        .content {
          max-width: 42ch;
          width: 100%;
        }

        .headline {
          font-size: clamp(1.2rem, 4vw, 1.6rem);
          line-height: 1.4;
          margin: 0;
        }

        .subtext {
          margin-top: 1.25rem;
          font-size: clamp(0.95rem, 3vw, 1.1rem);
          line-height: 1.5;
          color: #555;
        }
      `}</style>
    </main>
  );
}
