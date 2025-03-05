// Function to generate and display a random compliment
function generateCompliment() {
    // Get the user's name
    const userName = document.getElementById("nameInput").value;

    // List of compliments
    const compliments = [
        "You are an amazing problem solver!",
        "Your creativity knows no bounds!",
        "You bring out the best in others!",
        "You have a fantastic sense of humor!",
        "Your positivity is contagious!",
        "You are a natural leader!",
        "You make learning fun and exciting!",
        "You have an incredible attention to detail!"
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
