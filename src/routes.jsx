import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewPage from './Pages/NewPage/NewPage';
import EditPage from './Pages/EditPage/EditPage';


function MainRoutes(){
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<NewPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    );
}

export default MainRoutes;