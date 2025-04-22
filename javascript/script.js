document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("introImage");
    const video = document.getElementById("introVideo");

    // On click image → hide image, show and play video
    image.addEventListener("click", () => {
        image.style.display = "none";
        video.style.display = "block";
        video.play();
    });

    // After video ends → move to choosing.html
    video.addEventListener("ended", () => {
        window.location.href = "../html/choosing.html";
    });
});
