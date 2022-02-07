let data = [
    {
    name: "Metereo",
    age: '22',
    salary: 20000
},
{
    name: "Sarah",
    age: '25',
    salary: 25000
},
{
    name: "John",
    age: '30',
    salary: 22000
},

{
    name: "Tim",
    age: '27',
    salary: 35000
},

{
    name: "Sam",
    age: '32',
    salary: 15000
},

{
    name: "Joey",
    age: '34',
    salary: 40000
}
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' '+'is '+ item.age + ' years old, '+ 'salary is '+ item.salary+'.'+ '</div>';
})

info.innerHTML = details.join('\n');
