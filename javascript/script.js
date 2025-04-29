document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("introImage");
    const video = document.getElementById("introVideo");

    image.addEventListener("click", () => {
        image.style.display = "none";
        video.style.display = "block";
        video.play();
    });

    video.addEventListener("ended", (event) => {
        // UPDATED HREF.
        let href = window.location.href.replace("index.html", "") + "/html/choosing.html";
        window.location.href = href;
    });
});
