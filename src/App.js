import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import data from "./db/menu";
import Products from "./components/Products";
import Menu from "./components/Menu";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from "./components/Detail";
import Detail2 from "./components/Detail2";
import ModalDetail2 from "./components/ModalDetail2";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Member from "./components/Member";
import Location from "./components/Location";
import Title from "./components/Title";

import Footer from './components/Footer'
import axios from 'axios'
import Cart from "./components/Cart";
import Board from "./components/Board";

function App() {
  const [menu, setMenu] = useState(data);
  let [count, setCount] = useState(1);
  let [input, setInput] = useState("");
  const navigate = useNavigate();
  // 모달 상태
  const [modalColor, setModalColor] = useState(null);

  const sortByName = () => {
    let sortedMenu = [...menu].sort((a, b) => (a.title > b.title ? 1 : -1));
    setMenu(sortedMenu);
  };
  const sortByPriceLowToHigh = () => {
    let sortedMenu = [...menu].sort((a, b) => a.price - b.price);
    setMenu(sortedMenu);
  };
  const sortByPriceHighToLow = () => {
    let sortedMenu = [...menu].sort((a, b) => b.price - a.price);
    setMenu(sortedMenu);
  };

  return (
    <div className="App">
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              src={process.env.PUBLIC_URL + "/img/cafelogo.jpg"}
              alt="Cafe Logo"
              style={{ width: "60px", height: "60px", marginRight: "20px", verticalAlign: "middle" }}
            />
            ColorCafe
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/menu') }}>Menu</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>Products</Nav.Link>
            <Nav.Link onClick={() => { navigate('/board');}}>Community</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>

        <Route path="/" element={
          <div>
            <Title />
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              width: "100%",
              minHeight: "80vh",
              margin: "0",
              padding: "0",
              gap: "0"
            }}>
              {(() => {
                const colorImgs = [
                  "beige.jpg",
                  "blue.jpg",
                  "gray.jpg",
                  "green.jpg",
                  "navy.jpg",
                  "pink.jpg",
                  "red.jpg",
                  "yellow.jpg"
                ];
                const colorNames = [
                  "Beige", "Blue", "Gray", "Green", "Navy", "Pink", "Red", "Yellow"
                ];
                const fontColors = [
                  "#9e854f", // beige
                  "#2a3a6e", // blue
                  "#555",    // gray
                  "#3d4a2a", // green
                  "#1a223a", // navy
                  "#b85c7c", // pink
                  "#b12a2a", // red
                  "#b89c1d"  // yellow
                ];
                return colorImgs.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `url(${process.env.PUBLIC_URL + "/img/color/" + img}) center/cover no-repeat`,
                      border: "1px solid #e2dbc9",
                      borderRadius: "0",
                      boxShadow: "none",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      cursor: "pointer"
                    }}
                    onClick={() => setModalColor(colorNames[i].toLowerCase())}
                  >
                    <div style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.55)",
                      textAlign: "center",
                      fontSize: "1.13rem",
                      color: fontColors[i],
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      padding: "10px 0 8px 0",
                      borderBottom: "1px solid #e2dbc9"
                    }}>{colorNames[i]}</div>
                  </div>
                ));
              })()}
            </div>
            <Footer />
            {modalColor && <ModalDetail2 color={modalColor} onClose={() => setModalColor(null)} />}
          </div>
        } />

        <Route path="/menu/:category?" element={<Menu />} />
        <Route path="/detail/:paramId" element={<Detail menu={data} />} />
        {/* <Route path="/detail2/:color" element={<Detail2 />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} >
          <Route path="member" element={<Member />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/board" element={<Board/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;