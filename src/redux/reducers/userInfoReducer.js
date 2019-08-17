let userInfoReducer = (
  state = { tels: "", pwds: "", nicknames: "" },
  action
) => {
  let { type, payload } = action;
  switch (type) {
    case "USER_INFO":
      // return Object.assign({}, state, {
      //   tels: payload.tels,
      //   pwds: payload.pwds,
      //   // nicknames: payload.nicknames,
      //   // userFlag: payload.username,
      // });
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
export default userInfoReducer;
