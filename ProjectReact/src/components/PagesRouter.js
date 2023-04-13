import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageHome } from '../pages/PageHome';
import { PageCatalog } from '../pages/PageCatalog';
import { PageAboutUs } from '../pages/PageAboutUs';
import { PagePayment } from '../pages/PagePayment';
import { PageFiction } from '../pages/PageFiction';
import { PageEducationalLiterature } from '../pages/PageEducationalLiterature';
import { PageFantastic } from '../pages/PageFantastic';
import { PagePoetry } from '../pages/PagePoetry';
import { PageChildrenLiterature } from '../pages/PageChildrenLiterature';
import { PageEncyclopedias } from '../pages/PageEncyclopedias';
import { PageReferenceLiterature } from '../pages/PageReferenceLiterature';
import { PageFilterBooks } from '../pages/PageFilterBooks';
import { PageRegister } from '../pages/PageRegister';
import { PageLogin } from '../pages/PageLogin';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/register" element={<PageRegister/>} />
        <Route path="/login" element={<PageLogin/>} />
        <Route path="/" element={<PageHome/>} />
        <Route path="/catalog" element={<PageCatalog/>} />
        <Route path="/aboutUs" element={<PageAboutUs/>} />
        <Route path="/payment" element={<PagePayment/>} />
        <Route path="/category1" element={<PageFiction/>} />
        <Route path="/category2" element={<PageEducationalLiterature/>} />
        <Route path="/category3" element={<PageFantastic/>} />
        <Route path="/category4" element={<PagePoetry/>} />
        <Route path="/category5" element={<PageChildrenLiterature/>} />
        <Route path="/category6" element={<PageEncyclopedias/>} />
        <Route path="/category7" element={<PageReferenceLiterature/>} />
        <Route path="/list/:bookName" element={<PageFilterBooks/>} />
      </Routes>
    );
    
};
