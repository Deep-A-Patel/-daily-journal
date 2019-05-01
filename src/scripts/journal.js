console.log("What's Up");

/////////////////////////////////// Daily Journal-4 ///////////////////////////////////
const jEntry = document.querySelector(".jEntry");

fetch("http://localhost:3000/entries")
  .then(function(response) {
    return response.json();
  })
  .then(function(journalData) {
    journalData.forEach(journal => {
      jEntry.innerHTML += `
            <h2>${journal.date}</h2>
            <h3>${journal.concepts}</h3>
            <p>${journal.entry}</p>
            <p>${journal.mood}</p>
            `;
    });
  });

///////////////////////////////// Daily Journal-5 /////////////////////////////////

// Main application logic that uses the functions and objects
// defined in the other JavaScript files.

// Change the fake variable names below to what they should be
// to get the data and display it.

//objtWithGetterMethod.methodToGetData().then(functionThatRendersData);ec
