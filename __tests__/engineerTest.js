const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const c = new Engineer("Charlie", 1, "test@test.com", testValue);
    expect(c.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const c = new Engineer("Charlie", 1, "test@test.com", "GitHubUser");
    expect(c.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const c = new Engineer("Charlie", 1, "test@test.com", testValue);
    expect(c.getGithub()).toBe(testValue);
});