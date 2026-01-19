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

  // login/signinボタンでLogin状態(User_headerの表示)にし、logoutボタンでLogout状態(Guest_headerの表示)にする。
  const loginBtn  = document.querySelector(".login-btn");
  const signinBtn = document.querySelector(".signin-btn");
  const logoutBtn = document.querySelector(".logout-btn");

  // ▼ Login
  if (loginBtn) {
    loginBtn.addEventListener("click", function() {
      localStorage.setItem("loggedIn", "true");
    });
  }

  // ▼ Sign up
  if (signinBtn) {
    signinBtn.addEventListener("click", function() {
      localStorage.setItem("loggedIn", "true");
    });
  }

  // ▼ Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
      localStorage.removeItem("loggedIn");
    });
  }

  // ▼ ページ読み込み時にヘッダー切り替え
  const guestHeader = document.querySelector("#GuestHeader");
  const userHeader  = document.querySelector("#UserHeader");

  if (localStorage.getItem("loggedIn") === "true") {
    userHeader.style.display = "block";
    guestHeader.style.display = "none";
  } else {
    userHeader.style.display = "none";
    guestHeader.style.display = "block";
  }

});
