"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["auxiliaryFunctions"],{

/***/ "./src/components/auxiliary-functions.js":
/*!***********************************************!*\
  !*** ./src/components/auxiliary-functions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alf_y: () => (/* binding */ alf_y),
/* harmony export */   allCoordinatesPosibles: () => (/* binding */ allCoordinatesPosibles),
/* harmony export */   assignLocation: () => (/* binding */ assignLocation),
/* harmony export */   checkCoordinates: () => (/* binding */ checkCoordinates),
/* harmony export */   columns: () => (/* binding */ columns),
/* harmony export */   fromCelltoCoordinates: () => (/* binding */ fromCelltoCoordinates),
/* harmony export */   fromCoordinatestoCell: () => (/* binding */ fromCoordinatestoCell),
/* harmony export */   relationCoordVsNodeList: () => (/* binding */ relationCoordVsNodeList),
/* harmony export */   rows: () => (/* binding */ rows),
/* harmony export */   shiftCoordinates: () => (/* binding */ shiftCoordinates)
/* harmony export */ });
const rows = 13;
const columns = 12;

const alf_y = [
    'a','b','c','d','e','f','g','h','i','j','k','l'
     ];

function shiftCoordinates([value_x,value_y]){
       /*  let [x,y] = [1,'a'];  */
        switch(alf_y.includes(value_y.toLowerCase())){
                case true:{
                    let index = alf_y.indexOf(value_y.toLowerCase());
                    return [ value_x-1, index ];
                }
                default:
                    return null;
        }  
    }

function assignLocation([x,y],direction,key){
let arrayOfCoordinates = [];
let initialX = x;
let initialY = alf_y.indexOf(y.toLowerCase());
    switch(direction==='left-to-right'){
        case true:
           if(alf_y.indexOf(y.toLowerCase()) + key > columns) {
                return null;
           } else {
             for ( let i= 0; i < key; ++i ){
                arrayOfCoordinates.push([ x, alf_y[initialY + i] ]);
             }
                return arrayOfCoordinates;
           }

        default:
        switch(direction==='top-to-down'){
            case true:
                if(initialX + key-1 > rows) {
                    return null;
               } else {
                 for ( let i= 0; i < key; ++i ){
                    arrayOfCoordinates.push([ initialX + i, y ]);
                 }
                    return arrayOfCoordinates;
               }

            default:
                return null;
        }
    }
}

function checkCoordinates([x,y]){
    if(x > 0 && x <= rows && alf_y.includes(y.toLowerCase())){
        return true;
    } else {
        return false;
    }
}

function fromCelltoCoordinates(row,column){
  /*   let [x,y] = [1,'a'];     */
    return [ row + 1, alf_y[column] ];
}

function fromCoordinatestoCell(coord){
   /*  let [row,column] = [0,0]; */
    let rowSelected = coord[0]-1;
    let columnSelected = alf_y.indexOf(coord[1].toLowerCase());
        return [Number(rowSelected), Number(columnSelected)];
}

function allCoordinatesPosibles() {
    let array = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
        array.push(`${i+1},${alf_y[j]}`);
    }}
    return array;
}

function relationCoordVsNodeList(){
    let array = [];
    let n= -1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
        n = n + 1;
        array.push([n,[`${i+1},${alf_y[j]}`]]);
    }}
    return array;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/auxiliary-functions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV4aWxpYXJ5RnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUIsd0JBQXdCLGFBQWE7QUFDckMsc0JBQXNCLElBQUksR0FBRyxTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUIsd0JBQXdCLGFBQWE7QUFDckM7QUFDQSwwQkFBMEIsSUFBSSxHQUFHLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hdXhpbGlhcnktZnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvd3MgPSAxMztcclxuY29uc3QgY29sdW1ucyA9IDEyO1xyXG5cclxuY29uc3QgYWxmX3kgPSBbXHJcbiAgICAnYScsJ2InLCdjJywnZCcsJ2UnLCdmJywnZycsJ2gnLCdpJywnaicsJ2snLCdsJ1xyXG4gICAgIF07XHJcblxyXG5mdW5jdGlvbiBzaGlmdENvb3JkaW5hdGVzKFt2YWx1ZV94LHZhbHVlX3ldKXtcclxuICAgICAgIC8qICBsZXQgW3gseV0gPSBbMSwnYSddOyAgKi9cclxuICAgICAgICBzd2l0Y2goYWxmX3kuaW5jbHVkZXModmFsdWVfeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFsZl95LmluZGV4T2YodmFsdWVfeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyB2YWx1ZV94LTEsIGluZGV4IF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLGtleSl7XHJcbmxldCBhcnJheU9mQ29vcmRpbmF0ZXMgPSBbXTtcclxubGV0IGluaXRpYWxYID0geDtcclxubGV0IGluaXRpYWxZID0gYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgc3dpdGNoKGRpcmVjdGlvbj09PSdsZWZ0LXRvLXJpZ2h0Jyl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgIGlmKGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKSArIGtleSA+IGNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIHgsIGFsZl95W2luaXRpYWxZICsgaV0gXSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uPT09J3RvcC10by1kb3duJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmKGluaXRpYWxYICsga2V5LTEgPiByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgaW5pdGlhbFggKyBpLCB5IF0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Nvb3JkaW5hdGVzKFt4LHldKXtcclxuICAgIGlmKHggPiAwICYmIHggPD0gcm93cyAmJiBhbGZfeS5pbmNsdWRlcyh5LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbil7XHJcbiAgLyogICBsZXQgW3gseV0gPSBbMSwnYSddOyAgICAgKi9cclxuICAgIHJldHVybiBbIHJvdyArIDEsIGFsZl95W2NvbHVtbl0gXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKXtcclxuICAgLyogIGxldCBbcm93LGNvbHVtbl0gPSBbMCwwXTsgKi9cclxuICAgIGxldCByb3dTZWxlY3RlZCA9IGNvb3JkWzBdLTE7XHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBhbGZfeS5pbmRleE9mKGNvb3JkWzFdLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHJldHVybiBbTnVtYmVyKHJvd1NlbGVjdGVkKSwgTnVtYmVyKGNvbHVtblNlbGVjdGVkKV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKSB7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBhcnJheS5wdXNoKGAke2krMX0sJHthbGZfeVtqXX1gKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCl7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGxldCBuPSAtMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBuID0gbiArIDE7XHJcbiAgICAgICAgYXJyYXkucHVzaChbbixbYCR7aSsxfSwke2FsZl95W2pdfWBdXSk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeSwgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIFxyXG4gICAgY2hlY2tDb29yZGluYXRlcywgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzLCBhbGxDb29yZGluYXRlc1Bvc2libGVzLFxyXG4gICAgICAgIGZyb21Db29yZGluYXRlc3RvQ2VsbCwgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=