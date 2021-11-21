// Use map to add 5 to each number
var numbers = [0,2,4,6,8];

var fivers = numbers.map(function(num){
    return num + 5;
});
console.log(fivers);

// Use map to get populations
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPopulations = cities.map(function(population){
    return population.population;
});
console.log(cityPopulations);

// Slice the first 3 elements of the array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1  = words.slice(0,3);
console.log(slice1);