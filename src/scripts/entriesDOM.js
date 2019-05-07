const jEntry = document.querySelector(".jEntry");
const journalDomEntry = getJournalEntries().then(entries => {
  entries.forEach(journal => {
    jEntry.innerHTML += makeJournalEntryComponent(
      journal.date,
      journal.concepts,
      journal.entry,
      journal.mood
    );
  });
});
