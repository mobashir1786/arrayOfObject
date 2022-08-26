let studentRecords = [ 
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 }
    ];
console.log(studentRecords);

// 1."Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']
let nameOfArray=[];
function studentName(){
    for (let i = 0; i < studentRecords.length; i++) {
        nameOfArray[i]=studentRecords[i].name;
        nameOfArray[i]=nameOfArray[i].toUpperCase();
    }
    // let arr = nameOfArray.map(e => {
    //     return e.toUpperCase();
    // })
    console.log(nameOfArray);
}
studentName();


// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
let studentListAbove50= studentRecords.map(student =>{
    if(student.marks>50){
        console.log(student);
    }
});


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let studentListWithId= studentRecords.map(student1=>{
    if(student1.id>120 && student1.marks>50){
        console.log(student1);
    }
});


// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let totalMarks = 0;
studentRecords.map(student2=>{
    totalMarks+=student2.marks;
    
})
console.log(totalMarks);


// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let arrayName =studentRecords.map(student3 => {
    if(student3.marks>50){
        console.log(student3.name);
    }
})
//2nd method
let array1=[];
for (let i = 0; i < studentRecords.length; i++) {
    if(studentRecords[i].marks>50){
        array1.push(studentRecords[i].name);
    }
};
console.log(array1);


// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let sumOfMarks = 0;
studentRecords.map(student4=>{
    if (student4.id > 120) {
        sumOfMarks+=student4.marks;   
    }
})
console.log(sumOfMarks);


// Question 7: This time we are required to print the total marks of the students with marks greater than 50 
//             after a grace of 15 marks has been added to those students who scored less than 50.
let sumOfMArkAfterGrace = 0;
let array2=studentRecords.map(student4=>{
    if (student4.marks < 50) {
            return student4.marks=student4.marks+15;
    }
    else{
        return student4.marks;
    }
})
console.log(array2);
array2.map(m=>{
    if (m>50){
    sumOfMArkAfterGrace+=m;
    }
});
console.log(sumOfMArkAfterGrace);


// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
let obj1={
    name: "Mobashir",
    class: 1,
    rollNo: 1
} 
let obj2={
    name: "Mobashir",
    class: 1,
    rollNo: 1
}
let obj3={
    name: "Mobashir",
    class: 1,
    rollNo: 1
}
let obj4={
    name: "Mobashir",
    class: 1,
    rollNo: 1
}
let obj5={
    name: "Mobashir",
    class: 1,
    rollNo: 1
}
let obj6={
    name: "Mobashir",
    class: 1,
    rollNo: 1
}
let arrayOfObject=[];
arrayOfObject.push(obj1);
arrayOfObject.push(obj2);
arrayOfObject.push(obj3);
arrayOfObject.push(obj4);
arrayOfObject.push(obj5);
arrayOfObject.push(obj6);
console.log(arrayOfObject);