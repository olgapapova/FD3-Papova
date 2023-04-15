import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../components/HomePage';
import { AboutUsPage } from '../components/AboutUsPage';
import { PaymentPage } from '../components/PaymentPage';
import { FictionPage } from '../components/FictionPage';
import { EducationalLiteraturePage } from '../components/EducationalLiteraturePage';
import { FantasticPage } from '../components/FantasticPage';
import { PoetryPage } from '../components/PoetryPage';
import { ChildrenLiteraturePage } from '../components/ChildrenLiteraturePage';
import { EncyclopediasPage } from '../components/EncyclopediasPage';
import { ReferenceLiteraturePage } from '../components/ReferenceLiteraturePage';
import { FilterBooksPage } from '../components/FilterBooksPage';
import { RegisterPage } from '../components/RegisterPage';
import { LoginPage } from '../components/LoginPage';
import { PlaceAnOrderPage } from '../components/PlaceAnOrderPage';
import { Page1Catalog } from '../components/Page1Catalog';
import { Page2Catalog } from '../components/Page2Catalog';
import { Page3Catalog } from '../components/Page3Catalog';
import { Page4Catalog } from '../components/Page4Catalog';
import { Page5Catalog } from '../components/Page5Catalog';
import { PageBook } from '../components/PageBook';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutUs" element={<AboutUsPage/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/category1" element={<FictionPage/>} />
        <Route path="/category2" element={<EducationalLiteraturePage/>} />
        <Route path="/category3" element={<FantasticPage/>} />
        <Route path="/category4" element={<PoetryPage/>} />
        <Route path="/category5" element={<ChildrenLiteraturePage/>} />
        <Route path="/category6" element={<EncyclopediasPage/>} />
        <Route path="/category7" element={<ReferenceLiteraturePage/>} />
        <Route path="/list/:bookName" element={<FilterBooksPage/>} />
        <Route path="/placeAnOrder" element={<PlaceAnOrderPage/>} />
        <Route path="/list/catalog/page1" element={<Page1Catalog/>} />
        <Route path="/list/catalog/page2" element={<Page2Catalog/>} />
        <Route path="/list/catalog/page3" element={<Page3Catalog/>} />
        <Route path="/list/catalog/page4" element={<Page4Catalog/>} />
        <Route path="/list/catalog/page5" element={<Page5Catalog/>} />
        <Route path="/:bookName" element={<PageBook/>} />
      </Routes>
    );
    
};
