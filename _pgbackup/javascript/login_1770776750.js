document.addEventListener("DOMContentLoaded", function() {

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
