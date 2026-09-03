const TRACKING_CONFIG = {
    radius: 220,
    easing: 0.045,
    maximumForce: 32,
    minimumDistance: 5
};

document.addEventListener('DOMContentLoaded', () => {
    const buttons = [...document.querySelectorAll('.love-button')].map(element => ({
        element,
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    }));

    if (!buttons.length) return;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', event => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    const animate = () => {
        buttons.forEach(button => {
            const rectangle = button.element.getBoundingClientRect();
            const centerX = rectangle.left + rectangle.width / 2;
            const centerY = rectangle.top + rectangle.height / 2;
            const distance = Math.hypot(mouseX - centerX, mouseY - centerY);

            if (distance < TRACKING_CONFIG.radius && distance > TRACKING_CONFIG.minimumDistance) {
                const angle = Math.atan2(centerY - mouseY, centerX - mouseX);
                const force = (1 - distance / TRACKING_CONFIG.radius) * TRACKING_CONFIG.maximumForce;
                button.targetX = Math.cos(angle) * force;
                button.targetY = Math.sin(angle) * force;
            } else {
                button.targetX = 0;
                button.targetY = 0;
            }

            button.x += (button.targetX - button.x) * TRACKING_CONFIG.easing;
            button.y += (button.targetY - button.y) * TRACKING_CONFIG.easing;
            button.element.style.transform = `translate(${button.x}px, ${button.y}px)`;
        });

        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
});