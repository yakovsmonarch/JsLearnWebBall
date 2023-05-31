const bloggers = [
    {name:"Alex", age: 20},
    {name:"Vitor", age: 30},
    {name:"Diego", age: 40},
];

const newBloggers = bloggers.map(function(item){
    return item.age;
});
console.log(newBloggers);

const myMap = (arr, cllBack) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        const elem = arr[i];
        newArr.push(cllBack(elem));
    }
    return newArr;
};

const arrMyMap = myMap(bloggers, (p)=>{
    return p.name;
});

console.log(arrMyMap);