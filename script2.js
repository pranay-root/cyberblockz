document.addEventListener("DOMContentLoaded", () => {
    const videoForm = document.getElementById("videoForm");
    const videoList = document.getElementById("videoList");

    videoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const link = document.getElementById("link").value;

        if (title.trim() === "" || link.trim() === "") {
            alert("Please fill out all fields.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
        videoList.appendChild(listItem);

        videoForm.reset();
    });
});
