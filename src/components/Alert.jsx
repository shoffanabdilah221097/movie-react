function Alert() {
  return (
    <>
      <div className="container">
        <div className="alert alert-link m-auto w-50 mt-2" style={{ color: "gray", padding: 2 }} role="alert">
          <marquee style={{ fontSize: 16 }}>"Warning: This movie will keep you on the edge of your seat!" And "Great news! The movie you've been waiting for is now showing!"</marquee>
        </div>
      </div>
    </>
  );
}

export default Alert
