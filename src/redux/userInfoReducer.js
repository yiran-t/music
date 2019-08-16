let userInfoReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "USER_INFO":
      return Object.assign({}, state, {
        tel: payload.tel,
        pwd: payload.pwd,
        nickname: payload.nickname,
        userFlag: payload.username,
      });
    default:
      return state.nickname;
  }
};
export default userInfoReducer;
