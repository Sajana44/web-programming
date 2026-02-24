// document.addEventListener("DOMContentLoaded", () => {
//   const items = document.querySelectorAll(".product-item");
//   const pageNumbers = document.querySelectorAll(".page-number");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");

//   const itemsPerPage = 10;
//   let currentPage = 1;
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   function showPage(page) {
//     currentPage = page;

//     // hide all
//     items.forEach((item) => {
//       item.style.display = "none";
//     });

//     // show selected range
//     const start = (page - 10) * itemsPerPage;
//     const end = start + itemsPerPage;

//     for (let i = start; i < end && i < items.length; i++) {
//       items[i].style.display = "block";
//     }

//     // active button
//     pageNumbers.forEach((btn) => btn.parentElement.classList.remove("active"));

//     pageNumbers[page - 10].parentElement.classList.add("active");
//   }

//   // page clicks
//   pageNumbers.forEach((btn, index) => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();
//       showPage(index + 10);
//     });
//   });

//   // next
//   nextBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (currentPage < totalPages) {
//       showPage(currentPage + 10);
//     }
//   });

//   // previous
//   prevBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (currentPage > 1) {
//       showPage(currentPage - 1);
//     }
//   });

//   // first load
//   showPage(1);
// });
