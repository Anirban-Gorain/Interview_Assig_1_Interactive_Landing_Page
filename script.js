const heroTextElement = document.querySelector(".hero-text");

window.onload = () => {
  heroTextElement.classList.add("fade-in");

  const imageContainers = document.querySelectorAll(".image-container");

  for (
    let containerIndex = 0;
    containerIndex < imageContainers.length;
    containerIndex++
  ) {
    const imageContainer = imageContainers[containerIndex];
    const containerId = imageContainer.getAttribute("id");

    imageContainer.addEventListener("mousemove", (event) => {
      const rect = event.target.getBoundingClientRect();

      const offsetX = ((event.clientX - rect.left) / rect.width - 0.1) * 100;
      const offsetY = ((event.clientY - rect.top) / rect.height - 0.1) * 100;

      imageContainer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      heroTextElement.style.color = "rgba(255, 255, 255, 0.1)";
      heroTextElement.style.zIndex = "0";

      for (
        let containerIndex = 0;
        containerIndex < imageContainers.length;
        containerIndex++
      ) {
        if (
          containerId === imageContainers[containerIndex].getAttribute("id")
        ) {
          imageContainers[containerIndex].style.borderColor = "yellow";
          imageContainers[containerIndex].style.borderRadius = "10px";
        } else {
          imageContainers[containerIndex].style.opacity = "0.3";
        }
      }
    });

    imageContainer.addEventListener("mouseleave", () => {
      imageContainer.style.transform = "translate(0, 0)";
      heroTextElement.style.color = "rgba(255, 255, 255, 1)";
      heroTextElement.style.zIndex = "1";

      for (
        let containerIndex = 0;
        containerIndex < imageContainers.length;
        containerIndex++
      ) {
        imageContainers[containerIndex].style.borderColor =
          "rgba(255, 255, 255, 0)";
        imageContainers[containerIndex].style.opacity = "1";
        imageContainers[containerIndex].style.borderRadius = "0px";
      }
    });
  }
};
