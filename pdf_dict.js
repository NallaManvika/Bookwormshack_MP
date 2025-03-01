// Load the dictionary.json file
fetch('dictionary1.json')
    .then(response => response.json())
    .then(dictionary => {
        // Add event listener for text selection
        document.addEventListener('mouseup', function() {
            const selectedText = window.getSelection().toString().trim();

            // If text is selected, look up its definition
            if (selectedText) {
                const definition = dictionary[selectedText];
                if (definition) {
                    displayDefinition(selectedText, definition);
                } else {
                    clearDefinition();
                }
            }
        });
    })
    .catch(error => console.error('Error loading dictionary:', error));

// Function to display the definition of the selected word
function displayDefinition(word, definition) {
    const definitionDisplay = document.getElementById('definition');
    definitionDisplay.innerHTML = `<strong>${word}:</strong> ${definition}`;
}

// Function to clear the definition display
function clearDefinition() {
    const definitionDisplay = document.getElementById('definition');
    definitionDisplay.innerHTML = '';
}
