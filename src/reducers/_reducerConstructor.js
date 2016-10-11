const leaveStateUnchanged = state => state;

export default (initState, reducers) =>
  (state = initState, action) => {
    const reducer = reducers[action.type] || leaveStateUnchanged;
    return reducer(state, action);
  };
