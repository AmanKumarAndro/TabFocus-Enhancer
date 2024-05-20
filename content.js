let originalTitle = document.title; // Store the original title

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
        console.log("Tab is active.");
        document.title = originalTitle; // Restore the original title
        document.querySelector(".video-stream")?.play(); // Optional chaining to avoid errors
    } else {
        console.log("Tab is not active.");
        document.title = "Come back Andro - " + originalTitle; // Append to the title
        document.querySelector(".video-stream")?.pause(); // Optional chaining to avoid errors
    }
});
