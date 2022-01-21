//articles
const author = 'jared l newnam';
const blogArticles = [{
    date: "11/24/2021",
    title: "the querySelectorAll DOM API",
    minutesToRead: 10,
    tags: ["javascript", "html"],
    image: "https://placekitten.com/1600/900",
    altText: "image of kittens",
    teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod",
    url: "articles/brief-introduction-to-queryselectorall.html"
  },
  {
    date: "11/24/2021",
    title: "the difference between named and anonymous functions",
    minutesToRead: 10,
    tags: ["javascript", "html"],
    image: "https://placekitten.com/1601/900",
    altText: "image of kittens",
    teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod",
    url: "articles/brief-introduction-to-queryselectorall.html"
  },
  {
    date: "11/24/2021",
    title: "css animations explained",
    minutesToRead: 10,
    tags: ["javascript", "html"],
    image: "https://placekitten.com/1602/900",
    altText: "image of kittens",
    teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod",
    url: "articles/brief-introduction-to-queryselectorall.html"
  }
];

function blogArticlesTemplate(articles, i) {
  return `
    <div class="tease-post">
      <div class="tease-post__container">
        <h5 class="tease-post__meta">
        <span class="tease-post__meta--author">${author}</span>
          <span class="tease-post__meta--date">${articles.date}</span>
        </h5>
        <h2 class="tease-post__title"><a href="${articles.url}">${articles.title}</a></h2>
        <div class="tease-post__details">
          <h4><i class="fa fa-clock"></i> ${articles.minutesToRead} minute read</h4>
          <h4><i class="fa fa-tag"></i> ${articles.tags}</h4>
          <h4 class="share" data-article="${i}"><i class="fa fa-share-alt"></i> Share</h4>
        </div>
        <hr>
        <img class="tease-post__img" src="${articles.image}" alt="${articles.altText}">
        <div class="tease-post__text">
          <p>${articles.teaser}</p>

          <a href="//${articles.url}" class="tease-post__more">[read more]</a>
        </div>      
      </div>
    </div>    
  `;
}

// `insertAdjacentHTML` is generally faster than using `.innerHTML`, as it doesn't need to tear down the old child-nodes of the container.
const blogTeasterListElem = document.getElementById("blogTeaserList");
blogTeasterListElem.insertAdjacentHTML(
  "beforeend",
  blogArticles.map(blogArticlesTemplate).join("")
);

if ("share" in navigator) {
  blogTeasterListElem.addEventListener("click", (e) => {
    const clickedItem = e.target;
    if (clickedItem.matches(".share")) {
      const idx = Number(clickedItem.dataset.article);
      navigator
        .share({
          title: blogArticles[idx].title,
          url: blogArticles[idx].url,
          text: 'shared from jarednewnam.com',
        })
        .then(() => {
          console.log("Shared");
        })
        .catch(console.error);
    }
  });
} else {
  document.querySelectorAll(".share").forEach((shareButton) => {
    shareButton.style.display = "none";
  });
}