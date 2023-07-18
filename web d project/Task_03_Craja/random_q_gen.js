document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    // Define your quotes
    const quotes = [
      'The only way to do great work is to love what you do. - Steve Jobs',
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
      'Believe you can and you\'re halfway there. - Theodore Roosevelt',
      'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
      'In the middle of every difficulty lies opportunity. - Albert Einstein',
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
      'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
      'The best way to predict the future is to create it. - Peter Drucker'
    ];
  
    // Generate a random quote
    function generateRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      quoteElement.textContent = randomQuote;
    }
  
    // Generate a new quote on button click
    newQuoteButton.addEventListener('click', generateRandomQuote);
  
    // Initial quote generation
    generateRandomQuote();
  });
  