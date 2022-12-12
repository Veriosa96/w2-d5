//dichirazione della funzione
function saluta() {
    console.log("ciao")
}

//utilizzo
 saluta()

 for (let index = 0; index < 10; index++) {
    saluta()
    
 }

 //parametri della funzione

 function salutaQualcuno(qualcuno) {
    console.log("Ciao", qualcuno)
    console.log("il mio nome è: ")
    console.log("Nicoletta")
 }
 salutaQualcuno("Saverio") //Il parametro qualcuno avrà valore "Saverio"
 salutaQualcuno("Giovanni")
 salutaQualcuno() // se eseguo la stampa darò undefined 


 function quadrato(x){
    console.log("il quadrato è: ", x * x)
    
function cubo (x){
  console.log("il cubo è:", x*x*x)
}
 }

 quadrato(4)
 quadrato(6)
 quadrato(12)
 

 //FUNZIONI CON PIU' PARAMETRI

 function somma(add1, add2) {
    console.log("la somma sarà: ", add1 + add2 )
 }
 somma(10,20)

 const arraydinumeri=[1,2,3,4,5,6,7,8,9,10]
  for (let index = 0; index < arraydinumeri.length; index++) {
    const element = arraydinumeri[index];
    console.log("elemento corrente: ",element)
    quadrato (element) 
    
  }

  function quadratoecubo(x) {
    console.log("il numero passato è: ",x)
    quadrato(x)
    
  }
  quadratoecubo(5)
  quadratoecubo(10)
  

  function somma(x, y) {
    const risultato = x+y
    return risultato
  }

  const sommaDuepiùDue = somma(2+2) //se la funzione ha un valore di ritorno posso memorizzare quel valore in una variabile

  console.log(sommaDuepiùDue)