// フォームが送信されたときの処理
document.getElementById("form-login").addEventListener("submit", async (event) => {
  // デフォルトの動作を停止
  event.preventDefault();

  // 入力されたユーザーIDとパスワードを取得
  const userid = (document.getElementById("userid") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  // Jsonファイルからデータを読み込む
  const response = await fetch("data.json");
  const data = await response.json();

  // ユーザーIDとパスワードが一致するか確認
  const user = data.users.find((u) => u.id === userid && u.password === password);

  // 結果を表示
  const resultElement = document.getElementById("result");
  if (user) {
    resultElement.innerHTML = "ログイン成功！";
  } else {
    resultElement.innerHTML = "ログイン失敗！";
  }
});
