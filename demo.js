// see https://github.com/prettier/prettier/blob/master/CHANGELOG.md#1171
function f() {
  if (true) {
    call("this line is 79 chars", "long", "it should", "stay as single line");
  }
}
