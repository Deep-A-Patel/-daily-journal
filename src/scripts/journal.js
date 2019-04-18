
const jEntry = document.querySelector(".jEntry");

fetch("http://localhost:3000/entries")
    .then(function(response) {
        
        return response.json()
    })
    .then(function(journalData) {
        
        journalData.forEach(journal => {
            jEntry.innerHTML += `
            <h2>${journal.date}</h2>
            <h3>${journal.concepts}</h3>
            <p>${journal.entry}</p>
            <p>${journal.mood}</p> 
            `
        });
    })
