const _excluded = ["p"];
let rest1, rest2;
for (const [, _ref, ...rest2_] = [0, {
    p: 1,
    q: 2,
    r: 3
  }], {
    p: _
  } = _ref, rest1_ = babelHelpers.objectWithoutProperties(_ref, _excluded); true;) {
  rest1 = rest1_;
  rest2 = rest2_;
  break;
}
;
