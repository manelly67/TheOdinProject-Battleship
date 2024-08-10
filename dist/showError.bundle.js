"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["showError"],{

/***/ "./src/components/show-error.js":
/*!**************************************!*\
  !*** ./src/components/show-error.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showError: () => (/* binding */ showError)
/* harmony export */ });
function showError(arg1,arg2){
// arg1 is the div - arg2 is the message for the type of error
      let id = arg1.getAttribute('id');
       
       const inputError = document.createElement('p');
       inputError.classList.add('error');
       inputError.classList.add('active');
       inputError.setAttribute('id',`${id}error`);
       inputError.setAttribute( 'aria-live','polite');
       inputError.textContent = arg2;
    
       const parentElement = arg1.parentNode;
       parentElement.appendChild(inputError);  

}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/show-error.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd0Vycm9yLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsR0FBRztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hvdy1lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzaG93RXJyb3IoYXJnMSxhcmcyKXtcclxuLy8gYXJnMSBpcyB0aGUgZGl2IC0gYXJnMiBpcyB0aGUgbWVzc2FnZSBmb3IgdGhlIHR5cGUgb2YgZXJyb3JcclxuICAgICAgbGV0IGlkID0gYXJnMS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IGlucHV0RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpZH1lcnJvcmApO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxpdmUnLCdwb2xpdGUnKTtcclxuICAgICAgIGlucHV0RXJyb3IudGV4dENvbnRlbnQgPSBhcmcyO1xyXG4gICAgXHJcbiAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gYXJnMS5wYXJlbnROb2RlO1xyXG4gICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVycm9yKTsgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd0Vycm9yIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9