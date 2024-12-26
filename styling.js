// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked

function changeColor() {
    const box = document.getElementById("box");
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    document.getElementById("output").innerText = `Box color changed to: ${randomColor}`;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements
  
function toggleBox() {
    const hiddenBox = document.getElementById("hiddenBox");
    if (hiddenBox.style.display === "none") {
      hiddenBox.style.display = "block";
    } else {
      hiddenBox.style.display = "none";
    }
}

function myFunction() {
    document.getElementById("popUpMessage").innerHTML = "Have a blessed day! 🌹";
}

function changeSize() {
    const box = document.getElementById("box");
    const newWidth = Math.floor(Math.random() * 300) + 200;
    const newHeight = Math.floor(Math.random() * 300) + 200;
    box.style.width = newWidth + 'px';
    box.style.height = newHeight + 'px';
    document.getElementById("output").innerText = `Box resized to: ${newWidth}px by ${newHeight}px`;
}

const toggleButton = document.getElementById("toggleButton");
const changeSizeButton = document.getElementById("changeSizeButton");
const box = document.getElementById("box");
const heading = document.getElementById("heading");

toggleButton.onmouseover = function() {
    this.style.backgroundColor = "red";
};

changeSizeButton.onmouseover = function() {
    this.style.backgroundColor = "magenta";
};

box.onmouseover = function() {
    this.style.backgroundColor = "lightcoral";
};

heading.onmouseover = function() {
    this.style.color = "lightcoral";
    this.style.fontSize = "50px"
};

toggleButton.onmouseout = function() {
    this.style.backgroundColor = "";
};

changeSizeButton.onmouseout = function() {
    this.style.backgroundColor = "";
};

box.onmouseout = function() {
    this.style.backgroundColor = "";
};

heading.onmouseout = function() {
    this.style.color = "";
};