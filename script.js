// Function to generate and display a random compliment
function generateCompliment() {
    // Get the user's name
    const userName = document.getElementById("nameInput").value;

    // List of compliments
    const compliments = [
        "you are an amazing problem solver!",
        "your creativity knows no bounds!",
        "you bring out the best in others!",
        "you have a fantastic sense of humor!",
        "your positivity is contagious!",
        "you are a natural leader!",
        "you make learning fun and exciting!",
        "you have an incredible attention to detail!"
    ];

    // Select a random compliment
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[randomIndex];

    // Create the final message
    const message = userName ? `${userName}, ${randomCompliment}` : `Hey there, ${randomCompliment}`;

    // Update the output section
    document.getElementById("displayMessage").textContent = message;
}

// Attach event listener to the button
document.querySelector("button").addEventListener("click", generateCompliment);
