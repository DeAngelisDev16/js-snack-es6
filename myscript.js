/* 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli. */

/* const studente={
    name : 'Alessio',
    lastname : 'De Angelis',
    age : 28,

}
    


for ( let key in studente){
    console.log(key, studente[key]);
}

const studentList = [
    {
        name : 'Alessio',
        lastname : 'De Angelis',
        age : 28,
    
    },
    {
        name: 'Francesco',
        lastname: 'Bianchi',
        age: 25
    }, 

    {
        name: 'Luigi',
        lastname: 'Forti',
        age: 30
    } 

    
];

console.log(studentList);
 */

//============================================================================================================

/* Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array. */
   /* const benzina =[];
   
   const diesel =[];
   const elettrico =[];
   const carList = [
    {
        marca: 'Kia',
        modello: 'Rio',
        alimentazione: 'benzina'
    },
    {
        marca: 'Mercedes',
        modello: 'Gla',
        alimentazione: 'diesel'
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'elettrica'
    },
    {
        marca: 'Ford',
        modello: 'Focus',
        alimentazione: 'diesel'
    },
    {
        marca: 'Opel',
        modello: 'Mokka',
        alimentazione: 'elettrica'
    },
    {
        marca: 'Pevgeot',
        modello: '206',
        alimentazione: 'benzina'
    },
    {
        marca: 'Kia',
        modello: 'Stonic',
        alimentazione: 'gpl'
    },
    {
        marca: 'Kia',
        modello: 'Sportage',
        alimentazione: 'gpl'
    },
    {
        marca: 'Ford',
        modello: 'puma',
        alimentazione: 'benzina'
    },
    {
        marca: 'Renault',
        modello: 'Capture',
        alimentazione: 'elettrica'
    }
   ]

   //console.log(carList);

   for(let i = 0; i < carList; i++){
       //console.log(carList[i]);
       const auto = carList[i];
       if (auto.alimentazione==='benzina') {
           benzina.push(auto);
           
       } else if (auto.alimentazione==='elettrica'){
           elettrico.push(auto);
   
       } else if (auto.alimentazione==='diesel'){
           diesel.push(auto);
           
       }

   }
   */



   
    

    
    
    
    
    
    
   



   //======================================================================================
/* Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine. */

/* const courgetteList = [
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
    {
        varietà : 'boh',
        peso: 1 ,
        lunghezza : '30cm'

        
    },
];


//console.log(courgetteList);
let courgetteWeight;

for(let i = 0; i < courgetteList; i++){
    
    //console.log(courgetteWeight);
}
 */

//=========================================================================================================================================

// Crea un array di oggetti che rappresentano degli animali. V
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'

    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'

    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'

    },
    {
        nome: 'tigre',
        famiglia: 'felidi',
        classe: 'mammiferi'

    },
    {
        nome: 'pantera',
        famiglia: 'felidi',
        classe: 'mammiferi'

    },
    {
        nome: 'lupo',
        famiglia: 'canidi',
        classe: 'mammiferi'

    },
    {
        nome: 'fenicottero',
        famiglia: 'fasianidi',
        classe: 'uccelli'

    },
    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi'

    },
    {
        nome: 'struzzo',
        famiglia: 'fasianidi',
        classe: 'uccelli'

    },
    {
        nome: 'tacchino',
        famiglia: 'fasianidi',
        classe: 'uccelli'

    },
];

const mammiferiList = animals.filter((animal)=> {
    if(animal.classe === 'mammiferi'){
        return true;

    }
    return false;
})

console.log(mammiferiList)