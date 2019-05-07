const makeJournalEntryComponent = (date, concepts, entry, mood) => {
  return `<h2>${date}</h2>
    <h3>${concepts}</h3>
    <p>${entry}</p>
    <p>${mood}</p>`;
};
