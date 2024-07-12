let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
console.log(saveEl)
let count = 0
function increment(){
    count = count + 1
    countEl.innerText = count
}
function save(){
    let countStr = count + "-"
    // console.log(count)
    // saveEl = innerText += countStr
    saveEl.textContent += countStr
}