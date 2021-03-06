const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof(e)).toBe("object");
});

test("Can get github via getGithub()", () => {
    const testValue = "limichael97";
    const e = new Engineer("Bob", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("Can set name via constructor arguments", () => {
  const name = "Jane";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Engineer("Bob", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Engineer("Bob", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Jane";
  const e = new Engineer(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Engineer("Bob", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Engineer("Bob", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jane", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});