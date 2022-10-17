import './App.less';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import {LoginPage, SignUpPage, HomePage } from './pages';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route exact path={ROUTES.ABOUT} element={<AboutPage />} />

                {/* 404 page */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>

    );
}

export default App;
