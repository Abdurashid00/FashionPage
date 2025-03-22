import Brands from './components/brands/brands';
import Header from './components/header/header';
import Promo from './components/promo/Promo';
import NewArrivals from './components/newArrivals/newArrivals';
import Payday from './components/payday/payday';
import Favourite from './components/favourite/favourite';
import GetApp from './components/getApp/getApp';
import Email from './components/email/email';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <NewArrivals />
      <Payday />
      <Favourite />
      <GetApp />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
