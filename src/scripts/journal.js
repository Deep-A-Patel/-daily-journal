const objectsJournalEnter = {
    date: "04/10/2019",
    Concepts: "html",
    entry: "I learned html today",
    mood: "happy"
};

const JournalEntry = [
    {
        date: "04/11/2019",
        concepts: "css",
        entry: "I learned css today",
        mood: "normal"  
    },
    {
        date: "04/12/2019",
        concepts: "javascripts",
        entry: "I learned javascripts today",
        mood: "sad" 
    },
    {
        date: "04/13/2019",
        concepts: "objects",
        entry: "I learned objects today",
        mood: "happy"   
    }
]

const journal = document.querySelector(".journal");

const makeJournalEntryComponent = (JournalEntry) => {

return `

    <h2>${JournalEntry.date}</h2>
    <h3>${JournalEntry.concepts}</h3>
    <p>${JournalEntry.entry}</p>
    <p>${JournalEntry.mood}</p> 
    
    `
}

const renderJournalEntries = (entries) => {
   entries.forEach(entry => {
       item = makeJournalEntryComponent(entry)
       journal.innerHTML += item
   });
}

renderJournalEntries(JournalEntry)
