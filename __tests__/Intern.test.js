const Intern = require("../lib/Intern");

test("Can instantiate Engineer instance", () => {
  const e = new Intern();
  expect(typeof(e)).toBe("object");
});

test("Can get school via getSchool()", () => {
    const testValue = "UC Davis";
    const e = new Intern("Bob", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("Can set name via constructor arguments", () => {
  const name = "Jane";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Intern("Bob", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Intern("Bob", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Jane";
  const e = new Intern(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Intern("Bob", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Intern("Bob", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jane", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});