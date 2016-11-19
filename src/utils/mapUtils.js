const extractInputData = e => ({
  field: e.target.name,
  val: (e.target.type === 'checkbox') ? e.target.checked.toString() : e.target.value
});

export {
  extractInputData
};
