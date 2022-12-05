/* 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli. */

const studente={
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
