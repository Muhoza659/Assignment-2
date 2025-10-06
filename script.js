// Exercise 1

let myText = document.getElementById("myText");
let button = document.getElementById("changeBtn");
button.addEventListener("click", () => {
 myText.textContent = myText.textContent === "Hello" ?  "Goodbye": "Hello";
 button. style.backgroundColor=button. style.backgroundColor==="white"? "red":"white";
});

 // Exercise 2

let box = document.getElementById("styleBox");

  box.addEventListener("click", () => {
  box.style.backgroundColor = box.style.backgroundColor === "lightyellow" ? "lightcoral" : "lightyellow";
  box.style.fontSize = box.style.fontSize === "20px" ? "24px" : "20px";
});
let body =document.getElementById("Rn")
body.style.backgroundColor =  "lightgreen";

  // Exercise 3

 let item1 = document.getElementById("item1");
 let item2 = document.getElementById("item2");
 let item3 = document.getElementById("item3");

   item1.onclick = () => {
    item1.classList.add("highlight");
    item2.classList.remove("highlight");
    item3.classList.remove("highlight");
  };

   item2.onclick = () => {
    item2.classList.add("highlight");
    item1.classList.remove("highlight");
    item3.classList.remove("highlight");
  };

   item3.onclick = () => {
    item3.classList.add("highlight");
    item1.classList.remove("highlight");
    item2.classList.remove("highlight");
  };

  // Exercise 4

 let list = document.getElementById("myList");
 let input = document.getElementById("newItemText");
 let addBtn = document.getElementById("addBtn");

 addBtn.onclick = () => {
    let newItem = document.createElement("li");
        newItem.textContent = input.value + " ";  
    let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => list.removeChild(newItem);
        newItem.appendChild(removeBtn);
        list.appendChild(newItem);
         input.value = "";
  };

    // Exercise 5
  let myItems = document.getElementById("myItems");

  let item4 = document.getElementById("item4");
  let item5 = document.getElementById("item5");
  let item6 = document.getElementById("item6");

  let delete1 = document.getElementById("delete1");
  let delete2 = document.getElementById("delete2");
  let delete3 = document.getElementById("delete3");

  
  delete1.onclick = () => confirm("Do you want to delete Clothes?") && myItems.removeChild(item4);
  delete2.onclick = () => confirm("Do you want to delete Shoes?") && myItems.removeChild(item5);
  delete3.onclick = () => confirm("Do you want to delete Bags?") && myItems.removeChild(item6);

    // Exercise 6
  let Btn = document.getElementById("Btn");
  let hoverText = document.getElementById("hoverText");
  let keyInput = document.getElementById("keyInput");
  let message = document.getElementById("message");
  let drawArea = document.getElementById("drawArea");

   Btn.addEventListener("click", () => message.textContent = "Button was clicked!");
   hoverText.addEventListener("mouseover", () => message.textContent = "Mouse is over the text!");
   keyInput.addEventListener("keydown", (event) => message.textContent = "You pressed: " + event.key);

   drawArea.style.width = "300px";
   drawArea.style.height = "200px";
   drawArea.style.border = "2px solid black";
   drawArea.style.position = "relative";

   drawArea.addEventListener("mousemove", (event) => {
    let dot = document.createElement("div");
    dot.style.width = "6px";
    dot.style.height = "6px";
    dot.style.backgroundColor = "black";
    dot.style.borderRadius = "50%";
    dot.style.position = "absolute";
    dot.style.left = event.offsetX + "px";
    dot.style.top = event.offsetY + "px";
    drawArea.appendChild(dot);
  });
   
    // Exercise 7
      let boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            box.addEventListener('click', function(event) {
                event.stopPropagation();
         boxes.forEach(box => box.classList.remove('highlight'));
            box.classList.add('highlight');
              // Highlight parent (if exists)
                box.parentElement?.classList.add('highlight');

                // Highlight next sibling (if exists)
                box.nextElementSibling?.classList.add('highlight');

                // Bonus: highlight all ancestors
                let ancestor = box.parentElement;
                while(ancestor?.classList.contains('box')) {
                    ancestor.classList.add('highlight');
                    ancestor = ancestor.parentElement;
                }
            });
        });

               
              

   // Exercise 8
   let form = document.getElementById('myForm');
   let output = document.getElementById('output');
   let error = document.getElementById('error');

   form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();

    
    if(!name || !age) {
        error.textContent = "Please fill in all fields!";
        return;
    } 
    if(isNaN(age) || age <= 0) {
        error.textContent = "Please enter a valid age!";
        return;
    }

    error.textContent = ""; 

    
    output.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                        <p><strong>Age:</strong> ${age}</p>`;

    form.reset();  
});

   // Exercise 9

    let container = document.getElementById("container");
    let searchInput = document.getElementById("search");

   // Fetch data
   fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    displayUsers(data);

    // Search filter
     searchInput.addEventListener("input", () => {
      let searchTerm = searchInput.value.toLowerCase();
      let filtered = data.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
      );
      displayUsers(filtered);
    });
   })
  .catch(error => {
    console.error("Error fetching data:", error);
    container.innerHTML = "<li>Failed to load data.</li>";
  });
  // Display users
function displayUsers(users) {
  container.innerHTML = "";
  users.length &&
    users.forEach(user => {
      let li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      container.appendChild(li);
    });
 }

// Exercise 10
let bx = document.getElementById("box");

bx.addEventListener("click", () => {
  // Toggle animation styles
  bx.style.width = bx.style.width === "200px" ? "100px" : "200px";
  bx.style.height = bx.style.height === "200px" ? "100px" : "200px";
  bx.style.backgroundColor = bx.style.backgroundColor === "lightblue" ? "coral" : "lightblue";
});
let canvas = document.getElementById("ballCanvas");
let ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let dx = 2; // horizontal speed
let dy = 2; // vertical speed
const radius = 15;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();

  // Bounce off edges
  if (x + radius > canvas.width || x - radius < 0) dx = -dx;
  if (y + radius > canvas.height || y - radius < 0) dy = -dy;

  x += dx;
  y += dy;

  requestAnimationFrame(drawBall);
}

// Start animation
drawBall();
    
 



    
