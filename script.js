let array = ["Star", "Wars", "Episode", "Three", "Shakesperian Masterpiece"]      


function makeAllCaps(arr) {
    let newArray = arr.map(word => {
        return word.toUpperCase();
    });
    return newArray
}

function sortWords(arr) {
   let newArray = arr.sort();
   return newArray
}

function inOrder(arr) {
    arr.forEach(word => {
        
        if (/\s/.test(word)) {
            return "Cmon man an error!"
        }
    })
    .then(makeAllCaps(arr))
    .then(sortWords(arr))
}

inOrder(array);