document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");
    const track = document.querySelector('.blogs-container');
    const nextButton = document.querySelector('.blogs-btn.next-btn');
    const prevButton = document.querySelector('.blogs-btn.prev-btn');
    const cards = document.querySelectorAll('.blog-card');
    let index = 0;

    nextButton.addEventListener('click', () => {
        if (index < track.children.length - 1) {
            index++;
            track.style.transform = `translateX(-${index * 255}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * 255}px)`;
        }
    });

    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let isDragging = false;
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // 20 = gap

    // Prevent default image drag
    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => e.preventDefault());
    });

    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        animationID = requestAnimationFrame(animation);
    });

    track.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        currentTranslate = prevTranslate + currentX - startX;
    });

    track.addEventListener("touchend", () => {
        isDragging = false;
        cancelAnimationFrame(animationID);

        // Snap to nearest card
        const snapIndex = Math.round(-currentTranslate / cardWidth);
        const maxIndex = cards.length - 1;
        const finalIndex = Math.min(Math.max(snapIndex, 0), maxIndex);

        currentTranslate = -finalIndex * cardWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    });

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition() {
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    track.addEventListener("mousedown", (e) => {
        startX = e.clientX;
        isDragging = true;
        animationID = requestAnimationFrame(animation);
    });

    track.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        currentTranslate = prevTranslate + currentX - startX;
    });

    track.addEventListener("mouseup", () => {
        isDragging = false;
        cancelAnimationFrame(animationID);
        // same snap logic here
        const snapIndex = Math.round(-currentTranslate / cardWidth);
        const maxIndex = cards.length - 1;
        const finalIndex = Math.min(Math.max(snapIndex, 0), maxIndex);

        currentTranslate = -finalIndex * cardWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    });

    const navItems = document.querySelectorAll("nav ul li");
    navItems.forEach(item => {
        item.querySelector("a").addEventListener('click',
            function() {
                navItems.forEach(navItem => navItem.querySelector("a").classList.remove('active'));
                this.classList.add('active');
            });
    });
});
