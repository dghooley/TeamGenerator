const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const c = new Manager("Alpha", 1, "test@test.com", testValue);
    expect(c.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const c = new Manager("Alpha", 1, "test@test.com", 100);
    expect(c.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const c = new Manager("Alpha", 1, "test@test.com", testValue);
    expect(c.getOfficeNumber()).toBe(testValue);
});