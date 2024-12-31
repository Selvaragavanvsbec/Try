document.addEventListener('DOMContentLoaded', () => {
    const greetings = ["வணக்கம்", "नमस्ते", "ನಮಸ್ಕಾರ", "ഹലോ", "Bonjour", "హలో", "Hello"];
    const greetingText = document.getElementById('greeting-text');
    const greetingContainer = document.getElementById('greeting-container');
    const portfolioHeader = document.getElementById('portfolio-header');
  
    let index = 0;
  
    const showGreeting = () => {
      if (index < greetings.length) {
        greetingText.textContent = greetings[index];
        index++;
        setTimeout(showGreeting, 260);
      } else {
        greetingContainer.style.display = 'none';
        document.querySelectorAll('.hidden').forEach(element => {
          element.style.display = 'block';
        });
      }
    };
  
    showGreeting();
  });
  document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
      box.style.backgroundColor = "black";
      box.style.color = "#fff";
    });
  });
  