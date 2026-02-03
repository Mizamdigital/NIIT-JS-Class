//dom methods used to access html elements that has id attribute
        let contentContainer = document.getElementById("contentbox");

        contentContainer.style.backgroundColor = "lightgray"; 
        contentContainer.style.width = "80%";
        contentContainer.style.height = "500px";
        contentContainer.style.margin = "20px auto";
        contentContainer.style.display = "flex";
        
        
    

         //boxes selected by class name using querySelectorAll
        let itemContainer = document.querySelectorAll(".item-box");

        itemContainer.forEach(item => {
        item.style.backgroundColor = "yellow";
        item.style.borderRadius = "15px";
        item.style.width = "30%";
        item.style.height = "200px";
        item.style.margin = "100px 3%";
        item.style.textAlign = "center";
        item.style.paddingTop = "150px";
        });

        //paragraphs
        let texts = document.getElementsByClassName("txt");

        texts[0].style.backgroundColor = "blue";
        texts[0].style.color = "white";
        
        //changing text of paragraphs [1]
        texts[1].style.backgroundColor = "black";
        texts[1].style.color = "white";
        texts[1].innerHTML = "This is modified paragraph using getElementsByClassName";

        texts[2].style.backgroundColor = "green";
        texts[2].style.color = "white";

        //create Element
        let div = document.createElement("div");

        div.textContent = "Happy new year!";
        div.style.textAlign = "center";
        div.style.backgroundColor = "purple";
        div.style.color = "white";
        div.style.height = "60px";
        div.style.fontSize = "24px";
        


        contentContainer.appendChild(div);

        //onClick event
        //onsubmit event
        //onchange event
        //onmouseover event
        //onmouseout event
        //onfocus event
        //onblur event
        //onkeydown event
        //onkeyup event
        //onkeypress event
        //onmouseenter event
        //onmouseleave event
 
         let evnt_box = document.getElementById('evnt-box');
                evnt_box.style.backgroundColor = "lightgray";
                evnt_box.style.width = "80%";
                evnt_box.style.height = "100px";


                evnt_box.addEventListener("mouseover", ()=>{
                    alert("Mouse over me!");
                });


                //counter
                let show_count = document.getElementById('show-count');
                let button = document.getElementById('butt');
                let button_minus = document.getElementById('butt-minus');

                //style
                show_count.style.backgroundColor = "lightgray";
                show_count.style.color = "black";
                show_count.style.padding = "20px";
                show_count.style.width = "150px";
                show_count.style.fontSize = "24px";

                let count = 0;
                button.addEventListener("click", ()=>{
                    count++;
                    show_count.textContent = count;
                });

                    button_minus.addEventListener("click", ()=>{
                    count-=5;
                    show_count.textContent = count;
                    });


                    //appendchild to counter box
                    let div_counter = document.createElement("div");
                    div_counter.textContent = "Counter";
                    div_counter.style.color = "black";
                    div_counter.style.fontSize = "14px";

                    show_count.appendChild(div_counter);