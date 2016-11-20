const extractInputData = e => ({
  field: e.target.name,
  val: (e.target.type === 'checkbox') ? e.target.checked.toString() : e.target.value
});

const formatSelectOptions = (options, optionsDictionary) =>
  options.map(o => ({value: o, text: optionsDictionary[o]}));

export {
  extractInputData,
  formatSelectOptions
};
