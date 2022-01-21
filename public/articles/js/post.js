fetch("../footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

// highlight.js
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.code').forEach((snippet) => {
    hljs.highlightElement(snippet);
  });
});

const pageURL = window.location.href;
const pageTitle = document.title;
const pageDesc = document.querySelector("meta[name='description'" ).getAttribute("content");
console.log(pageDesc);

const shareData = {
  title: `jarednewnam.com | ${pageTitle}`,
  text: pageDesc,
  url: pageURL
};

const shareLinks = document.querySelector(".fa-share-alt");

shareLinks.addEventListener('click', async () => {
  navigator.share(shareData);
});

//word counter
(function countWords() {
  let allText = document.querySelectorAll(".post p");
  let count = 0;

  for (var i = 0; i < allText.length; i++) {
    count += allText[i].innerHTML.split(" ").length;
  }
  let wordsCounted = count;
  let wpm = 225;
  let readTime = (wordsCounted/wpm).toFixed(0);
  wordCount.textContent = `${readTime} minute read`;  
})();

