document.addEventListener("DOMContentLoaded", function() {
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