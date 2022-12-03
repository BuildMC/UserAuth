import * as fs from 'fs'; // Jsonファイルを読み取るためにfsモジュールをインポート

const login = (userID: string, password: string): boolean => {
  // Jsonファイルからデータを読み取る
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

  // ユーザーIDとパスワードの照会を行う
  for (const user of data.users) {
    if (user.userID === userID && user.password === password) {
      return true; // ログイン成功
    }
  }

  return false; // ログイン失敗
};

// フォームが送信された時の処理
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // ページ遷移を抑制する

  // フォームの入力値を取得する
  const userID = document.querySelector('#userID').value;
  const password = document.querySelector('#password').value;

  // ログイン処理を実行する
  if (login(userID, password)) {
    alert('ログイン成功！');
  } else {
    alert('ログイン失敗！');
  }
});
