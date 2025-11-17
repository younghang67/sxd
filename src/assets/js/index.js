function openModelVideo() {
  const videoContainer = document.getElementById("model-container");

  videoContainer.classList.remove("hidden");
  videoContainer.classList.add("flex");

  videoContainer.innerHTML = `<div id="inner-video-container" class="relative px-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 text-white absolute z-999 -top-[30px] right-[22px]"
              onclick="closeModelVideo()"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          <video id="model-video" class="rounded-2xl object-contain w-full max-w-[900px] mx-auto" autoplay>
            <source src="/src/assets/video/sxd-v2.mp4" type="video/mp4" />
          </video>
        </div>`;

  document.body.classList.add("overflow-hidden");
}

function closeModelVideo() {
  const modal = document.getElementById("model-container");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  document.getElementById("inner-video-container").remove();

  document.body.classList.remove("overflow-hidden");
}

document.getElementById("model-container").addEventListener("click", function (event) {
  const modalImage = document.getElementById("model-video");

  if (!modalImage.contains(event.target)) {
    closeModelVideo();
  }
});

{
  const menuBtn = document.getElementById("menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-btn");

  function closeMenu() {
    mobileNav.classList.add("translate-x-full");
  }
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("translate-x-full");
  });
  closeBtn.addEventListener("click", closeMenu);
  document.addEventListener("click", (e) => {
    const isClickInside = mobileNav.contains(e.target) || menuBtn.contains(e.target);
    if (!isClickInside) {
      closeMenu();
    }
  });
  window.addEventListener("scroll", closeMenu);
}
