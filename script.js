document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        // Pausar otros videos al reproducir uno nuevo
        video.addEventListener("play", function() {
            videos.forEach(v => {
                if (v !== video && !v.paused) {
                    v.pause(); // Pausar otros videos que se estén reproduciendo
                }
            });
        });

        // Reproducir video seleccionado y controlar el estado de los controles
        video.addEventListener("click", function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    const videoInfos = document.querySelectorAll(".video-info");

    videoInfos.forEach(info => {
        const title = info.querySelector("h2");
        const description = info.querySelector("p");

        // Limitar caracteres para el título y la descripción
        const maxTitleLength = 20; // Máximo de caracteres para el título
        const maxDescriptionLength = 40; // Máximo de caracteres para la descripción

        if (title.innerText.length > maxTitleLength) {
            title.innerText = title.innerText.substring(0, maxTitleLength) + '...';
        }

        if (description.innerText.length > maxDescriptionLength) {
            description.innerText = description.innerText.substring(0, maxDescriptionLength) + '...';
        }
    });
});