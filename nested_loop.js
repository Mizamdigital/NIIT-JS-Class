var productBox = document.getElementById("productContent");
         
         var output = "";

         var products = [ 
             ["shirt","$40",50],
             ["short","$80",10],
             ["caps","$30",50], 
             ["sweaters","$120",80],
             ["shoe","$60",40],
             ["hoodie","$130",70],
         ];

        for(var i = 0; i < products.length; i++){
            output += "<tr>";
                for(var j = 0; j < products[i].length; j++){
                   output  += `<td> ${products[i][j]} </td>`;
                }
                
                 output +=  "</tr>"; 
        }
               productBox.innerHTML = output;


//example 2


               let students = document.getElementById("studentDetails");

               let showDetails = "";

               let studentInfo = [
                  ["Tochukwu", "Accountancy", "200lvl", 25],
                  ["Grower", "psychology", "400lvl", 30],
                  ["Shower", "Biology", "100lvl", 22],
                  ["Yinka", "Law", "300lvl", 28],
                  ["Dare", "Engineering", "500lvl", 27],
                  ["Peace", "Medicine", "600lvl", 24],
               ];

               for(let x = 0; x < studentInfo.length; x++){
                    showDetails += "<tr>";
                    for(let y = 0; y < studentInfo[x].length; y++){
                        showDetails += `<td> ${studentInfo [x][y]} </td>`;
                    }
                    
                    showDetails += "</tr>";
               }
                 students.innerHTML = showDetails;


                 /* student Div */
                 let studentDetails = document.getElementById("studentBox");

                let studentOutput = " ";

                
                let studentInfos = [
                ["images/classRoom.jpg", "Obafemi", "Mechanical Engineering", 400],
                ["images/classRoom.jpg", "Oladele", "Computer Science", 300],
                ["images/classRoom.jpg", "Brown", "Civil Engineering", 200],
                ["images/classRoom.jpg", "Ayodele", "Medicine", 100],
                ["images/classRoom.jpg", "Olasunkanmi", "Pharmacy", 100]
                ];

                for (let s = 0; s < studentInfos.length; s++) {
                studentOutput += `<div class="studentCard">`;

                for (let t = 0; t < studentInfos[s].length; t++) {
                    if (t == 0) {
                    studentOutput += `<img src='${studentInfos[s][0]}' alt='student photo'>`;
                    } else if (t == 1) {
                    studentOutput += `<div class='stu-name'>${studentInfos[s][t]}</div>`;
                    } else if (t == 2) {
                    studentOutput += `<div class='stu-dept'>${studentInfos[s][t]}</div>`;
                    } else if (t == 3) {
                    studentOutput += `<div class='stu-level'>${studentInfos[s][t]}</div>`;
                    }
                }

                studentOutput += `</div>`;
                }

               studentDetails.innerHTML = studentOutput;
