function hello(){
    let e = document.getElementById("btn");

    document.getElementById("ques").innerHTML = "My name is Sam";

    e.addEventListener("click", function() {e.textContent = "Button clicked!";});

    e.addEventListener("mouseenter", function() {
        e.style.fontSize = "16px";
      });
      
      e.addEventListener("mouseleave", function() {
        e.style.fontSize = "";
      });

    e.addEventListener("click", function() {
    if (e.style.backgroundColor === "red") {
        e.style.backgroundColor = "";
    } else {
        e.style.backgroundColor = "red";
    }
    });

    e.addEventListener("mouseenter", function() {
        if (e.style.backgroundColor === "blue") {
            e.style.backgroundColor = "";
        } else {
            e.style.backgroundColor = "blue";
        }
        });

    e.addEventListener("mouseenter", function() {
        e.style.color = "blue";
    });
      
      e.addEventListener("mouseleave", function() {
        e.style.color = "";
    });

    e.addEventListener("click", function() {
        e.style.fontSize = "24px";
    }); 

    e.addEventListener("click", myFunction);
    e.addEventListener("mouseover", myFunction);
    e.addEventListener("mouseout", myFunction2);

}



function myFunction() {
  document.getElementById("demo").innerHTML += "clicked ";
  document.getElementById("demo").innerHTML += "Moused over!<br>"
}

function myFunction2() {
    document.getElementById("demo").innerHTML += "Moused out!<br>"
  }
