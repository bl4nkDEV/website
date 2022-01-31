let text = "Hi, I'm TheJacob";
let speed = 80;
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("type").innerHTML += text.charAt(i);
        i++;
        if (i === 3 || i === 7) {
            setTimeout(typing, speed * 5)
        } else {
            setTimeout(typing, speed)
        }
    } else {
        smallTyping()
    }
}
typing()

let description = "I'm a Unity developer.$ #I love to create games. I know CSharp and C++.$ I'm currently helping out with Project Three at Milltower Studio and we have big plans with it.##$$Stay tuned!";
let speed2 = 20;
let j = 0;
function smallTyping() {
    if (j < description.length) {
        document.getElementById("desc").innerHTML += description.charAt(j).replace("#", "<br>").replace(/\$/g, "");
        j++;
        if (description.charAt(j - 1) == "$") {
            setTimeout(smallTyping, speed2 * 20)
        } else {
            setTimeout(smallTyping, speed2)
        }
    } else {
        document.querySelector(".social").style.opacity = "0.7";
    }
}