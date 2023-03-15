import {EventEmitter} from 'events';

let mobileEvents=new EventEmitter(); 
// в потоке mobileEvents будут все события, связанные с изменением баланса и нажатием на кнопки
// событие "EAnswerClicked" - кликнут вариант ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// событие "EFreeAnswerTextChanged" - изменён текст свободного ответа, его сэмиттирует VotesAnswer и примет VotesBlock

export {mobileEvents};