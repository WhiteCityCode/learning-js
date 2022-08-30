(async () => {
  const module = await import("../exercises/strings/strings1.js");
  console.log(module.default("Jane Doe"));
})();
