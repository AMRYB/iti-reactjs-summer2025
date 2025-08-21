  const images = [
    "https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/05/01/USATODAY/usatsports/luke-skywalker.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/05/01/USATODAY/usatsports/darth-vader.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/05/01/USATODAY/usatsports/247WallSt.com_gallery-247WS-459967-bb-8.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/05/01/USATODAY/usatsports/qui-gon-jinn.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/05/01/USATODAY/usatsports/rey-star-wars.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/-mm-/d39a650ddc070d190d336e20cadfcd9b590cc2b1/c=0-0-1447-817/local/-/media/2018/05/04/USATODAY/USATODAY/636610305358357557-d01-bad-31.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp"
  ];

  let index = 0;
  const imgEl = document.getElementById('slide');
  let autoTimer = null;

  function showImage() {
    imgEl.src = images[index];
  }

  function prevImage() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (index > 0) {
        index--;
        showImage();
      } else {
        clearInterval(autoTimer); 
      }
    }, 1000);
  }

  function nextImage() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (index < images.length - 1) {
        index++;
        showImage();
      } else {
        clearInterval(autoTimer);
      }
    }, 1000);
  }

  function startSlideshow() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      index = (index + 1) % images.length;
      showImage();
    }, 1500);
  }

  function stopSlideshow() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  showImage();
