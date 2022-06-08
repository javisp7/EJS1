let pizzaIngredientees = ['tomate','queso','aceituna','jamon','huevo','salamin','albahaca','masa','oregano','cebolla','morron']
//,'aceituna','jamon','huevo','anchoas','rucula','masa','oregano','cebolla','morron'

let pares = []
let impares = []
function paridad(pizzaIngredientees){
    for(i = 0; i < pizzaIngredientees.length; i++){
        var valor = pizzaIngredientees[i]
        if (valor.length % 2 == 0){
            pares.push(pizzaIngredientees[i]);
        
        }else{
            impares.push(pizzaIngredientees[i]);
        }
        
    }
}

console.log(paridad(pizzaIngredientees));
console.log("Los ingredientes pares son: ",pares)
console.log("Los ingredientes impares son: ",impares)