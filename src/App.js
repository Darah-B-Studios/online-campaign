import './App.less';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import { BlogDetailPage, BlogPage, BootcampPage, DashboardPage, HomePage, LoginPage, PaymentSuccessPage, ServicePage, SignUpPage } from './pages';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import RequestPaymentPage from './pages/RequestPaymentPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.BOOTCAMP} element={<BootcampPage />} />
                <Route path={ROUTES.SERVICES} element={<ServicePage />} />
                <Route exact path={ROUTES.BLOG_SHOW} element={<BlogDetailPage />} />
                <Route exact path={ROUTES.BLOG} element={<BlogPage />} />
                <Route exact path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route exact path={ROUTES.CONTACT} element={<ContactPage />} />
                <Route exact path={ROUTES.REQUEST_PAYMENT} element={<RequestPaymentPage />} />
                <Route exact path={ROUTES.PAYMENT_SUCCESS} element={<PaymentSuccessPage />} />

                {/* Admin routes */}
                <Route exact path={ROUTES.ADMIN.DASHBOARD} element={<DashboardPage />} />

                {/* 404 page */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>

    );
}

export default App;
