/**
 * Exercice 1 : Votre Plat Préféré
 * 1- Stocker votre nourriture préférée dans une variable.
 * 2- Enregistrer votre repas préférée de la journée dans une variable
 * 3- Console.log (I eat <favarite food> at every <favorite meal>)
 */

let myFavoriteMeals = "Diner";
let myFavoriteJourneyMeal = "Garba";
console.log(`I eat ${myFavoriteJourneyMeal} at every ${myFavoriteMeals}`);

/**
 * Exercice 2 : Série
 * En utilisant ce tableau :const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
 * 1-Créez une variable myWatchedSeriesLengthdont le nom est égal au nombre de séries dans le myWatchedSeriestableau.
 * 2-Créez une variable nommée myWatchedSeriesSentence, qui est égale à une phrase décrivant la série que vous avez regardée
 * Par exemple :black mirror, money heist, and the big bang theory
 * 3-Console.log une phrase utilisant les deux variables créées ci-dessus
 * Par exemple :I watched 3 series : black mirror, money heist, and the big bang theory
 */

/****************************************************************
Correcteur: Yannick GOUGUIA
mauvaises reponses a la ligne 25 et 28, veuillez revoir l'exercice
*****************************************************************/
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLengthdont = myWatchedSeries.length;
let myWatchedSeriesSentence = "money heist, the big bang theory and black mirror.";
console.log(`I watched ${myWatchedSeriesLengthdont} series : ${myWatchedSeriesSentence}`);

myWatchedSeries.splice(2, 1, "friends");
console.log(myWatchedSeries);

myWatchedSeries.push("Utopia");
myWatchedSeries.unshift("Vampires Diaries");

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

console.log(`la troisème lettre de la série ${myWatchedSeries[1]} : ${myWatchedSeries[1].charAt(2)}`);

console.log(myWatchedSeries);

/**
 * Exercice 3 : Le convertisseur de temperatures
 * 1-Stocker une temperature Celsius dans une variable.
 * 2-Convertissez-le en fahrenheit et console.log <temperature>°C is <temperature>°F.
 */

let tempCelsius = 26;
let tempFarhenheit = (tempCelsius/5)*9 + 32;
console.log(`${tempCelsius}°C is ${tempFarhenheit}°F`);

/**
 * Exercice 4 : Devinez les Réponses #1
 * Pour chaque expression, prédisez ce que vous pensez que la sortie sera dans un commentaire ( //) sans exécuter la commande au préalable.
 * Bien sûr, expliquez chaque prédiction.
 * Exécutez ensuite l'expression dans la console. Notez la sortie réelle dans un commentaire et comparez-la avec votre prédiction.
 */

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55, because 34 and 21 are number
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23, because a = 2 and b = 21 arre numbers
// Actual: 23

// 3 - c est undifined

console.log(3 + 4 + '5');
// Prediction: 75, because 3 + 4 = 7 and 7 + '5' = 75 because it is concatenation
// Actual: 75

/**
 * Exercice 5 : Devinez les Réponses #2
 * Pour chaque expression, prédisez ce que vous pensez que la sortie sera dans un commentaire ( //) sans exécuter la commande au préalable.
 * Bien sûr, expliquez chaque prédiction.
 * Exécutez ensuite l'expression dans la console. Notez la sortie réelle dans un commentaire et comparez-la avec votre prédiction.
 */

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: String
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false

/**
 * Exercice 6  : Devenez les reponse #3
 * Pour chaque expression, prédisez ce que vous pensez que la sortie sera dans un commentaire ( //) sans exécuter la commande au préalable.
Bien sûr, expliquez chaque prédiction.
Exécutez ensuite l'expression dans la console. Notez la sortie réelle dans un commentaire et comparez-la avec votre prédiction.
 */

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction:JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: "  "

" " + 0
// Prediction: " 0"
// Actual: " 0"

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
