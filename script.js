const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tab-content");

const content = {
  customers: `
         <div class="card-wrapper">
    <div class="container3-card-items">
      <div class="container3-card-img">
        <img src="./images/img1.webp" alt="" />
        <button>Module</button>
      </div>
      <div class="container3-card-content">
        <h3 class="sub-heading2-link">Customer Trust</h3>
        <p>
          Discover how TruAuth helps customers verify authenticity of products
          and build trust.
        </p>
        <a href="#">Start Learning</a>
      </div>
    </div>
    </div>
<div class="card-wrapper">
    <div class="container3-card-items">
      <div class="container3-card-img">
        <img src="./images/img2.webp" alt="" />
        <button>Guide</button>
      </div>
      <div class="container3-card-content">
        <h3 class="sub-heading2-link">Easy Verification</h3>
        <p>
          Learn simple steps customers can take to check product claims
          instantly with TruAuth.
        </p>
        <a href="#">Explore</a>
      </div>
    </div>
</div>
<div class="card-wrapper">
    <div class="container3-card-items">
      <div class="container3-card-img">
        <img src="./images/img3.webp" alt="" />
        <button>Insights</button>
      </div>
      <div class="container3-card-content">
        <h3 class="sub-heading2-link">Peace of Mind</h3>
        <p>
          Understand how verified transparency ensures you always make safe
          and informed choices.
        </p>
        <a href="#">Learn More</a>
      </div>
    </div>
  </div>
  `,
  brands: `
  <div class="card-wrapper">
    <div class="container3-card-items">
      <div class="container3-card-img">
        <img src="./images/img1.webp" alt="" />
        <button>Toolkit</button>
      </div>
      <div class="container3-card-content">
        <h3 class="sub-heading2-link">Brand Credibility</h3>
        <p>See how TruAuth empowers brands to prove product claims and win customer loyalty.</p>
        <a href="#">Get Started</a>
      </div>
    </div>
    </div>
    <div class="card-wrapper">
    <div class="container3-card-items">
      <div class="container3-card-img">
        <img src="./images/img2.webp" alt="" />
        <button>Analytics</button>
      </div>
      <div class="container3-card-content">
        <h3 class="sub-heading2-link">Smart Insights</h3>
        <p>Access real-time data to understand customer trust and improve your brand’s reputation.</p>
        <a href="#">Discover</a>
      </div>
    </div>
    </div>
    <div class="card-wrapper">
    <div class="container3-card-items">
      <div class="container3-card-img">
        <img src="./images/img3.webp" alt="" />
        <button>Solution</button>
      </div>
      <div class="container3-card-content">
        <h3 class="sub-heading2-link">Market Advantage</h3>
        <p>Stand out with verified transparency and build a stronger brand presence in competitive markets.</p>
        <a href="#">Learn More</a>
      </div>
    </div>
    </div>
  `,
};
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active from all
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Fade out old content
    tabContent.classList.add("fade-out");

    setTimeout(() => {
      // Change content after fade-out
      tabContent.innerHTML = content[tab.dataset.tab];

      // Trigger reflow for animation
      void tabContent.offsetWidth;

      // Fade in new content
      tabContent.classList.remove("fade-out");
      tabContent.classList.add("fade-in");
    }, 300); // match CSS animation duration
  });
});
const heading = document.getElementById("heading-text");
const sentences = [
  "Verify product authenticity and claims, instantly.",
  "Trust delivered, tamper-proof digital identity for all.",
  "Simple integration, transparent verification, effortless brand trust.",
];

let sentenceIndex = 0;
let charIndex = 0;
let typing = true; // typing or deleting

function typeLoop() {
  const currentSentence = sentences[sentenceIndex];

  if (typing) {
    // typing characters
    heading.textContent = currentSentence.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentSentence.length) {
      typing = false;
      setTimeout(typeLoop, 1500); // pause before deleting
      return;
    }
    setTimeout(typeLoop, 80); // typing speed
  } else {
    // deleting characters
    heading.textContent = currentSentence.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      typing = true;
      sentenceIndex = (sentenceIndex + 1) % sentences.length; // move to next sentence
      setTimeout(typeLoop, 500); // pause before typing next
      return;
    }
    setTimeout(typeLoop, 40); // deleting speed
  }
}

// start loop
heading.textContent = "";
window.onload = typeLoop;
