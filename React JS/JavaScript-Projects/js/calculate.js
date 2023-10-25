let students = []; 
let i = 0; 
let update = -1; 
function calculate() 
{ 
    let name = document.getElementById("name").value; 
    let m1 = parseFloat(document.getElementById("m1").value); 
    let m2 = parseFloat(document.getElementById("m2").value); 
    let total = m1 + m2; 
    let percent = total/2; 
    document.getElementById("percent").value=percent; 
    i++; 
    let student = { 
        "id":i, 
        "name":name, 
        "m1":m1, 
        "m2":m2, 
        "total":total, 
        "percent":percent 
    } 
    if(update == -1)
    { 
        students.push(student); 
    }
    else{ 
        student.id = update+1; 
        students[update] = student; 
        update = -1; 
    } 
    showArray(); 
} 
showArray = () => 
{ 
    let showStudents = 
    "<table class='table table-striped'>" + 
    "<thead>" + 
    "<tr>" + 
    "<th>ID</th>" + 
    "<th>Name</th>" + 
    "<th>M1</th>" + 
    "<th>M2</th>" + 
    "<th>Total</th>" + 
    "<th>Percent</th>" + 
    "<th>Action</th>" + 
    "</tr>" + 
    "</thead><tbody>"; 
    for (i = 0; i < students.length; i++) 
    { 
        showStudents += 
        ` <tr> 
        <td>${students[i].id}</td> 
        <td>${students[i].name}</td> 
        <td>${students[i].m1}</td> 
        <td>${students[i].m2}</td> 
        <td>${students[i].total}</td> 
        <td>${students[i].percent}</td> 
        <td> <button type="button" class="btn btn-success" onclick="updateIt(${i})">Update</button> <button type="button" class="btn btn-danger" onclick="deleteIt(${i})">Delete</button> </td> 
        </tr> `; 
    } 
        showStudents += 
        "</tbody></table>"; 
        document.getElementById("arrays").innerHTML = showStudents; 
    }; 
    deleteIt = (i) => 
    { 
        students.splice(i,1); 
        if(students.length != 0)
        { 
            showArray(); 
        }
        else
        { 
            document.getElementById("arrays").innerHTML = ""; 
        } 
    } 
    updateIt = (i) => 
    { 
        document.getElementById("name").value = students[i].name; 
        document.getElementById("m1").value = students[i].m1; 
        document.getElementById("m2").value = students[i].m2; 
        document.getElementById("percent").value = students[i].percent; 
        update = i; 
    }
    incrementPercent = () =>{
        if(students.length!=0){
            students = students.map((stu) => {
                let increment = 5;
                if(stu.percent > 95){
                    increment = 100-stu.percent;
                }
                let student = {
                    "id": stu.id,
                    "name":stu.name,
                    "m1":stu.m1,
                    "m2":stu.m2,
                    "total":stu.total,
                    "percent":stu.percent+increment
                }
                return student;
        });
        showArray();
        }
    }