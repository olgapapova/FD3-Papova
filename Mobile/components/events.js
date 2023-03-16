import {EventEmitter} from 'events';

let mobileEvents=new EventEmitter(); 
// в потоке mobileEvents будут все события, связанные с изменением баланса и нажатием на кнопки
// событие "EditClicked" - кликнута кнопка "редактировать", его сэмиттирует Client и примет MobileCompany
// событие "DelClicked" - кликнута кнопка "удалить", его сэмиттирует Client и примет MobileCompany
// событие "SaveClicked" - кликнута кнопка "сохронить", его сэмиттирует EditClient и примет MobileCompany
// событие "CencelClicked" - кликнута кнопка "отмена", его сэмиттирует EditClient и примет MobileCompany

export {mobileEvents};