// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {WelcomeMessage} from "./MyComponents/WelcomeMessage";
import {ProvideandRecieve} from "./MyComponents/ProvideandRecieve";
import {AboutUS} from "./MyComponents/AboutUS";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <>
    <Header title="Beacon"/>
    <WelcomeMessage/>
    <ProvideandRecieve/>
    <AboutUS/>
    <Footer/>
    </>
  );
}

export default App;
