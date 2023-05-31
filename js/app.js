const bloggers = [
    {name:"Alex", age: 20},
    {name:"Vitor", age: 30},
    {name:"Diego", age: 40},
];

const newBloggers = bloggers.map(function(item){
    return item.age;
});
console.log(newBloggers);