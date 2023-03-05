
      "use strict";
      import React from 'react';
      import ReactDOM from 'react-dom';

      import Shop from './Shop';

      var storeNameTxt='ТЦ "Корона"';
      var columnNameArr=[{titleZ:'Название',priceZ:'Цена,p',codeZ:0,fotoZ:'Фото',countZ:'Кол-во', control:'Контроль'}]

      /*let productsListArr=require('./answers.json');*/
      var productsListArr=[ 
        {title:'Шоколад "Nestle" молочный, шт',price:'3,5', code:1,foto:"img/ch.jpg",count:518}, 
        {title:'Кофе молотый "STARBUCKS", шт',price:'23,7',code:2,foto:"img/coffee.jpg",count:325}, 
        {title:'Яблоки "Golden", кг',price:'5,9',code:3,foto:"img/apple.jpg",count:280}, 
        {title:'Вода питьевая "Darida", шт',price:'3,1',code:4,foto:"img/water.jpg",count:97}, 
        {title:'Пюре детское "Агуша", шт',price:'2,6',code:5,foto:"img/foodch.jpg",count:810}, 
        {title:'Бананы, кг',price:'6,2',code:6,foto:"img/banana.jpg",count:143}
      ];

      ReactDOM.render(
        React.createElement(Shop,{storeName:storeNameTxt, productsList:productsListArr, columnName:columnNameArr}), 
        document.getElementById("container") 
      );