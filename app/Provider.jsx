import Header from "./_components/Header";

export default function Provider({ children }) {
  return (
    <div className="px-10 md:px-20 relative">
      <Header />
      {children}
    </div>
  );
}
