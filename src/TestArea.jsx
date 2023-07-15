const TestArea = ({ children }) => {
  return (
    <section
      style={{ border: "2px solid #ccc", margin: "2rem", padding: "2rem" }}
    >
      <div>{children}</div>
    </section>
  );
};

export default TestArea;
