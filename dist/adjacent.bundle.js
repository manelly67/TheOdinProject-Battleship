"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["adjacent"],{

/***/ "./src/components/adjacent.js":
/*!************************************!*\
  !*** ./src/components/adjacent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjacent: () => (/* binding */ adjacent)
/* harmony export */ });
const adjacent = new Map();

adjacent.set(0,[1,12]);
adjacent.set(1,[0,2,13]);
adjacent.set(2,[1,3,14]);
adjacent.set(3,[2,4,15]);
adjacent.set(4,[3,5,16]);
adjacent.set(5,[4,6,17]);
adjacent.set(6,[5,7,18]);
adjacent.set(7,[6,8,19]);
adjacent.set(8,[7,9,20]);
adjacent.set(9,[8,10,21]);
adjacent.set(10,[9,11,22]);
adjacent.set(11,[10,23]);
adjacent.set(12,[0,13,24]);
adjacent.set(13,[1,12,14,25]);
adjacent.set(14,[2,13,15,26]);
adjacent.set(15,[3,14,16,27]);
adjacent.set(16,[4,15,17,28]);
adjacent.set(17,[5,16,18,29]);
adjacent.set(18,[6,17,19,30]);
adjacent.set(19,[7,18,20,31]);
adjacent.set(20,[8,19,21,32]);
adjacent.set(21,[9,20,22,33]);
adjacent.set(22,[10,21,23,34]);
adjacent.set(23,[11,22,35]);
adjacent.set(24,[12,25,36]);
adjacent.set(25,[13,24,26,37]);
adjacent.set(26,[14,25,27,38]);
adjacent.set(27,[15,26,28,39]);
adjacent.set(28,[16,27,29,40]);
adjacent.set(29,[17,28,30,41]);
adjacent.set(30,[18,29,31,42]);
adjacent.set(31,[19,30,32,43]);
adjacent.set(32,[20,31,33,44]);
adjacent.set(33,[21,32,34,45]);
adjacent.set(34,[22,33,35,46]);
adjacent.set(35,[23,34,47]);
adjacent.set(36,[24,37,48]);
adjacent.set(37,[25,36,38,49]);
adjacent.set(38,[26,37,39,50]);
adjacent.set(39,[27,38,40,51]);
adjacent.set(40,[28,39,41,52]);
adjacent.set(41,[29,40,42,53]);
adjacent.set(42,[30,41,43,54]);
adjacent.set(43,[31,42,44,55]);
adjacent.set(44,[32,43,45,56]);
adjacent.set(45,[33,44,46,57]);
adjacent.set(46,[34,45,47,58]);
adjacent.set(47,[35,46,59]);
adjacent.set(48,[36,49,60]);
adjacent.set(49,[37,48,50,61]);
adjacent.set(50,[38,49,51,62]);
adjacent.set(51,[39,50,52,63]);
adjacent.set(52,[40,51,53,64]);
adjacent.set(53,[41,52,54,65]);
adjacent.set(54,[42,53,55,66]);
adjacent.set(55,[43,54,56,67]);
adjacent.set(56,[44,55,57,68]);
adjacent.set(57,[45,56,58,69]);
adjacent.set(58,[46,57,59,70]);
adjacent.set(59,[47,58,71]);
adjacent.set(60,[48,61,72]);
adjacent.set(61,[49,60,62,73]);
adjacent.set(62,[50,61,63,74]);
adjacent.set(63,[51,62,64,75]);
adjacent.set(64,[52,63,65,76]);
adjacent.set(65,[53,64,66,77]);
adjacent.set(66,[54,65,67,78]);
adjacent.set(67,[55,66,68,79]);
adjacent.set(68,[56,67,69,80]);
adjacent.set(69,[57,68,70,81]);
adjacent.set(70,[58,69,71,82]);
adjacent.set(71,[59,70,83]);
adjacent.set(72,[60,73,84]);
adjacent.set(73,[61,72,74,85]);
adjacent.set(74,[62,73,75,86]);
adjacent.set(75,[63,74,76,87]);
adjacent.set(76,[64,75,77,88]);
adjacent.set(77,[65,76,78,89]);
adjacent.set(78,[66,77,79,90]);
adjacent.set(79,[67,78,80,91]);
adjacent.set(80,[68,79,81,92]);
adjacent.set(81,[69,80,82,93]);
adjacent.set(82,[70,81,83,94]);
adjacent.set(83,[71,82,95]);
adjacent.set(84,[72,85,96]);
adjacent.set(85,[73,84,86,97]);
adjacent.set(86,[74,85,87,98]);
adjacent.set(87,[75,86,88,99]);
adjacent.set(88,[76,87,89,100]);
adjacent.set(89,[77,88,90,101]);
adjacent.set(90,[78,89,91,102]);
adjacent.set(91,[79,90,92,103]);
adjacent.set(92,[80,91,93,104]);
adjacent.set(93,[81,92,94,105]);
adjacent.set(94,[82,93,95,106]);
adjacent.set(95,[83,94,107]);
adjacent.set(96,[84,97,108]);
adjacent.set(97,[85,96,98,109]);
adjacent.set(98,[86,97,99,110]);
adjacent.set(99,[87,98,100,111]);
adjacent.set(100,[88,99,101,112]);
adjacent.set(101,[89,100,102,113]);
adjacent.set(102,[90,101,103,114]);
adjacent.set(103,[91,102,104,115]);
adjacent.set(104,[92,103,105,116]);
adjacent.set(105,[93,104,106,117]);
adjacent.set(106,[94,105,107,118]);
adjacent.set(107,[95,106,119]);
adjacent.set(108,[96,109,120]);
adjacent.set(109,[97,108,110,121]);
adjacent.set(110,[98,109,111,122]);
adjacent.set(111,[99,110,112,123]);
adjacent.set(112,[100,111,113,124]);
adjacent.set(113,[101,112,114,125]);
adjacent.set(114,[102,113,115,126]);
adjacent.set(115,[103,114,116,127]);
adjacent.set(116,[104,115,117,128]);
adjacent.set(117,[105,116,118,129]);
adjacent.set(118,[106,117,119,130]);
adjacent.set(119,[107,118,131]);
adjacent.set(120,[108,121,132]);
adjacent.set(121,[109,120,122,133]);
adjacent.set(122,[110,121,123,134]);
adjacent.set(123,[111,122,124,135]);
adjacent.set(124,[112,123,125,136]);
adjacent.set(125,[113,124,126,137]);
adjacent.set(126,[114,125,127,138]);
adjacent.set(127,[115,126,128,139]);
adjacent.set(128,[116,127,129,140]);
adjacent.set(129,[117,128,130,141]);
adjacent.set(130,[118,129,131,142]);
adjacent.set(131,[119,130,143]);
adjacent.set(132,[120,133,144]);
adjacent.set(133,[121,132,134,145]);
adjacent.set(134,[122,133,135,146]);
adjacent.set(135,[123,134,136,147]);
adjacent.set(136,[124,135,137,148]);
adjacent.set(137,[125,136,138,149]);
adjacent.set(138,[126,137,139,150]);
adjacent.set(139,[127,138,140,151]);
adjacent.set(140,[128,139,141,152]);
adjacent.set(141,[129,140,142,153]);
adjacent.set(142,[130,141,143,154]);
adjacent.set(143,[131,142,155]);
adjacent.set(144,[132,145]);
adjacent.set(145,[133,144,146]);
adjacent.set(146,[134,145,147]);
adjacent.set(147,[135,146,148]);
adjacent.set(148,[136,147,149]);
adjacent.set(149,[137,148,150]);
adjacent.set(150,[138,149,151]);
adjacent.set(151,[139,150,152]);
adjacent.set(152,[140,151,153]);
adjacent.set(153,[141,152,154]);
adjacent.set(154,[142,153,155]);
adjacent.set(155,[143,154]);





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/adjacent.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRqYWNlbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2FkamFjZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkamFjZW50ID0gbmV3IE1hcCgpO1xyXG5cclxuYWRqYWNlbnQuc2V0KDAsWzEsMTJdKTtcclxuYWRqYWNlbnQuc2V0KDEsWzAsMiwxM10pO1xyXG5hZGphY2VudC5zZXQoMixbMSwzLDE0XSk7XHJcbmFkamFjZW50LnNldCgzLFsyLDQsMTVdKTtcclxuYWRqYWNlbnQuc2V0KDQsWzMsNSwxNl0pO1xyXG5hZGphY2VudC5zZXQoNSxbNCw2LDE3XSk7XHJcbmFkamFjZW50LnNldCg2LFs1LDcsMThdKTtcclxuYWRqYWNlbnQuc2V0KDcsWzYsOCwxOV0pO1xyXG5hZGphY2VudC5zZXQoOCxbNyw5LDIwXSk7XHJcbmFkamFjZW50LnNldCg5LFs4LDEwLDIxXSk7XHJcbmFkamFjZW50LnNldCgxMCxbOSwxMSwyMl0pO1xyXG5hZGphY2VudC5zZXQoMTEsWzEwLDIzXSk7XHJcbmFkamFjZW50LnNldCgxMixbMCwxMywyNF0pO1xyXG5hZGphY2VudC5zZXQoMTMsWzEsMTIsMTQsMjVdKTtcclxuYWRqYWNlbnQuc2V0KDE0LFsyLDEzLDE1LDI2XSk7XHJcbmFkamFjZW50LnNldCgxNSxbMywxNCwxNiwyN10pO1xyXG5hZGphY2VudC5zZXQoMTYsWzQsMTUsMTcsMjhdKTtcclxuYWRqYWNlbnQuc2V0KDE3LFs1LDE2LDE4LDI5XSk7XHJcbmFkamFjZW50LnNldCgxOCxbNiwxNywxOSwzMF0pO1xyXG5hZGphY2VudC5zZXQoMTksWzcsMTgsMjAsMzFdKTtcclxuYWRqYWNlbnQuc2V0KDIwLFs4LDE5LDIxLDMyXSk7XHJcbmFkamFjZW50LnNldCgyMSxbOSwyMCwyMiwzM10pO1xyXG5hZGphY2VudC5zZXQoMjIsWzEwLDIxLDIzLDM0XSk7XHJcbmFkamFjZW50LnNldCgyMyxbMTEsMjIsMzVdKTtcclxuYWRqYWNlbnQuc2V0KDI0LFsxMiwyNSwzNl0pO1xyXG5hZGphY2VudC5zZXQoMjUsWzEzLDI0LDI2LDM3XSk7XHJcbmFkamFjZW50LnNldCgyNixbMTQsMjUsMjcsMzhdKTtcclxuYWRqYWNlbnQuc2V0KDI3LFsxNSwyNiwyOCwzOV0pO1xyXG5hZGphY2VudC5zZXQoMjgsWzE2LDI3LDI5LDQwXSk7XHJcbmFkamFjZW50LnNldCgyOSxbMTcsMjgsMzAsNDFdKTtcclxuYWRqYWNlbnQuc2V0KDMwLFsxOCwyOSwzMSw0Ml0pO1xyXG5hZGphY2VudC5zZXQoMzEsWzE5LDMwLDMyLDQzXSk7XHJcbmFkamFjZW50LnNldCgzMixbMjAsMzEsMzMsNDRdKTtcclxuYWRqYWNlbnQuc2V0KDMzLFsyMSwzMiwzNCw0NV0pO1xyXG5hZGphY2VudC5zZXQoMzQsWzIyLDMzLDM1LDQ2XSk7XHJcbmFkamFjZW50LnNldCgzNSxbMjMsMzQsNDddKTtcclxuYWRqYWNlbnQuc2V0KDM2LFsyNCwzNyw0OF0pO1xyXG5hZGphY2VudC5zZXQoMzcsWzI1LDM2LDM4LDQ5XSk7XHJcbmFkamFjZW50LnNldCgzOCxbMjYsMzcsMzksNTBdKTtcclxuYWRqYWNlbnQuc2V0KDM5LFsyNywzOCw0MCw1MV0pO1xyXG5hZGphY2VudC5zZXQoNDAsWzI4LDM5LDQxLDUyXSk7XHJcbmFkamFjZW50LnNldCg0MSxbMjksNDAsNDIsNTNdKTtcclxuYWRqYWNlbnQuc2V0KDQyLFszMCw0MSw0Myw1NF0pO1xyXG5hZGphY2VudC5zZXQoNDMsWzMxLDQyLDQ0LDU1XSk7XHJcbmFkamFjZW50LnNldCg0NCxbMzIsNDMsNDUsNTZdKTtcclxuYWRqYWNlbnQuc2V0KDQ1LFszMyw0NCw0Niw1N10pO1xyXG5hZGphY2VudC5zZXQoNDYsWzM0LDQ1LDQ3LDU4XSk7XHJcbmFkamFjZW50LnNldCg0NyxbMzUsNDYsNTldKTtcclxuYWRqYWNlbnQuc2V0KDQ4LFszNiw0OSw2MF0pO1xyXG5hZGphY2VudC5zZXQoNDksWzM3LDQ4LDUwLDYxXSk7XHJcbmFkamFjZW50LnNldCg1MCxbMzgsNDksNTEsNjJdKTtcclxuYWRqYWNlbnQuc2V0KDUxLFszOSw1MCw1Miw2M10pO1xyXG5hZGphY2VudC5zZXQoNTIsWzQwLDUxLDUzLDY0XSk7XHJcbmFkamFjZW50LnNldCg1MyxbNDEsNTIsNTQsNjVdKTtcclxuYWRqYWNlbnQuc2V0KDU0LFs0Miw1Myw1NSw2Nl0pO1xyXG5hZGphY2VudC5zZXQoNTUsWzQzLDU0LDU2LDY3XSk7XHJcbmFkamFjZW50LnNldCg1NixbNDQsNTUsNTcsNjhdKTtcclxuYWRqYWNlbnQuc2V0KDU3LFs0NSw1Niw1OCw2OV0pO1xyXG5hZGphY2VudC5zZXQoNTgsWzQ2LDU3LDU5LDcwXSk7XHJcbmFkamFjZW50LnNldCg1OSxbNDcsNTgsNzFdKTtcclxuYWRqYWNlbnQuc2V0KDYwLFs0OCw2MSw3Ml0pO1xyXG5hZGphY2VudC5zZXQoNjEsWzQ5LDYwLDYyLDczXSk7XHJcbmFkamFjZW50LnNldCg2MixbNTAsNjEsNjMsNzRdKTtcclxuYWRqYWNlbnQuc2V0KDYzLFs1MSw2Miw2NCw3NV0pO1xyXG5hZGphY2VudC5zZXQoNjQsWzUyLDYzLDY1LDc2XSk7XHJcbmFkamFjZW50LnNldCg2NSxbNTMsNjQsNjYsNzddKTtcclxuYWRqYWNlbnQuc2V0KDY2LFs1NCw2NSw2Nyw3OF0pO1xyXG5hZGphY2VudC5zZXQoNjcsWzU1LDY2LDY4LDc5XSk7XHJcbmFkamFjZW50LnNldCg2OCxbNTYsNjcsNjksODBdKTtcclxuYWRqYWNlbnQuc2V0KDY5LFs1Nyw2OCw3MCw4MV0pO1xyXG5hZGphY2VudC5zZXQoNzAsWzU4LDY5LDcxLDgyXSk7XHJcbmFkamFjZW50LnNldCg3MSxbNTksNzAsODNdKTtcclxuYWRqYWNlbnQuc2V0KDcyLFs2MCw3Myw4NF0pO1xyXG5hZGphY2VudC5zZXQoNzMsWzYxLDcyLDc0LDg1XSk7XHJcbmFkamFjZW50LnNldCg3NCxbNjIsNzMsNzUsODZdKTtcclxuYWRqYWNlbnQuc2V0KDc1LFs2Myw3NCw3Niw4N10pO1xyXG5hZGphY2VudC5zZXQoNzYsWzY0LDc1LDc3LDg4XSk7XHJcbmFkamFjZW50LnNldCg3NyxbNjUsNzYsNzgsODldKTtcclxuYWRqYWNlbnQuc2V0KDc4LFs2Niw3Nyw3OSw5MF0pO1xyXG5hZGphY2VudC5zZXQoNzksWzY3LDc4LDgwLDkxXSk7XHJcbmFkamFjZW50LnNldCg4MCxbNjgsNzksODEsOTJdKTtcclxuYWRqYWNlbnQuc2V0KDgxLFs2OSw4MCw4Miw5M10pO1xyXG5hZGphY2VudC5zZXQoODIsWzcwLDgxLDgzLDk0XSk7XHJcbmFkamFjZW50LnNldCg4MyxbNzEsODIsOTVdKTtcclxuYWRqYWNlbnQuc2V0KDg0LFs3Miw4NSw5Nl0pO1xyXG5hZGphY2VudC5zZXQoODUsWzczLDg0LDg2LDk3XSk7XHJcbmFkamFjZW50LnNldCg4NixbNzQsODUsODcsOThdKTtcclxuYWRqYWNlbnQuc2V0KDg3LFs3NSw4Niw4OCw5OV0pO1xyXG5hZGphY2VudC5zZXQoODgsWzc2LDg3LDg5LDEwMF0pO1xyXG5hZGphY2VudC5zZXQoODksWzc3LDg4LDkwLDEwMV0pO1xyXG5hZGphY2VudC5zZXQoOTAsWzc4LDg5LDkxLDEwMl0pO1xyXG5hZGphY2VudC5zZXQoOTEsWzc5LDkwLDkyLDEwM10pO1xyXG5hZGphY2VudC5zZXQoOTIsWzgwLDkxLDkzLDEwNF0pO1xyXG5hZGphY2VudC5zZXQoOTMsWzgxLDkyLDk0LDEwNV0pO1xyXG5hZGphY2VudC5zZXQoOTQsWzgyLDkzLDk1LDEwNl0pO1xyXG5hZGphY2VudC5zZXQoOTUsWzgzLDk0LDEwN10pO1xyXG5hZGphY2VudC5zZXQoOTYsWzg0LDk3LDEwOF0pO1xyXG5hZGphY2VudC5zZXQoOTcsWzg1LDk2LDk4LDEwOV0pO1xyXG5hZGphY2VudC5zZXQoOTgsWzg2LDk3LDk5LDExMF0pO1xyXG5hZGphY2VudC5zZXQoOTksWzg3LDk4LDEwMCwxMTFdKTtcclxuYWRqYWNlbnQuc2V0KDEwMCxbODgsOTksMTAxLDExMl0pO1xyXG5hZGphY2VudC5zZXQoMTAxLFs4OSwxMDAsMTAyLDExM10pO1xyXG5hZGphY2VudC5zZXQoMTAyLFs5MCwxMDEsMTAzLDExNF0pO1xyXG5hZGphY2VudC5zZXQoMTAzLFs5MSwxMDIsMTA0LDExNV0pO1xyXG5hZGphY2VudC5zZXQoMTA0LFs5MiwxMDMsMTA1LDExNl0pO1xyXG5hZGphY2VudC5zZXQoMTA1LFs5MywxMDQsMTA2LDExN10pO1xyXG5hZGphY2VudC5zZXQoMTA2LFs5NCwxMDUsMTA3LDExOF0pO1xyXG5hZGphY2VudC5zZXQoMTA3LFs5NSwxMDYsMTE5XSk7XHJcbmFkamFjZW50LnNldCgxMDgsWzk2LDEwOSwxMjBdKTtcclxuYWRqYWNlbnQuc2V0KDEwOSxbOTcsMTA4LDExMCwxMjFdKTtcclxuYWRqYWNlbnQuc2V0KDExMCxbOTgsMTA5LDExMSwxMjJdKTtcclxuYWRqYWNlbnQuc2V0KDExMSxbOTksMTEwLDExMiwxMjNdKTtcclxuYWRqYWNlbnQuc2V0KDExMixbMTAwLDExMSwxMTMsMTI0XSk7XHJcbmFkamFjZW50LnNldCgxMTMsWzEwMSwxMTIsMTE0LDEyNV0pO1xyXG5hZGphY2VudC5zZXQoMTE0LFsxMDIsMTEzLDExNSwxMjZdKTtcclxuYWRqYWNlbnQuc2V0KDExNSxbMTAzLDExNCwxMTYsMTI3XSk7XHJcbmFkamFjZW50LnNldCgxMTYsWzEwNCwxMTUsMTE3LDEyOF0pO1xyXG5hZGphY2VudC5zZXQoMTE3LFsxMDUsMTE2LDExOCwxMjldKTtcclxuYWRqYWNlbnQuc2V0KDExOCxbMTA2LDExNywxMTksMTMwXSk7XHJcbmFkamFjZW50LnNldCgxMTksWzEwNywxMTgsMTMxXSk7XHJcbmFkamFjZW50LnNldCgxMjAsWzEwOCwxMjEsMTMyXSk7XHJcbmFkamFjZW50LnNldCgxMjEsWzEwOSwxMjAsMTIyLDEzM10pO1xyXG5hZGphY2VudC5zZXQoMTIyLFsxMTAsMTIxLDEyMywxMzRdKTtcclxuYWRqYWNlbnQuc2V0KDEyMyxbMTExLDEyMiwxMjQsMTM1XSk7XHJcbmFkamFjZW50LnNldCgxMjQsWzExMiwxMjMsMTI1LDEzNl0pO1xyXG5hZGphY2VudC5zZXQoMTI1LFsxMTMsMTI0LDEyNiwxMzddKTtcclxuYWRqYWNlbnQuc2V0KDEyNixbMTE0LDEyNSwxMjcsMTM4XSk7XHJcbmFkamFjZW50LnNldCgxMjcsWzExNSwxMjYsMTI4LDEzOV0pO1xyXG5hZGphY2VudC5zZXQoMTI4LFsxMTYsMTI3LDEyOSwxNDBdKTtcclxuYWRqYWNlbnQuc2V0KDEyOSxbMTE3LDEyOCwxMzAsMTQxXSk7XHJcbmFkamFjZW50LnNldCgxMzAsWzExOCwxMjksMTMxLDE0Ml0pO1xyXG5hZGphY2VudC5zZXQoMTMxLFsxMTksMTMwLDE0M10pO1xyXG5hZGphY2VudC5zZXQoMTMyLFsxMjAsMTMzLDE0NF0pO1xyXG5hZGphY2VudC5zZXQoMTMzLFsxMjEsMTMyLDEzNCwxNDVdKTtcclxuYWRqYWNlbnQuc2V0KDEzNCxbMTIyLDEzMywxMzUsMTQ2XSk7XHJcbmFkamFjZW50LnNldCgxMzUsWzEyMywxMzQsMTM2LDE0N10pO1xyXG5hZGphY2VudC5zZXQoMTM2LFsxMjQsMTM1LDEzNywxNDhdKTtcclxuYWRqYWNlbnQuc2V0KDEzNyxbMTI1LDEzNiwxMzgsMTQ5XSk7XHJcbmFkamFjZW50LnNldCgxMzgsWzEyNiwxMzcsMTM5LDE1MF0pO1xyXG5hZGphY2VudC5zZXQoMTM5LFsxMjcsMTM4LDE0MCwxNTFdKTtcclxuYWRqYWNlbnQuc2V0KDE0MCxbMTI4LDEzOSwxNDEsMTUyXSk7XHJcbmFkamFjZW50LnNldCgxNDEsWzEyOSwxNDAsMTQyLDE1M10pO1xyXG5hZGphY2VudC5zZXQoMTQyLFsxMzAsMTQxLDE0MywxNTRdKTtcclxuYWRqYWNlbnQuc2V0KDE0MyxbMTMxLDE0MiwxNTVdKTtcclxuYWRqYWNlbnQuc2V0KDE0NCxbMTMyLDE0NV0pO1xyXG5hZGphY2VudC5zZXQoMTQ1LFsxMzMsMTQ0LDE0Nl0pO1xyXG5hZGphY2VudC5zZXQoMTQ2LFsxMzQsMTQ1LDE0N10pO1xyXG5hZGphY2VudC5zZXQoMTQ3LFsxMzUsMTQ2LDE0OF0pO1xyXG5hZGphY2VudC5zZXQoMTQ4LFsxMzYsMTQ3LDE0OV0pO1xyXG5hZGphY2VudC5zZXQoMTQ5LFsxMzcsMTQ4LDE1MF0pO1xyXG5hZGphY2VudC5zZXQoMTUwLFsxMzgsMTQ5LDE1MV0pO1xyXG5hZGphY2VudC5zZXQoMTUxLFsxMzksMTUwLDE1Ml0pO1xyXG5hZGphY2VudC5zZXQoMTUyLFsxNDAsMTUxLDE1M10pO1xyXG5hZGphY2VudC5zZXQoMTUzLFsxNDEsMTUyLDE1NF0pO1xyXG5hZGphY2VudC5zZXQoMTU0LFsxNDIsMTUzLDE1NV0pO1xyXG5hZGphY2VudC5zZXQoMTU1LFsxNDMsMTU0XSk7XHJcblxyXG5cclxuZXhwb3J0IHthZGphY2VudH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==