// API Intl 
// DateTimeFormat: developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
// NumberFormat: developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

let date = new Date();

console.log(new Intl.DateTimeFormat('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' }).format(date)); // BCP 47
console.log(new Intl.DateTimeFormat('en-US').format(date)); // BCP 47

console.log(new Intl.NumberFormat('pt-BR').format(2.22));
console.log(new Intl.NumberFormat('en-US').format(2000.22));
console.log(new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3, currency: 'BRL', style: 'currency' }).format(2000));