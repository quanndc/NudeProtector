var data = "";
var visitorId = "";

const api = "https://nsfw-filter.app.runwayclub.dev/?url=";
// const api2 = "https://openfpcdn.io/fingerprintjs/v4";
let processedUrl = [];

// query all images
var images = document.querySelectorAll("img");

countCensored = 0;
countUncensored = 0;

// script = document.createElement("script");
// script.src = "https://unpkg.com/fingerprintjs@0.5.3/fingerprint.js";
// document.body.appendChild(script);

// var fpPromise = FingerprintJS.load()

// // Analyze the visitor when necessary.
// fpPromise
//   .then(fp => fp.get())
//   .then(result => console.log(result.visitorId))
// Initialize the agent at application startup.

// remove image if images[i].src is in processedUrl
window.onload = (async () => {
  document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });

  images.forEach((img) => {
    data = img.src.toString();
  });
  let originalUrls = [];
  for (let i = 0; i < images.length; i++) {
    originalUrls.push(images[i].src);
    images[i].src =
      "https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif";
  }

  for (let i = 0; i < images.length; i++) {
    try {
      let img = images[i];
      img.crossOrigin = "";
      if (img.width === 0 || img.height === 0) {
        continue;
      }
      const canvas = new OffscreenCanvas(img.width, img.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      console.log(imageData);
      // object to array
      const data = Array.from(imageData.data);
      img.src =
        "https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif";
      let bodyJson = {};
      let cachedItem = window.localStorage.getItem(originalUrls[i]);
      if (cachedItem == null) {
        const res = await fetch(api + encodeURIComponent(originalUrls[i]), {
          method: "GET",
        });
        bodyJson = await res.json();
        console.log(bodyJson);
        window.localStorage.setItem(originalUrls[i], bodyJson["score"]);
      } else {
        bodyJson["score"] = cachedItem;
      }
      if (bodyJson["score"] > 0.1) {
        img.src = "https://i.imgur.com/FuWAXrf.png";
        countCensored++;
      } else {
        img.src = originalUrls[i];
        countUncensored++;
      }
    } catch (e) {
      images[i].src = originalUrls[i];
    }
    // replace css for img tag
    images[i].style = "filter: none;";
  }
  chrome.runtime.sendMessage({
    images: originalUrls,
    countCensored: countCensored,
    countUncensored: countUncensored,
    // visitorId: visitorId
  });
  countCensored = 0;
  countUncensored = 0;
})();
