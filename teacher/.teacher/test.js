export const assertConditions = (
  conditionCallbackfn,
  title,
  expected,
  actual
) => {
  if (!conditionCallbackfn()) {
    console.log(`
Test of [${title}] was failed.
EXPECTED: ${JSON.stringify(expected)}
ACTUAL  : ${JSON.stringify(actual)}
`);
  } else {
    console.log(`Test of [${title}] was succeeded.`);
  }
};
