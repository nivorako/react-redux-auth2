import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { SignUpModal } from "./components/SignUpModal"
import Private from "./pages/private/Private"
import PrivateHome from "./pages/private/privateHome/PrivateHome"
import { SignInModal } from "./components/SignInModal"

function App() {
  return (
    <>
      <SignUpModal />
      <SignInModal /> 
      <Navbar />   
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/Private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
