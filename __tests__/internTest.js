const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "BUTLER";
    const c = new Intern("Bravo", 1, "test@test.com", testValue);
    expect(c.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const c = new Intern("Bravo", 1, "test@test.com", "UCLA");
    expect(c.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "BUTLER";
    const c = new Intern("Bravo", 1, "test@test.com", testValue);
    expect(c.getSchool()).toBe(testValue);
});