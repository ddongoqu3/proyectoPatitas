import { Header } from './Pages/Home/components/components/header';
import { Main } from './Pages/Home/components/components/main';
import { Footer } from './Pages/Home/components/components/footer';
import './home.css';

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export { Home };