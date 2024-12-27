//Singleton object and Non Sigleton

//Singleton example syntex
const tinder = new Object ();
console.log(tinder)


//Non-Singleton (onject Literal) example syntex
const Newtinder = {}
console.log(Newtinder)


//Syymbol object example syntex
const mysbl = Symbol('key1')

//Non-Singleton (onject Literal) example syntex
const userName = {

    name: "Chandan",
    age : 32,
    email:"chandan.kumar@gmail.com",
    [mysbl] : "mykey1",
    "full name" : "Chandan Yaduvanshi"

}

console.log(userName)
console.log(typeof userName["full name"])
console.log(typeof userName[mysbl])



const obj1 = {a:1,B:2,c:3}
const obj2 = {d:4,e:5,f:6}
const obj3 = {g:7,h:8,i:9}

const obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj4)