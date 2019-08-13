
let reducers = (state, action) => {
  let { type, data } = action;
  switch (type) {
    case 'changeAge':
      return Object.assign({}, state, { age: data });
    default:
      return state;
  }
};
export default reducers;
