document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("introImage");
    const video = document.getElementById("introVideo");

    image.addEventListener("click", () => {
        image.style.display = "none";
        video.style.display = "block";
        video.play();
    });

    video.addEventListener("ended", () => {
        window.location.href = "/noel_portfolio/Html/choosing.html";
    });
});
