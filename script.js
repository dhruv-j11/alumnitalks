const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Hey, we're AlumniTalks";
    const speed = 200; // Speed in milliseconds
    let index = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const textElement = document.getElementById('typewriter');
        if (isDeleting) {
            textElement.innerHTML = text.substring(0, index--);
            if (index < 0) {
                isDeleting = false;
                setTimeout(typeWriter, 3000); // Delay before starting to type again
            } else {
                setTimeout(typeWriter, speed / 2); // Speed while deleting
            }
        } else {
            textElement.innerHTML = text.substring(0, index++);
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeWriter, 10000); // Delay before starting to delete
            } else {
                setTimeout(typeWriter, speed); // Speed while typing
            }
        }
    }
    
    typeWriter();
});
