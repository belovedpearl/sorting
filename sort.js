let inputEl = document.getElementById("input-el");
let pEl = document.getElementById("p-el");
let resetEl = document.getElementById("reset")


let data = [];

function submit(){
    data.push(inputEl.value)
    //console.log(data)
    inputEl.value = "";
    pEl.innerHTML = data;
}

function sortAl(){
    data.sort();
    pEl.innerHTML = data;
}

function sortAs(){
    data.sort(function(a,b){
        return (a-b)
    })
    pEl.innerHTML = data;
}

function sortDe(){
    data.sort(function(a,b){
        return (b-a)
    })
    pEl.innerHTML= data;
}

function sortRa(){
    data.sort(function(a,b){
        return 0.5- Math.random()
    })
    pEl.innerHTML = data
}

resetEl.addEventListener("click", function(){
    pEl.innerHTML = data.splice(0,data.length)
})

