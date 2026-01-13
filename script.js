// navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  // mobile menu
  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }
  function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
  
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
  
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }
function openModal(type) {
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  if (type === "backend") {
    title.innerText = "Back-end Development";
    text.innerText =
      "I am a backend developer with experience in PHP, Laravel, Core PHP, and CodeIgniter. I have worked on building secure and scalable backend systems, including authentication modules and CRM-based applications. I also use JavaScript, jQuery, and AJAX to create dynamic and interactive features.";
  }

  if (type === "api") {
    title.innerText = "API & Authentication";
    text.innerText =
      "I develop RESTful APIs with JWT authentication, role-based access control and secure backend integrations.";
  }

  if (type === "db") {
    title.innerText = "Database Design";
    text.innerText =
      "I design optimized MySQL database schemas, write efficient queries and improve application performance.";
  }

  document.getElementById("serviceModal").style.display = "block";
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-item");
    const btn = document.querySelector("#seeMoreBtn");

    let visibleCount = 3; // first row (3 items)

    // show first row initially
    for (let i = 0; i < visibleCount && i < projects.length; i++) {
      projects[i].style.display = "block";
    }

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      let nextCount = visibleCount + 3;

      for (let i = visibleCount; i < nextCount && i < projects.length; i++) {
        projects[i].style.display = "block";
      }

      visibleCount = nextCount;

      // hide button if all shown
      if (visibleCount >= projects.length) {
        btn.style.display = "none";
      }
    });
  });

  
  