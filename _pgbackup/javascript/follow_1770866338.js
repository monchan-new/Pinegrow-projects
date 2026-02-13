document.addEventListener("DOMContentLoaded", function() {

  // Follow/UnfollowボタンでUnfollow/Followボタンを表示し、followersのカウントを１/０に変更する。
  const followBtn  = document.querySelector("#follow");
  const unfollowBtn = document.querySelector("#unfollow");
  const followersCount = document.querySelector("#follower");

  // ▼ follow
  if (followBtn) {
    followBtn.addEventListener("click", function() {
    followBtn.style.display = "none";
    unfollowBtn.style.display = "block";
    followersCount.innerHTML = "1" 
    });
  }
  // ▼ unfollow
  if (unfollowBtn) {
    unfollowBtn.addEventListener("click", function() {
    followBtn.style.display = "block";
    unfollowBtn.style.display = "none";
    followersCount.innerHTML = "0" 
    });
  }

});
