function sum(a, b) {
    return a + b;
  }

  var mojaRecenica = "Moja recenica sadrzi 3 slova e";
  function brojSlovaE(){
        let retVal = 0;
        let e = "e";
        for(let i = 0; i < mojaRecenica; i++){
            let slovo = mojaRecenica[i];
            if (slovo ===e){
                retVal++;
            }
        }
  return retVal;
    }



 module.exports = {sum, brojSlovaE}
