import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home'
import TeachersList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';

const routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/study" component={TeachersList} exact/>
      <Route path="/give-classes" component={TeacherForm} exact />
    </BrowserRouter>
  );
}

export default routes;
