// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Animasi fade in untuk cards
    const cards = document.querySelectorAll('.schedule-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Highlight hari ini
    const today = new Date().getDay();
    const dayMap = {
        1: 'senin',
        2: 'selasa',
        3: 'rabu',
        4: 'kamis',
        5: 'jumat',
        6: 'sabtu'
    };
    
    const todayName = dayMap[today];
    if (todayName) {
        const todayRows = document.querySelectorAll(`[data-day="${todayName}"]`);
        todayRows.forEach(row => {
            row.style.background = '#fff3cd';
            row.querySelectorAll('.cell').forEach(cell => {
                cell.style.background = '#fff3cd';
                cell.style.fontWeight = 'bold';
            });
        });
    }

    // Tambahkan waktu real-time
    updateClock();
    setInterval(updateClock, 1000);
});

function updateClock() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = now.toLocaleDateString('id-ID', options);
    
    let clockElement = document.querySelector('.clock');
    if (!clockElement) {
        clockElement = document.createElement('div');
        clockElement.className = 'clock';
        clockElement.style.cssText = 'text-align: center; color: white; font-size: 1.2em; margin-bottom: 20px; font-weight: bold;';
        document.querySelector('.container').insertBefore(clockElement, document.querySelector('header'));
    }
    clockElement.textContent = timeString;
}
