function myResolve(datum){ 
    let data = "<table border='2'>";
    //  let employees = JSON.parse(datum); 
     console.log(employees.employees) 
    } 
    function myReject(message)
    { 
        document.getElementById("demo").innerHTML = message; 
    } 
    function testPromise()
    {
         let myPromise = new Promise(function (myResolve1, myReject1)
         { 
            let req = new XMLHttpRequest(); 
            req.open("GET", "C:\Users\soumya.penuguvvi\Desktop\React JS\JavaScript-Projects\closure\employees.json"); 
            req.onload = function () 
            { 
                if(req.status == 200)
                { 
                    myResolve1(req.responseText); 
                }
                else
                { 
                    myReject1("<h1>Database not available</h1>"); 
                }
             };
              req.send(); 
            }
            ); 
            myPromise.then
            ( 
                function(response)
            {
                 myResolve(response); 
            }, 
            function(response)
            { 
                myReject(response);
            } 
             ) 
    }     
