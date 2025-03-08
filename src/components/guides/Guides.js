import React from "react";
import "./Guides.css"; // Import the CSS file for styles
import { Link, Outlet } from "react-router-dom";

function Guides() {
  return (
    <div className="guides-container">
      <p className="guides-text bungee-tint-regular">
        <Link to="/guides/react">React </Link>
        <Link to="/guides/next">NEXT</Link>
        <Link to="/guides/html">HTML</Link>
        <Link to="/guides/javaScript">JavaScript</Link>
      </p>
      <Outlet />
    </div>
  );
}

export default Guides;

/*
wie schaffe ich bei React untergages ,das ist ein so gennater eingelegter router ,wir mochte dank einem Link der fuhrt und zu anderer Page ? antwot auf russich 
ChatGPT:

В React для реализации вложенного роутинга (subroutes) с использованием React Router необходимо использовать Outlet и Link из библиотеки react-router-dom.
1. Установка React Router (если ещё не установлен):

npm install react-router-dom

2. Настройка маршрутов в App.js:

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/dashboard">Дашборд</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

3. Создание вложенных маршрутов в Dashboard.js:

import { Link, Routes, Route, Outlet } from "react-router-dom";
import Profile from "./Profile";

function Dashboard() {
  return (
    <div>
      <h2>Дашборд</h2>
      <nav>
        <Link to="profile">Профиль</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;

4. Добавление вложенного маршрута в App.js:

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/dashboard/*" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>

5. Файл Profile.js:

function Profile() {
  return <h2>Страница профиля</h2>;
}

export default Profile;

Как это работает?

    При переходе на /dashboard загружается Dashboard.js.
    Внутри Dashboard.js с помощью <Outlet /> отображаются вложенные маршруты.
    Если перейти по /dashboard/profile, загрузится Profile.js.

Это позволит вам создать вложенную структуру роутинга в React. 🚀
*/
