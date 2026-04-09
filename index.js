let x;
let y;
x = 0;
console.log(`You drank ${x} monsters`);
let firstName = "Monkey";
console.log(typeof firstName);
console.log(`My name is ${firstName}`);
document.getElementById("buttonmain").onclick = function(){
    x = x + 1;
    document.getElementById("monstercounter").textContent = `You have drank ${x} monsters`;
}