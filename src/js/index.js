      // Selecting elements
      navbar = document.querySelector('.navigation');
      hamburger = document.querySelector('.hamburger');
      logo = document.querySelector('.logo');
      
      // Adding click event listener to hamburger
      hamburger.onclick = function() {
        navbar.classList.toggle('active');
        logo.classList.toggle('active');
      };