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
      "I build scalable and secure backend applications using PHP, Laravel, Java and Spring Boot. Experience includes CRM systems, authentication modules and backend architecture.";
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

  
  