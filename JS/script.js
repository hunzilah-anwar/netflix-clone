const slider = document.querySelector(".trending-slider");
const slides = document.querySelectorAll(".slider-div");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const slideWidth = slides[0].offsetWidth + 40; // card width + padding

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 4) {
    // show 4 at a time
    index++;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const addIcon = question.querySelector(".add-icon");
    const crossIcon = question.querySelector(".cross-icon");

    // Close all other FAQs first
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) {
        ans.style.display = "none";
        ans.previousElementSibling.querySelector(".add-icon").style.display =
          "block";
        ans.previousElementSibling.querySelector(".cross-icon").style.display =
          "none";
      }
    });

    // Toggle clicked FAQ
    if (answer.style.display === "block") {
      answer.style.display = "none";
      addIcon.style.display = "block";
      crossIcon.style.display = "none";
    } else {
      answer.style.display = "block";
      addIcon.style.display = "none";
      crossIcon.style.display = "block";
    }
  });
});

// JSON data for each slider card
// Get elements
const popup = document.getElementById("popup");
const popupInfo = document.getElementById("popup-info");
const closeBtn = document.getElementById("popup-close");

// JSON data
const movies = [
  {
    id: 1,
    year: "2024",
    rating: "18+",
    genres: ["Show", "Comedies", "Fantasy", "Mysteries"],
    description:
      "Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy.",
    popupImage: "./Assets/Images/popup-slide-1.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-1.jpg"
  },
  {
    id: 2,
    year: "2021",
    rating: "18+",
    genres: ["Thriller", "Drama", "Survival"],
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games — inside, a deadly survival game awaits.",
    popupImage: "./Assets/Images/popup-slide-2.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-2.jpg"
  },
  {
    id: 3,
    year: "2025",
    rating: "13+",
    genres: ["Movie","Thriller", "Drama", "Survival"],
    description:
      "Transferred to a small town in Rajasthan, an honest income tax officer pursues a beloved politician whose public good deeds conceal rampant corruption.",
    image: "Assets/Images/Slider-img-3.jpg",
    popupImage: "./Assets/Images/popup-slide-3.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-3.jpg"
  },
  {
    id: 4,
    year: "2025",
    rating: "18+",
    genres: ["Thriller", "Drama", "Survival"],
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    popupImage: "./Assets/Images/popup-slide-4.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-4.jpg"
  },
  {
    id: 5,
    year: "2025",
    rating: "18+",
    genres: ["Thriller", "Drama", "Survival"],
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    popupImage: "./Assets/Images/popup-slide-5.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-5.jpg"
  },
  {
    id: 6,
    year: "2025",
    rating: "13+",
    genres: ["Thriller", "Talk Shows", "Comedies", "Variety TV"],
    description:
      "Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast.",
    popupImage: "./Assets/Images/popup-slide-6.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-6.jpg"
  },
  {
    id: 7,
    cidClass: "cid-img",
    year: "2021",
    rating: "18+",
    genres: ["Thriller", "Drama", "Survival"],
    description:
      "A team of dedicated men and women in the Crime Investigation Department will risk everything to solve Mumbai's toughest, most complicated crimes.",
    popupImage: "./Assets/Images/popup-slide-7.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-7.jpg"
  },
  {
    id: 8,
    year: "2023",
    rating: "18+",
    genres: ["Show", "Drama", "Romance"],
    description:
      "A woman's daring sexual past collides with her married-with-kids present when the bad-boy ex she can't stop fantasizing about crashes back into her life.",
    popupImage: "./Assets/Images/popup-slide-8.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-8.jpg"
  },
  {
    id: 9,
    year: "2021",
    rating: "18+",
    genres: ["Thriller", "Show"],
    description:
      "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    popupImage: "./Assets/Images/popup-slide-9.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-9.jpg"
  },
  {
    id: 10,
    year: "2025",
    rating: "16+",
    genres: ["Movies", "Comedies", "Dramas"],
    description:
      "When serial killer Carl Bhojraj escapes prison and resurfaces in Mumbai, the determined Inspector Zende steps up to nab the cunning fugitive once more.",
    popupImage: "./Assets/Images/popup-slide-10.jpg",
    popupImageName: "./Assets/Images/popup-slide-name-10.jpg"
  }
];

// Add event listeners to slider cards
document.querySelectorAll(".slider-div").forEach((card, index) => {
  card.addEventListener("click", () => {
    openPopup(movies[index]); // fetch JSON by index
  });
});

// Open popup with JSON data
function openPopup(movie) {
  popupInfo.innerHTML = `
      <div class="popup-opacity"></div>
      <div id="popup-image" style="background-image:url('${movie.popupImage}');"></div>
      <div class="popup-detail">
          <img src="${movie.popupImageName}" class="${movie.cidClass}">
        <div class="popup-tags">
          <span>${movie.year}</span>
          <span>${movie.rating}</span>
          ${movie.genres.map((g) => `<span>${g}</span>`).join("")}
        </div>
        <p>${movie.description}</p>
        <a href="#"><button class="btn sigin-btn">Get Started <i class="fa-solid fa-angle-right"></i></button></a>
      </div>
  `;
  popup.classList.add("show");
}

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
  }
});
