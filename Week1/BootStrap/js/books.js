let myVar = "Happy"

function orderThis(id) {
    // alert(`Order id${id}`);
    let res = document.getElementById('results');
    res.innerHTML = ` id:${id} `;
    let x = "BlackJack"
    if (x == "BlackJack") {
        console.log(x)
    }

}

function orderThat(id) {
    let myVar = "Beanhead";
    myVar += "4";
    myVar = 22;
    myVar = 3.14;
    myVar += 1;
    let res = document.getElementById('results');
    res.innerHTML = ` id:${id} myVar:${myVar} `;
}

function orderThatV2(id) {
    let myList = ['planes', 'trains', 'automobiles'];
    myList.push("Boat");
    // myList.
    let oStr = " ";
    let c = "";
    for (let i = 0; i < myList.length; i++) {
        oStr += c + myList[i];
        c = ", ";
    }
    console.log("FLAG1:" + oStr);
    console.log(myList.map(i => "item:" + i));
    let newList = myList.map(i => "item:" + i);
    console.log("----------")
    console.log(myList);
    console.log(newList);
}

function orderThatV3(id) {
    let myString = "Applese";
    myString = 'Bananas';
    let myNum = 4;
    let myList = [];
    let myObj = {};

    let student = {
        name: "Jack",
        age: 22,
        gpa: 3.55,
        courses: ["CSC1700", "CSC2200"]
    }
    let studentV2 = [
        {
            name: "Jack",
            age: 22,
            gpa: 3.55,
            courses: ["CSC1700", "CSC2200"]
        },
        {
            name: "Jill",
            age: 21,
            gpa: 3.95,
            courses: ["CSC1700", "CSC2200", "CSC3700"],
            hobby: "running"
        }, {
            name: "James",
            age: 122,
            gpa: 3.00,
            courses: ["CSC1700"]
        }
    ];
    console.log(`name:${studentV2[1].name}`);
    console.log(`age:${studentV2[1].age}`);
    console.log(`course1:${studentV2[1].courses[0]}`);
    console.log(`NumStudents:${studentV2.length}`);
    // Create a for loop that outputs the name for student 1 (jack)
    // and then alerts the name of student 2 "Jill"
    for (let i = 0; i < studentV2.length; i++) {
        alert(`Name:${studentV2[i].name} `);
    }
    let ct = 0;
    for (let i = 0; i < studentV2.length; i++) {
        ct += studentV2[i].courses.length;
    }
    alert(`ct:${ct}`)
    if (studentV2.length != 0) {
        if (studentV2[0].age === 21) {

        }
    }
}

function orderThatV4(id) {
    let myVar;
    let myVar2 = "";
    let myVar3 = null;
    console.log(`myVar:${myVar} `);
    console.log(`myVar2:${myVar2} `);
    console.log(`myVar3:${myVar3} `);
    if ( myVar3 === null ){

    }
    if ( myVar === undefined ){
        console.log("It is undefined")
    }
    let v1 = "";
    if ( v1 === ""){

    }
}


