const arr = [1,2,3,4] // .map will work for this because it is an array method

const me = {name: "Shelby", job: "teacher", faveFood: "tofu"}
// .map will not work on an object. We have for...in to loop over objects.

me["updated_name"] = 'Michelle' // if using non-standard characters, we need to stringify the key (this applies to snake case as well as any other form of non-standard chars)

// console.log(me)

const pokemon = {
    name: 'pikachu',
    age: 7, 
    likes: 0
  }

  console.log(pokemon)

  pokemon["name"] = "other name" // even stringified, this overwrites the previous name property.

console.log(pokemon)


function increaseValue(obj, key) {
    return obj[key] += 1 // or return ++obj[key]
    // vs    return obj[key]++ the value does increment here, however the function returns before the value increments, so the return value of this object is not strictly accurate.
}

increaseValue(pokemon, "likes")
increaseValue(pokemon, "likes")
increaseValue(pokemon, "likes")

// console.log(pokemon)

//non-destructive Object.assign() -> third argument needs to be an object. Can hold multiple key/value pairs but does not have to.
//// non-destructive, then we delete key to protect original data in pokemon from being mutated
const newChar = Object.assign({}, pokemon, {abilities: "chlorophyll", url: "https://pokeapi.co/api/v2/pokemon-form/1/"})
newChar.name = "bulbasaur"

// delete newChar.abilities
console.log(newChar)

const newPoke = {...pokemon} // non-destructive spread, then we delete key to protect original data in pokemon from being mutated. 
// if we had called delete keyword on our original pokemon object, this would be destructive.

delete newPoke.abilities
// console.log(newPoke)
