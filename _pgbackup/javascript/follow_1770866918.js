document.addEventListener("DOMContentLoaded", function() {

  // Follow/UnfollowボタンでUnfollow/Followボタンを表示し、followersのカウントを１/０に変更する。
  const followBtn  = document.querySelector("#follow_btn");
  const unfollowBtn = document.querySelector("#unfollow_btn");
  const followersCount = document.querySelector("#followers");

  // ▼ 初期状態を設定
  if (followBtn && unfollowBtn) {
    followBtn.style.display = "block";
    unfollowBtn.style.display = "none";
  }

  // ▼ follow
  if (followBtn) {
    followBtn.addEventListener("click", function(e) {
    e.preventDefault(); // ← これがないと初期表示が消える

    followBtn.style.display = "none";
    unfollowBtn.style.display = "block";
    followersCount.innerHTML = "1" 
    });
  }
  // ▼ unfollow
  if (unfollowBtn) {
    unfollowBtn.addEventListener("click", function(e) {
    e.preventDefault(); // ← これがないと初期表示が消える

    followBtn.style.display = "block";
    unfollowBtn.style.display = "none";
    followersCount.innerHTML = "0" 
    });
  }

});
