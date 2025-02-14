// Play romantic background music when the last page is displayed
function playMusic() {
    const music = document.getElementById("background-music");
    if (music) {
        music.play();
    }
}
function playMusic() {
    const music = document.getElementById('background-music');
    music.play().catch(error => {
        console.log("User interaction required to play music:", error);
    });
}

// Replace the "See the Surprise" button's action
document.querySelector('button[onclick="location.href=\'music_player.html\'"]').onclick = goToSurprisePage;

// const audioElement = document.getElementById('surpriseSong');
// if (audioElement) {
//     audioElement.onended = function () {
//         goToNextPage('page3');
//     };
// Event listener to play music on page5
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === '#page5') {
        playMusic();
    }
});


    function goToSurprisePage() {
        goToNextPage('pageSurprise'); // Navigate to "Surprise" page
    }

    function playSurpriseSong() {
        const audioElement = document.getElementById('surpriseSong');
        audioElement.play().catch((error) => {
            console.error("Autoplay blocked:", error);
        });

        // Automatically navigate to the next page when the song ends
        audioElement.addEventListener('ended', function () {
            goToNextPage('page3'); // Navigate to the next page after the song
        });

        // Hide the play button once the song starts
        document.getElementById('playSongButton').style.display = 'none';
    }

    // Replace the "See the Surprise" button's action to navigate to the surprise page
    document.querySelector('button[onclick="location.href=\'music_player.html\'"]').onclick = goToSurprisePage;
