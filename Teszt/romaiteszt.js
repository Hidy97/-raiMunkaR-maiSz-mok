QUnit.module("romai", function () {
    QUnit.test("A romai függvény létezik e?", function (assert) {
      assert.ok(romai, "létezik a romai");
    });
    QUnit.test("A romai függvény-e?", function (assert) {
      assert.ok(typeof romai === "function", "fv a romai");
    });
    QUnit.test("Egy az római I?", function (assert) {
        assert.equal(romai(1), "I");
      });
    QUnit.test("Egy az római II?", function (assert) {
        assert.equal(romai(2), "II");
      });
    QUnit.test("Egy az római III?", function (assert) {
        assert.equal(romai(3), "III");
      });
    QUnit.test("Egy az római IV?", function (assert) {
        assert.equal(romai(4), "IV");
      });
    QUnit.test("Egy az római V?", function (assert) {
        assert.equal(romai(5), "V");
      });
    QUnit.test("Egy az római VI?", function (assert) {
        assert.equal(romai(6), "VI");
      });
    QUnit.test("Egy az római VII?", function (assert) {
        assert.equal(romai(7), "VII");
      });
    QUnit.test("Egy az római VIII?", function (assert) {
        assert.equal(romai(8), "VIII");
      });
    QUnit.test("Egy az római IX?", function (assert) {
        assert.equal(romai(9), "IX");
      });
    QUnit.test("Egy az római X?", function (assert) {
        assert.equal(romai(10), "X");
      });
    QUnit.test("Egy az római 19?", function (assert) {
        assert.equal(romai(19), "XIX");
      });
    QUnit.test("Egy az római 30?", function (assert) {
        assert.equal(romai(30), "XXX");
      });
});