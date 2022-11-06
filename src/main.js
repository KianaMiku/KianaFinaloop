function buttonClicked(){ //function to search recipe from API link based on value entered
    var meals = document.getElementById("food").value;
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); //output the API into console.
        console.log("Meal id: " + data.meals[0].strMeal);
        console.log("Meal category: " + data.meals[0].strCategory);
        console.log("Meal origin: " + data.meals[0].strArea);
        console.log("Meal instructions: " + data.meals[0].strInstructions);

        //display output at main page after data found
        document.getElementById('display').innerHTML="Meal Name: " + data.meals[0].strMeal + "<br/><br/>";
        document.getElementById('display').innerHTML+="Meal Category: " + data.meals[0].strCategory + "<br/><br/>"; 
        document.getElementById('display').innerHTML+="Meal Area: " + data.meals[0].strArea + "<br/><br/>";
        document.getElementById('display').innerHTML+="Preparation Instructions: <br/>" + data.meals[0].strInstructions + "<br/><br/>";
        document.getElementById('display').innerHTML+="Ingredients: <br/> ";

        for (var i = 9; i < 29; i++){//for loop to display ingredients
            if (Object.values(data.meals[0])[i] != "" && Object.values(data.meals[0])[i] != null){
                document.getElementById('display').innerHTML+="- " + Object.values(data.meals[0])[i+20] + " " + Object.values(data.meals[0])[i] + "<br/>";
            }
        }
        document.getElementById('display').scrollIntoView(); //windows views display after recipe found
    })
}



// close app
const ipc = require('electron').ipcRenderer

function closeApp(e) {
    e.preventDefault()
    ipc.send('close')
  }
  
  document.getElementById("closeBtn").addEventListener("click", closeApp);
