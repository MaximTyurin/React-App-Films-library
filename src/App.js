import Main from "./components/Main/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Registration from "./components/Registration/Registration";
import BasketMenu from "./components/Basket/BasketMenu";
import { Provider } from "react-redux";
import { Routes, Route} from "react-router-dom";
import { store } from "./redux";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Main/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="contacts" element={<Contacts/>}/>
              <Route path="registration" element={<Registration/>} />
              <Route path="basket" element={<BasketMenu/>} />
              <Route path="*" element={<Main/>}/>
            </Route>
          </Routes>
      </Provider>
    </>
  );
}

export default App;