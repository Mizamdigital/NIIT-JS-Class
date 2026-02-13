function loadDoc() {
    let xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById("contentbox").innerHTML = this.responseText;
    }
     xhttp.open("GET", "textDoc.txt", true);
     xhttp.send();
}


/* index */

function loadPage(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "about.html",true);
    xhr.onload = function () {
        if(
            this.status === 200){
                document.getElementById("contentbox").innerHTML = this.responseText;
            }
            
        
    }
    xhr.send();
}


/* classwork */

function reloadPage() {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onload = function () {
                document.getElementById("submitText").innerHTML =  this.responseText;
            }
            xhttp.open("GET","textDocs.txt",true);
            xhttp.send();
    }


    /* JASON */
     function loadUser(){
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET","user.json",true);

        xhttp.onload = function(){
            if(xhttp.status === 200){
                let data = JSON.parse(xhttp.responseText);

                document.getElementById("output").innerHTML =
                data.name + "<br>"+ data.course + "<br>" + data.level;
            }
        }
        xhttp.send();
     }


     /* classwork */
     function loadSales(){
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "sales.json",true);

        xhttp.onload = function(){
            if(xhttp.status === 200){
                let data = JSON.parse(xhttp.responseText);
                 document.getElementById("salesOutput").innerHTML =
                 data.item_name + "<br>" + data.item_price + "<br>" + data.item_qty;
            }
        }
            xhttp.send();
     }


     function showProducts(){
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "product.json",true);

        xhttp.onload = function(){
            if(this.status === 200){
                let data = JSON.parse(this.responseText);

                let output =" ";

                data.forEach(item=>{
                    output += `
                     <div class="cards">
                     <h3> Name:${item.product_name}</h3>
                     <p> Price:${item.product_price}</p>
                     <small>Qty:${item.product_qty}</small>
                     <hr>
                     </div>
                    `;
                });
                document.getElementById("productDisplay").innerHTML = output;
            }
            else{
                console.log("error",xhttp.responseText);
                console.log("status",xhttp.status,xhttp.statusText);
            }
        }
        xhttp.send();
     }



     /* assignment */

     /* Create an XMLHttpRequest object */
      function studentInfo(){
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "student.json");

        xhttp.onload = function(){
            if(this.status === 200){
                let data = JSON.parse(this.responseText);

                let review= " ";

                data.forEach(s=>{
                    review += `
                    <table class="students" border="1" style="border-collapse: collapse; width:50%; text-align:center; margin-bottom:20px; border-color: red;">
                    <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Level</th>
                    <th>CGPA</th>
                    <th>Age</th>
                    </tr>

                    <tr>
                    <td>${s.Name}</td>
                    <td>${s.Dept}</td>
                    <td>${s.Level}</td>
                    <td>${s.CGPA}</td>
                    <td>${s.Age}</td>
                    </tr><br>
                    </table>
                    `;
                });
                document.getElementById("reviewDetails").innerHTML = review;
            }
        }
        xhttp.send();
      }