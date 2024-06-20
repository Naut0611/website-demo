document.addEventListener("DOMContentLoaded", function() {
    const text = "WE OPTIMIZE YOUR BUSINESS WITH PERSONALIZED SOFTWARE SOLUTIONS";
    let index = 0;
    const element = document.getElementById("dynamic-text");

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 30); // Adjust speed here
        }
    }

    type();
});
