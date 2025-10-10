function upDate(previewPic) {
  console.log("Mouse or keyboard focus triggered!");
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  console.log("Mouse leave or blur triggered!");
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}

function addTabFocus() {
  console.log("Page loaded, adding tabindex and listeners...");
  const images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");

    images[i].addEventListener("mouseover", function () {
      upDate(this);
    });

    images[i].addEventListener("mouseleave", function () {
      undo();
    });

    images[i].addEventListener("focus", function () {
      upDate(this);
    });

    images[i].addEventListener("blur", function () {
      undo();
    });
  }
}
