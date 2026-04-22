// Main Data Structures: An Array of Objects representing  cafes in the catalog
const cafes = [
  {
    name: "Qahwah House",
    location: "Dearborn, MI",
    type: "Yemeni",
    rating: 4.8,
    image: "images/qahwah-house-main.jpg",
    gallery: [
      "images/qahwah-house-1.jpg",
      "images/qahwah-house-2.jpg",
      "images/qahwah-house-3.jpg",
    ],
    drink: "Adani Chai",
    vibe: "Elegant and calm, perfect for deep conversations and late-night tea.",
    description:
      "Qahwah House is known for its warm Yemeni atmosphere, rich flavors, and refined presentation. It is a great place for people looking for both comfort and tradition in one space.",
  },
  {
    name: "Haraz Coffee House",
    location: "Dearborn, MI",
    type: "Yemeni",
    rating: 4.7,
    image: "images/haraz-main.jpg",
    gallery: ["images/haraz-4.jpg", "images/haraz-2.jpg", "images/haraz-3.jpg"],
    drink: "Mufawar Coffee",
    vibe: "A social spot with modern energy and strong traditional influence.",
    description:
      "Haraz Coffee House blends Yemeni heritage with a modern café feel. It is popular for specialty drinks, stylish presentation, and a lively environment.",
  },
  {
    name: "Jabal Coffee House",
    location: "Dearborn, MI",
    type: "Yemeni",
    rating: 4.7,
    image: "images/jabal-main.jpg",
    gallery: ["images/jabal-1.jpg", "images/jabal-2.jpg", "images/jabal-3.jpg"],
    drink: "Jabal Latte",
    vibe: "Trendy and polished, especially good for a night out with friends.",
    description:
      "Jabal Coffee House stands out for its sleek interior, elevated drink menu, and contemporary Yemeni coffee culture. It has a strong social atmosphere and premium feel.",
  },
  {
    name: "Shibam Coffee",
    location: "Austin, Texas",
    type: "Yemeni",
    rating: 4.6,
    image: "images/shibam-main.jpg",
    gallery: [
      "images/shibam-1.jpg",
      "images/shibam-2.jpg",
      "images/shibam-3.jpg",
    ],
    drink: "Shibam Signature Coffee",
    vibe: "Cozy and relaxed, great for a quieter café experience.",
    description:
      "Shibam Coffee offers a comfortable setting with classic Yemeni-inspired drinks. It is a good choice for people looking for a calmer and more intimate café environment.",
  },
  {
    name: "Qimmah Coffee",
    location: "Austin, Texas",
    type: "Yemeni",
    rating: 4.6,
    image: "images/qimmah-main.jpg",
    gallery: [
      "images/qimmah-1.jpg",
      "images/qimmah-2.jpg",
      "images/qimmah-3.jpg",
    ],
    drink: "Qimmah Special",
    vibe: "Modern and premium, with a focus on clean aesthetics and presentation.",
    description:
      "Qimmah Coffee is known for its polished branding, premium coffee blends, and modern café identity. It appeals to customers looking for both flavor and presentation.",
  },
  {
    name: "Azal Coffee",
    location: "Dearborn, MI",
    type: "Arabic",
    rating: 4.5,
    image: "images/azal-main.jpg",
    gallery: ["images/azal-1.jpg", "images/azal-2.jpg", "images/azal-3.jpg"],
    drink: "Yemeni Mocha",
    vibe: "Traditional and heritage-centered, with a warm classic feel.",
    description:
      "Azal Coffee brings a more traditional Yemeni coffee identity to the Dearborn café scene. It highlights heritage flavors and a comforting atmosphere.",
  },
  {
    name: "Bayt Al Mocha",
    location: "Dearborn, MI",
    type: "Arabic",
    rating: 4.7,
    image: "images/bayt-al-mocha-main.jpg",
    gallery: [
      "images/bayt-al-mocha-1.jpg",
      "images/bayt-al-mocha-2.jpg",
      "images/bayt-al-mocha-3.jpg",
    ],
    drink: "Mocha Coffee",
    vibe: "Refined and elegant, ideal for people who enjoy a premium coffee outing.",
    description:
      "Bayt Al Mocha emphasizes elegance, authenticity, and elevated coffee presentation. Its atmosphere feels polished and intentional, making it a memorable café stop.",
  },
  {
    name: "Caspian Coast Coffee",
    location: "Santa Monica, CA",
    type: "American",
    rating: 4.6,
    image: "images/caspian-coast-main.jpg",
    gallery: [
      "images/caspian-coast-1.jpg",
      "images/caspian-coast-2.jpg",
      "images/caspian-coast-3.jpg",
    ],
    drink: "Honey Latte",
    vibe: "Bright and coastal, with a refreshing atmosphere perfect for a laid-back coffee break.",
    description:
      "Caspian Coast Coffee offers a relaxed beachside vibe with smooth specialty drinks and a clean, modern aesthetic. It is a great spot for people looking to enjoy coffee in a calm and refreshing environment.",
  },

  {
    name: "Gene's Cafe",
    location: "Santa Monica, CA",
    type: "American",
    rating: 4.5,
    image: "images/genes-cafe-main.jpg",
    gallery: [
      "images/genes-cafe-1.jpg",
      "images/genes-cafe-2.jpg",
      "images/genes-cafe-3.jpg",
    ],
    drink: "Iced Latte",
    vibe: "Casual and cozy, great for quick coffee stops or relaxed conversations.",
    description:
      "Gene’s Cafe offers a welcoming neighborhood feel with classic coffee options and friendly service. It is a simple and comfortable spot for locals and visitors alike.",
  },
];

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");
const totalCount = document.getElementById("total-count");
const locationCount = document.getElementById("location-count");
const avgRating = document.getElementById("avg-rating");
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-main-img");
const modalDescription = document.getElementById("modal-description");
const modalDrink = document.getElementById("modal-drink");
const modalRating = document.getElementById("modal-rating");
const modalLocation = document.getElementById("modal-location");
const modalVibe = document.getElementById("modal-vibe");
const closeModal = document.getElementById("close-modal");

