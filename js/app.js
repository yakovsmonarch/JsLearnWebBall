// Создание собственного мапа.
function CreateMap(){
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
}

function useFilter(){
    const bloggers = [
        {id: 0, name:"Alex", age: 20},
        {id: 1, name:"Vitor", age: 30},
        {id: 2, name:"Diego", age: 40},
    ];

    const newFrends = bloggers.filter((f)=>f.id > 1);
    console.log(newFrends, " newFrends");
}

function myFilter(){
    const bloggers = [
        {id: 0, name:"Alex", age: 20},
        {id: 1, name:"Vitor", age: 30},
        {id: 2, name:"Diego", age: 40},
    ];

    const myFilterFunc = (arr, cllBack) => {
        const newArr = [];
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if(cllBack(item)){
                newArr.push(item);
            }
        }
        return newArr;
    }

    console.log("myFilterFunc: ", myFilterFunc(bloggers, (b)=>b.age === 40));
}

console.log(myFilter());
