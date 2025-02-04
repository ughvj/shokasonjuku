import { assertConditions } from "../../.teacher/test.js";
import { checkHitAndBlow } from "../script.js";

const _test_0hit_0blow = () => {
  // given.
  const expected = {
    hit: 0,
    blow: 0,
  };

  // when.
  const actual = checkHitAndBlow(1234, 5678);

  // then.
  assertConditions(
    () => {
      return expected.hit == actual.hit && expected.blow == actual.blow;
    },
    "no hit",
    expected,
    actual
  );
};

const _test_4hit_0blow_standard = () => {
  // given.
  const expected = {
    hit: 4,
    blow: 0,
  };

  // when.
  const actual = checkHitAndBlow(1111, 1111);

  // then.
  assertConditions(
    () => {
      return expected.hit == actual.hit && expected.blow == actual.blow;
    },
    "standard 4hit",
    expected,
    actual
  );
};

const _test_0hit_4blow_standard = () => {
  // given.
  const expected = {
    hit: 0,
    blow: 4,
  };

  // when.
  const actual = checkHitAndBlow(1234, 4321);

  // then.
  assertConditions(
    () => {
      return expected.hit == actual.hit && expected.blow == actual.blow;
    },
    "standard 4blow",
    expected,
    actual
  );
};

const _test_number_duplicate_1 = () => {
  // given.
  const expected = {
    hit: 1,
    blow: 2,
  };

  // when.
  const actual = checkHitAndBlow(1222, 2211);

  // then.
  assertConditions(
    () => {
      return expected.hit == actual.hit && expected.blow == actual.blow;
    },
    "number duplicate 1",
    expected,
    actual
  );
};

const _test_number_duplicate_2 = () => {
  // given.
  const expected = {
    hit: 2,
    blow: 2,
  };

  // when.
  const actual = checkHitAndBlow(4499, 4949);

  // then.
  assertConditions(
    () => {
      return expected.hit == actual.hit && expected.blow == actual.blow;
    },
    "number duplicate 2",
    expected,
    actual
  );
};

const _test_number_duplicate_3 = () => {
  // given.
  const expected = {
    hit: 0,
    blow: 2,
  };

  // when.
  const actual = checkHitAndBlow(3331, 1113);

  // then.
  assertConditions(
    () => {
      return expected.hit == actual.hit && expected.blow == actual.blow;
    },
    "number duplicate 2",
    expected,
    actual
  );
};

_test_0hit_0blow();
_test_4hit_0blow_standard();
_test_0hit_4blow_standard();
_test_number_duplicate_1();
_test_number_duplicate_2();
_test_number_duplicate_3();
