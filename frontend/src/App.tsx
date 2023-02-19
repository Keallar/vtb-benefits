import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeComponent } from './components/pages/home/HomeComponent';
import { HeaderComponent } from './components/common/header/HeaderComponent';
import { ProtectedLayout } from './components/common/ProtectedLayout';
import { LoginComponent } from './components/pages/login/LoginComponent';
import { RequestsComponent } from './components/pages/requests/RequestsComponent';
import { ProfileComponent } from './components/pages/profile/ProfileComponent';
import { SettingsComponent } from './components/pages/economic/settings/SettingsComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/requests" element={<RequestsComponent/>}/>
            <Route path="/profile" element={<ProfileComponent/>}/>
            <Route path="/events"/>
            <Route path="/economic" element={<SettingsComponent/>}/>
          </Route>

          <Route path="/login" element={<LoginComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
