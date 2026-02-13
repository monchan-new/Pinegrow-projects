document.addEventListener("DOMContentLoaded", function() {

  // login/signin/update_passwordボタンでLogin状態(user_header/user_homeの表示)にし、logoutボタンでLogout状態(guest_header/guest_homeの表示)にする。
  const loginBtn  = document.querySelector(".login-btn");
  const signinBtn = document.querySelector(".signin-btn");
  const passwordBtn = document.querySelector(".password-btn");
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

  // ▼ Update password
  if (passwordBtn) {
    passwordBtn.addEventListener("click", function() {
      localStorage.setItem("loggedIn", "true");
    });
  }

  // ▼ Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
      localStorage.removeItem("loggedIn");
    });
  }

  // ▼ ページ読み込み時にヘッダーを切り替え
  const guestHeader = document.querySelector("#GuestHeader");
  const userHeader  = document.querySelector("#UserHeader");

  if (localStorage.getItem("loggedIn") === "true") {
    userHeader.style.display = "block";
    guestHeader.style.display = "none";
  } else {
    userHeader.style.display = "none";
    guestHeader.style.display = "block";
  }
  
  // ▼ ページ読み込み時にHomeページを切り替え
  const guestHome = document.querySelector("#GuestHome");
  const userHome  = document.querySelector("#UserHome");

  if (localStorage.getItem("loggedIn") === "true") {
    userHome.style.display = "block";
    guestHome.style.display = "none";
  } else {
    userHome.style.display = "none";
    guestHome.style.display = "block";
  }

});
