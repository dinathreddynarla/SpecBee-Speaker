const speakers = [
  {
    id: 1,
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Acme Corp",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 1.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Chief Engagement Officer",
    company: "Acquia",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 2.png"
  },
  {
    id: 3,
    name: "Alex Johnson",
    title: "Chief Technical Developer",
    company: "Pantheon",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 3.png"
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Chief Marketing Officer",
    company: "Specbee",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 4.png"
  },
  {
    id: 5,
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Acme Corp",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 1.png"
  },
  {
    id: 6,
    name: "Jane Smith",
    title: "Chief Engagement Officer",
    company: "Acquia",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 2.png"
  },
  {
    id: 7,
    name: "Alex Johnson",
    title: "Chief Technical Developer",
    company: "Pantheon",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 3.png"
  },
  {
    id: 8,
    name: "Emily Davis",
    title: "Chief Marketing Officer",
    company: "Specbee",
    description:
      "Energistically harness scalable innovation rather than holistic methodologies. Competently integrate mission-critical paradigms for proactive bandwidth. Dynamically aggregate client-focused infrastructures while leveraging seamless action items. Proactively expedite impactful bandwidth rather than traditional deliverables. Holistically re-engineer collaborative solutions while facilitating comprehensive convergence.",
    imageSrc: "./images/Ellipse 4.png"
  }
];

const speakersContainer = document.getElementById("speakersSlider");
const selectedSpeakerSection = document.getElementById("selectedSpeaker");

// Create speaker cards
speakers.forEach(speaker => {
  const card = document.createElement("div");
  card.classList.add("speaker-card");
  card.innerHTML = `
        <img src="${speaker.imageSrc}" alt="${speaker.name}">
        <h3>${speaker.name}</h3>
        <p>${speaker.title}</p>
        <p>${speaker.company}</p>
    `;

  // Handle click event for showing speaker details popup
  card.addEventListener("click", () => {
    console.log(speaker.description);
    // Set up the speaker details dynamically in the modal
    document.getElementById("selectedSpeakerName").textContent = speaker.name;
    document.getElementById("selectedSpeakerTitle").textContent = speaker.title;
    document.getElementById("selectedSpeakerCompany").textContent =
      speaker.company;
    document.getElementById("selectedSpeakerImage").src = speaker.imageSrc;
    document.getElementById("selectedSpeakerDescription").textContent =
      speaker.description;
    // Show the selected speaker details
    selectedSpeakerSection.removeAttribute("hidden");
    selectedSpeakerSection.style.transform = "scale(1)";
    selectedSpeakerSection.style.opacity = 1;
  });

  speakersContainer.appendChild(card);
});

// Close the selected speaker details when the close icon is clicked
document.getElementById("closeSpeakerDetails").addEventListener("click", () => {
  selectedSpeakerSection.setAttribute("hidden", true);
  selectedSpeakerSection.style.opacity = 0; // Add fade-out effect
});

// Left and right buttons for scrolling
const speakersSlider = document.querySelector(".speakers-slider");

// Get the body element for calculating the width
const sliderWidth = parseFloat(getComputedStyle(speakersSlider).width);
const firstCard = document.querySelector(".speaker-card");

// Ensure that the first card exists before calculating
if (firstCard) {
  const cardStyle = getComputedStyle(firstCard);
  const cardWidth = parseFloat(cardStyle.width);
  const cardMarginLeft = parseFloat(cardStyle.marginLeft);
  const cardMarginRight = parseFloat(cardStyle.marginRight);
  const cardWidthWithMargins = cardWidth + cardMarginLeft + cardMarginRight;
  const cardsPerView = Math.floor(sliderWidth / cardWidthWithMargins);

  document
    .querySelector(".carousel-control.left")
    .addEventListener("click", () => {
      speakersSlider.scrollBy({
        left: -cardWidthWithMargins * cardsPerView,
        behavior: "smooth"
      });
    });

  document
    .querySelector(".carousel-control.right")
    .addEventListener("click", () => {
      speakersSlider.scrollBy({
        left: cardWidthWithMargins * cardsPerView,
        behavior: "smooth"
      });
    });
}
