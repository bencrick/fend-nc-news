function capitalise(str) {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

export default capitalise;