// DATA OPERATIONS: apply search, filter, and sorting based on user input
function viewPreferences() {
  // Create a copy to avoid modifying original data
  let result = [...cafes];

  // Get user input values
  const searchValue = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;
  const sortValue = sortSelect.value;

  // search
  result = result.filter((cafe) =>
    cafe.name.toLowerCase().includes(searchValue),
  );

  // filter
  if (filterValue !== "all") {
    result = result.filter((cafe) => cafe.type === filterValue);
  }

  // sort
  if (sortValue === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }
  // RENDER updated data
  showCafes(result);
}

//Render: dispaly cafes dynamically based on the data and user preferences
function showCafes(cafeList) {
  const container = document.getElementById("card-container");
  const template = document.querySelector(".template-card");

  // Clear existing cafes before rendering new results
  container.innerHTML = "";

  cafeList.forEach((cafe) => {
    const card = template.cloneNode(true); // copy the cafe card template
    card.style.display = "block"; //Display cafes vertically

    // populate the card with cafe data
    card.querySelector(".card-title").textContent = cafe.name;

    const image = card.querySelector("img");
    image.src = cafe.image;
    image.alt = cafe.name;

    /// using template literals, insert cafe card template with cafedata
    card.querySelector(".card-location").textContent =
      `Location: ${cafe.location}`;
    card.querySelector(".card-type").textContent = `Type: ${cafe.type}`;
    card.querySelector(".card-rating").textContent = `Rating: ${cafe.rating}`;

    // Add dynamic badge based on rating
    const badge = card.querySelector(".card-badge");
    if (cafe.rating >= 4.7) {
      badge.textContent = "Top Rated";
    } else {
      badge.textContent = "Local Favorite";
    }

    card.addEventListener("click", () => {
      openModal(cafe);
    });

    // Add glow special styling for top-rated cafes
    if (cafe.rating >= 4.7) {
      card.classList.add("top-rated");
    }

    // add cafe  to the container
    container.appendChild(card);
  });
  // update stats for total, locations, rating
  updateStats(cafeList);

  //
}

// UI Feature: Display cafe details in a modal when cafe clicked
function openModal(cafe) {
  // populate modal with cafe details
  modalTitle.textContent = cafe.name;
  modalDescription.textContent = cafe.description;
  modalDrink.textContent = "☕ " + cafe.drink;
  modalRating.textContent = "⭐ " + cafe.rating;
  modalLocation.textContent = "📍 " + cafe.location;
  modalVibe.textContent = "✨ " + cafe.vibe;
  modalImg.src = cafe.image;

  const modalGallery = document.getElementById("modal-gallery");
  // reset modal gallery from the last modal opened, avoid rendering other cafe gallery
  modalGallery.innerHTML = "";

  cafe.gallery.forEach((imgPath) => {
    const img = document.createElement("img");
    img.src = imgPath;
    modalGallery.appendChild(img);
  });
  // remove hidden, so modal pops up when user clicks
  modalOverlay.classList.remove("hidden");
}

// Data Stats Summary
function updateStats(data) {
  totalCount.textContent = data.length;

  // Count unique locations usin set
  const uniqueLocations = new Set();
  data.forEach((cafe) => {
    uniqueLocations.add(cafe.location);
  });

  let total = 0;
  data.forEach((cafe) => {
    total += cafe.rating;
  });
  // calc avg rating
  const avg = data.length ? total / data.length : 0;
  avgRating.textContent = avg.toFixed(1);
  // display unique location count
  locationCount.textContent = uniqueLocations.size;
}

// Update displayed data based on user preferences interaction
searchInput.addEventListener("input", viewPreferences);
filterSelect.addEventListener("change", viewPreferences);
sortSelect.addEventListener("change", viewPreferences);

// close modal
closeModal.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

// close modal when clicking outside of of it
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});

// when page loads, call viwPrefernces
viewPreferences();
