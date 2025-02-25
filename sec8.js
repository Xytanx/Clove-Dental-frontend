const blogLinks = document.querySelectorAll(".blog-link");
const blogContentContainers = document.querySelectorAll(".blog-content");

const articleContainer = document.querySelector(".article-container");

let currentKey = "General Dentistry";

const blogLinksArray = [
  "General Dentistry",
  "Cosmic Dentistry",
  "Crowns & Bridges",
  "Nutrition",
  "Oral Surgery",
  "Root Canal",
  "Implants & Dentures",
];

blogLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const key = link.getAttribute("data-key");
    if (key !== currentKey) {
      renderBlog(key);
    }
  });
});

function renderBlog(key) {
  const currentIndex = blogLinksArray.indexOf(currentKey);
  const newIndex = blogLinksArray.indexOf(key);

  const translateXValue =
    currentIndex > newIndex ? -100 * newIndex : -100 * newIndex;
  articleContainer.style.transform = `translateX(${translateXValue}%)`;

  const oldContainer = document.querySelector(".activeSlide");
  const newContainer = document.getElementById(`${newIndex}`);
  oldContainer.classList.remove(".activeSlide");
  newContainer.classList.add("activeSlide");
  currentKey = key;
  updateActiveLink(key);
}

function updateActiveLink(key) {
  blogLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-key") === key) {
      link.classList.add("active");
    }
  });
}
