
     // Selecting elements
      const navbar = document.querySelector('.navigation');
      const navLinks = document.querySelectorAll('.navigation a');
      const hamburger = document.querySelector('.hamburger');
      const logo = document.querySelector('.logo');
      
      // Adding click event listener to hamburger
      hamburger.onclick = function() {
        navbar.classList.toggle('active');
        logo.classList.toggle('active');
      };

      // Adding click event listeners to each link
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          navbar.classList.remove('active');
          logo.classList.remove('active');
        });
      });