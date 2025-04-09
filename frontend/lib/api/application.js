import axios from 'axios';

class ApiAction {

  // 外部APIを用いて、買値と売値の取得をする。
  static fetchExchange() {
    return axios.get('/api/forex/public/v1/ticker')
      .then((response) => {
        const UsdJpy = response.data.data.find(item => item.symbol === 'USE_JPY' )
        return {
          ask: UsdJpy.ask,
          bid: UsdJpy.bid
        }
      })
      .catch((error) => {
        alert('データの取得に失敗しました。')
        console.error(error);
      })
  }

  //新規登録
  static createUser(user) {
    return axios.post('http://localhost:3000/api/v1/users', { user }, {
    })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('登録が完了しました。');
      return token
    })
    .catch((error) => {
      const errors = error.response?.data?.errors;
      const message = Array.isArray(errors)
        ? errors.join('\n')
        : error.response?.data?.error || '登録に失敗しました。';
      alert(message);
    });
  }

  static sginIn(user) {
    return axios
    .post('http://localhost:3000/api/v1/login', user)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token)
      alert("ログインしました。")
      return token;
    })
    .catch((error)=> {
      alert(error.response.data.error)
    })
  }
}

export default ApiAction;