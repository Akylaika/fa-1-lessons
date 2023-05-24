// For Loop
// 
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');

for(let i = 0; i< 50; i++){
    //console.log('Hello',i)
}

const names = ['Guliza','Nazima','Timur']
//                 0       1        2
//index === value
// 0,1,2 === name

//console.log(names[0]); // Guliza
//console.log(names[1]); // Nazima
//console.log(names[2]); // Timur
//console.log(names[3]); // undefined

   //console.log(names);// [....]


for(let i = 0; i < names.length; i++){
   // console.log('Hello',names [i]);
}
//   %5 КОКА
//   %3 КОЛА
for(let san = 0; san <101; san++) {
    if(san % 5 === 0 && san % 5=== 0) {
        console.log(" КОКА КОЛА",san);
    }
}
let name = 'Adahan'
for (let tamga = 0; tamga< name.length; tamga++){
    if (name[tamga].toLowerCase() === 'a'){
        console.log(name[tamga].toLowerCase());
    }
}
for (const t of name) {
    if(t.toUpperCase() === 'A'){
        console.log(t.toUpperCase());
    } 
}
// for in
const user = {
    name: 'Adahan',
    age: 25,
    gender:'male'
}
// console.log(user.name);// Adahan
// console.log(user.age); // 25
// console.log(user['gender']); //male

// for(const key in user){
    // console.log(key, ":", user[key]);
// }



let btn1 = document.querySelectorAll('button')

for(let i = 0; i < btn1.length; i++){
    btn1[i].onclick = function () {
        document.body.style.background = btn1[i].innerText
    }


}


