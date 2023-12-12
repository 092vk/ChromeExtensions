document.addEventListener('DOMContentLoaded', function () {
    // Calculate the time remaining until the new year
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    const timeRemaining = newYear - now;
  
    // Update the countdown every second
    function updateCountdown() {
      const seconds = Math.floor(timeRemaining / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
  
      document.getElementById('countdown').innerText = `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
    }
  
    // Initial update
    updateCountdown();
  
    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    
  });
  