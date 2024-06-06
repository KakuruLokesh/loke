import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './stores/pages/RegisterForm';
import LoginForm from './stores/pages/LoginForm';
import Landingpage from './stores/pages/Landingpage';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import FormPage from './stores/pages/SignInPage';
import MobileSingle from './single/MobileSingle';
import ComputerSingle from './single/ComputerSingle';
import RefrigiratorPage1 from './stores/pages/RefrigiratorPge';
import RefrigiratorSingle from './single/RefrigiratorSingle';
import UserCart from './stores/context/UserCart';
import { AuthProvider } from './stores/pages/AuthContext'; // Import AuthProvider
import ForgotPasswordForm from './stores/pages/ForgotPasswordForm';
import ResetPasswordForm from './stores/pages/ResetPasswordForm';
import './App.css';
import ACPage from './stores/pages/ACpage';
import WatchPage from './stores/pages/Watchpage';
import KitchenPage from './stores/pages/Kitchenpage';
import TVPage from './stores/pages/TelevisionPage';
import MenPage from './stores/pages/MenPage';
import WomanPage from './stores/pages/WomenPage';
import BookPage from './stores/pages/BooksPage';
import ACSingle from './single/ACsingle';
import WatchSingle from './single/WatchSingle';
import KitchenSingle from './single/KitchenSinle';
import TVSingle from './single/TVSinle';
import MenSingle from './single/MenSingle';
import WomanSingle from './single/WomenSingle';
import BookSingle from './single/BookSingle';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/reset-password/:resetToken" element={<ResetPasswordForm />} />
        <Route path='/signin' element={<FormPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/airconditioners' element={<ACPage />} />
        <Route path='/watches' element={<WatchPage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/television' element={<TVPage />} />
        <Route path='/menswear' element={<MenPage />} />
        <Route path='/womenswear' element={<WomanPage />} />
        <Route path='/books' element={<BookPage />} />
        <Route path='/cart' element={<UserCart />} />
        <Route path='/refrigerators' element={<RefrigiratorPage1 />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/computer/:id' element={<ComputerSingle />} />
        <Route path='/refrigerators/:id' element={<RefrigiratorSingle />} />
        <Route path='/airconditioners/:id' element={<ACSingle />} />
        <Route path='/watches/:id' element={<WatchSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/television/:id' element={<TVSingle />} />
        <Route path='/menswear/:id' element={<MenSingle />} />
        <Route path='/womenswear/:id' element={<WomanSingle />} />
        <Route path='/books/:id' element={<BookSingle/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
