document.addEventListener("DOMContentLoaded", function() {
  // ▼ ハンバーガー
  document.querySelectorAll("header").forEach(header => {
    const toggler = header.querySelector(".navbar-toggler");
    const menu = header.querySelector(".navbar-collapse");

    if (toggler && menu) {
      toggler.addEventListener("click", function() {
        menu.classList.toggle("show");
      });
    }
  });

 // ▼ Account ドロップダウン
  const account = document.querySelector("#account");
  const dropdown = document.querySelector("#dropdown-menu");
  if (account && dropdown) {
    account.addEventListener("click", function() {
      dropdown.classList.toggle("active");
    });
  }
  // 対象範囲の外側をクリックしたらドロップダウンを解除
  document.addEventListener("click", function(e) {
    if (!account.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

});
