const loginForm = document.getElementById("loginForm");
const status = document.getElementById("status");

const authData = {
  // JSONファイルから読み込んだ認証データ
  username: "user1",
  password: "pass1"
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  if (username === authData.username && password === authData.password) {
    status.innerText = "Login Successful!";
  } else {
    status.innerText = "Invalid username or password.";
  }
});
