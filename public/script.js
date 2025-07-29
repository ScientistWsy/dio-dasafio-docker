document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('interactiveBtn');
    
    button.addEventListener('click', function() {
        alert('Você clicou no botão! Esta interação foi feita com JavaScript.');
        
        const colors = ['#f4f4f4', '#e6f7ff', '#fff2e6', '#f0fff0', '#f9f0ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
