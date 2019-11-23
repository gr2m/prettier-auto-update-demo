// see https://github.com/prettier/prettier/blob/master/CHANGELOG.md#1171
function f() {
  if (true) {
    call(
      "this line more than 79 chars",
      "long",
      "it should",
      "be split into multiple lines"
    );
  }
}
