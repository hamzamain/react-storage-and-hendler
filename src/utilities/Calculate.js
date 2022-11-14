const add = (first, second) => {
  return first + second;
};

const maths = {
  multiply: function (first, second) {
    return first * second;
  },
  sub: function (first, second) {
    return first - second;
  },
  divition: function (first, second) {
    return first / second;
  },
};

const { multiply, sub, divition } = maths;

export { add, multiply, sub, divition };
