import React from "react";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
const product = {
  title: "Умные беспроводные наушники X100",
  description:
    "Наушники X100 обеспечивают высокое качество звука, длительное время работы и удобную посадку. Поддержка Bluetooth 5.2 и шумоподавление.",
  price: 2999,
  purchases: 124,
  images: [
    "/images/x100-front.jpg",
    "/images/x100-side.jpg",
    "/images/x100-case.jpg",
  ],
  rating: 4.6,
  features: [
    "Bluetooth 5.2",
    "Активное шумоподавление",
    "До 30 часов работы",
    "Сенсорное управление",
  ],
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
