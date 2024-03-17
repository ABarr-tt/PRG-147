/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

// List
const moviesBooksGames = ['Dune', 'Between Two Fires', 'Starsector', '', 'Book 2'];
const listParagraph = document.getElementById('list');
listParagraph.textContent = moviesBooksGames.join(', ');

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

// Sets
const set1Paragraph = document.getElementById('set1');
const set2Paragraph = document.getElementById('set2');

const songSet = new Set(['Sound of Perseverance', 'Strife', 'Slaughter of the Soul', 'Clayman', 'Death']);
set1Paragraph.textContent = Array.from(songSet).join(', ');

// Adding two more songs to the set
songSet.add('Voice of the Soul');
songSet.add('Leprocy');
set2Paragraph.textContent = Array.from(songSet).join(', ');

// Maps
const map1Paragraph = document.getElementById('map1');
const map2Paragraph = document.getElementById('map2');
const map3Paragraph = document.getElementById('map3');

const emailMap = new Map([
    ['Stacy', 'Stacy@example.com'],
    ['John', 'John@example.com'],
    ['LeBron', 'LeBron@example.com'],
    ['Joao', 'Joao@example.com'],
    ['Naomi', 'Naomi@example.com']
]);

// Display contents of the map using forEach() method
map1Paragraph.textContent = '';
emailMap.forEach((value, key) => {
    map1Paragraph.textContent += `${key}: ${value}\n`;
});

// Adding two new names and emails
emailMap.set('Muaddib', 'Muaddib@example.com');
emailMap.set('Mercedes', 'Mercedes@example.com');

// Display contents of the map using forEach() method
map2Paragraph.textContent = '';
emailMap.forEach((value, key) => {
    map2Paragraph.textContent += `${key}: ${value}\n`;
});

// Getting and displaying the email of one person
const personName = 'LeBron';
const email = emailMap.get(personName);
map3Paragraph.textContent = `${personName}'s email: ${email}`;
