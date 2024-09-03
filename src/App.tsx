import Footer from "./core/components/Footer";
import Header from "./core/components/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-slate-500">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
