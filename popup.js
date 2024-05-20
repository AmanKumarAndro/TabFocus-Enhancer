let originalTitle = document.title; 

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
        console.log("Tab is active.");
        document.title = originalTitle; 
        document.querySelector(".video-stream")?.play(); 
    } else {
        console.log("Tab is not active.");
        document.title = "Come back Andro - " + originalTitle; 
        document.querySelector(".video-stream")?.pause();
    }
});
