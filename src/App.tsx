import Footer from "./core/components/footer/Footer";
import Header from "./core/components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
