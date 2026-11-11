import AppRoutes from "./routes/AppRoute.jsx";
import Navbar from "./component/common/navbar/Navbar.jsx";
import Footer from "./component/common/footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;