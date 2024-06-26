import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Leftside from './Components/leftside';
import Rightside from './Components/rightside';
import GmailBody from './Components/GmailBody';





function App() {

  return (
    <>
      <div className="body-wrapper" >
        <Header />
        <Leftside />
        <Routes>
        <Route path="/" element={<GmailBody params = "" />} />
        <Route path="/Inbox" element={<GmailBody params ="Inbox" />} />
        <Route path="/Sent" element={<GmailBody params = "Sent"/>} />
        <Route path="/Drafts" element={<GmailBody params = "Drafts"/>} />
        </Routes> 
        <Rightside/>
      </div>
    </>
  );
}

export default App;
