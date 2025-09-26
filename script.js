console.log("Script connected");

function whoBegins(){
    let beginner = Math.random();
    if(beginner == 0){
        console.log("User beginnt");
        return 0;
    }else{
        console.log("Computer beginnt");
        return 1;
    }
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice())


