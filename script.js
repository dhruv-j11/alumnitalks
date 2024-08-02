const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Hey, we're AlumniTalks";
    let index = 0;
    const speed = 200; // Speed in milliseconds
    
    function typeWriter() {
        if (index < text.length) {
            document.getElementById('typewriter').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            // After finishing typing, remove the cursor
            document.getElementById('cursor').style.display = 'none';
        }
    }
    
    typeWriter();
});
