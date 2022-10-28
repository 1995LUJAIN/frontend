/*let name= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nostr";

console.log(name.length);
console.log(name[0]);
console.log(name.charAt(4));
console.log(name.indexOf('s',2));
console.log(name.lastIndexOf('L'));
console.log(name.slice(0,5));
console.log(name.split(' '));
console.log(name.split(' ')[0]);
console.log(name.split('a'));
console.log(name.substr(0,5));
console.log(name.includes('a'));
console.log(name.startsWith('Lorem ipsum'));
console.log(name.startsWith('Lorem ipsum',0));
console.log(name.endsWith('r'));
console.log(name.endsWith('nostr'), 69);

*/
let car={
    carName:"bmw",
    carModel:"2022",
    carColor:"black",
    
    print:function(){
       return console.log(this.carName+ " " +this.carModel+" "+this.carColor);
    },

};
car.carName='KIA';
/*car.print=function(){
    console.log("hello")
}*/
car.carColor='red';
/*car['carColor']="blue";*/
car.print()
console.log(car.carName)
console.log(car['carModel'])
