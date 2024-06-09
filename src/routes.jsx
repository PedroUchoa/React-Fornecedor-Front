import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewPage from './Pages/NewPage/NewPage';


function MainRoutes(){
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<NewPage />} />
        <Route path="/edit/:id" element={<h1>Hello World </h1>} />
      </Routes>
    );
}

export default MainRoutes;