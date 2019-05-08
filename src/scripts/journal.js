let entryButton = document.querySelector(".journalRecordBtn");

entryButton.addEventListener("click", function() {
  event.preventDefault();

  const newJournalEntry = {
    date: document.getElementById("journalDate").value,
    concept: document.getElementById("conceptsCover").value,
    entry: document.getElementById("journalEntry").value,
    mood: document.getElementById("mood").value
  };

  console.log(newJournalEntry);
  fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  }).then(response => response.json());
});
