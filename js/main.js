const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".nav-menu");
const profToggle = document.querySelector(".prof-toggle");
const profMenu = document.querySelector(".profile-menu");
const headerTitle = document.querySelector(".header-title");
var btnContainer = document.getElementById("myNav");
var btns = btnContainer.getElementsByClassName("nav-links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("hidden");
  /**
   * jika profMenu tidak berisi class undisplayed
   * tambahkan profMenu dengan class undisplayed
   **/
  if (profMenu.classList.contains("undisplayed") === false) {
    profMenu.classList.add("undisplayed");
  }
  // hide modal edit profile
  modalEdit.classList.remove("translate-0");
  // replace header title jadi z-100
  if(headerTitle.classList.contains("z-100") === false){
    headerTitle.classList.replace("z-50", "z-100")
}
});
/**
 * jika user mengklik sesuatu hidden menu links
 **/
document.onclick = function (event) {
  if (event.target !== links && event.target !== navToggle) {
    links.classList.add("hidden");
  }
};

// document.onclick = function (event) {
//     if (event.target !== profMenu && event.target !== profToggle) {
//         profMenu.classList.add('undisplayed');
//     }
// };

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

profToggle.addEventListener("click", function () {
  profMenu.classList.toggle("undisplayed")
  headerTitle.classList.replace("z-50", "z-100")
  if (modalEdit.classList.contains("translate-0") === true) {
    modalEdit.classList.remove("translate-0");
  }
});

// close modal
const editProfile = document.querySelector(".edit-profile");
const modalEdit = document.querySelector(".modal-edit-profile");
const closeModal = document.getElementsByClassName("close_modal");

editProfile.addEventListener("click", function () {
  modalEdit.classList.add("translate-0")
  headerTitle.classList.replace("z-100", "z-50")
  if (profMenu.classList.contains("undisplayed") === false) {
    profMenu.classList.add("undisplayed");
  }
});

for (const close_modal of closeModal) {
  close_modal.addEventListener("click", function () {
    modalEdit.classList.remove("translate-0");
    
    if(headerTitle.classList.contains("z-100") === false){
        headerTitle.classList.replace("z-50", "z-100")
    }
    
  });
}
