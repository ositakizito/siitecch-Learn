import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/themeContext'; // Fixed
import { useEffect, Suspense, lazy } from 'react';
import CookieConsentPopup from './components/CookieConsentPopup';
import ScrollToTop from './components/scrollToTop';
import FeedbackPopup from './components/feedback';
import FeedBack from './pages/feedback';

// import ProtectedRoute from './components/protectedRoute';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// Lazy-loaded components

const GoogleCallback = lazy(() => import('./components/GoogleCallback'));
const HomePage = lazy(() => import('./pages/homePage'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const About = lazy(() => import('./pages/about'));
const SinglePage = lazy(() => import('./pages/singlePage'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const Forgot = lazy(() => import('./pages/forgottenPassword'));
const Support = lazy(() => import('./pages/support'));
// const Profile = lazy(() => import('./pages/profile'));
const Cookie = lazy(() => import('./pages/cookiePolicy'));
const AboutDeveloper = lazy(() => import('./pages/aboutDeveloper'));
const PageNotFound = lazy(() => import('./pages/pageNotFound'));
const Faq = lazy(() => import('./pages/faq'));

// App Component
function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = useTheme(); // Use theme context

  useEffect(() => {
    document.body.className = theme; // Apply theme class to body
  }, [theme]);

  return (
   
      <>
        <ScrollToTop />
        <CookieConsentPopup />
        <Suspense
          fallback={
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#F1F5F9', // Optional: translucent background
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000, // Ensures it appears on top
              }}
            >
              <img
                src="/images/siitecch.png"
                alt="Loading..."
                style={{ width: '50px', margin: 'auto', display: 'block' }}
              />
            </div>
          }
        >
          <Routes>
            <Route path="/google/callback" element={<GoogleCallback />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/index" element={<HomePage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/developer" element={<AboutDeveloper />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/language/:slug" element={<SinglePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/feedback" element={<FeedBack/>}/>
            {/* Add lazy-loaded protected route if needed */}
            {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
          </Routes>
        </Suspense>
        {/* <ToastContainer position="top-right" autoClose={3000} /> */}
        <FeedbackPopup/>
      </>
  );
}

export default App;
