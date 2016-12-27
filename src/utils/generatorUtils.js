const uuid = () => '-'.repeat(32).replace(/-/g, (c) => (Math.random()*16|0).toString(16).toUpperCase());

export {
  uuid
};
