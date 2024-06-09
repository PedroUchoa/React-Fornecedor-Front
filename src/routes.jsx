import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewPage from './Pages/NewPage/NewPage';


function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<NewPage />} />
        </Routes>
    )
}

export default MainRoutes;