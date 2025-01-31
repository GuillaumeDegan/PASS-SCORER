import { checkPasswordStrength } from "./index";

// Test cases
const passwords = ["123456", "Password1", "StrongP@ssword123!", "weak"];

passwords.forEach((password) => {
  const result = checkPasswordStrength(password);
  console.log(`Password: ${password}`);
  console.log(`Strength: ${result.strength}`);
  console.log(`Score: ${result.score}`);
  console.log(`Feedback: ${result.feedback.join(", ")}`);
  console.log("---------");

  const resultUnbreakable = checkPasswordStrength(password, {
    shouldBeUnbreakable: true,
  });
  console.log("UMBREAKABLE :");
  console.log(`Password: ${password}`);
  console.log(`Strength: ${resultUnbreakable.strength}`);
  console.log(`Score: ${resultUnbreakable.score}`);
  console.log(`Feedback: ${resultUnbreakable.feedback.join(", ")}`);
  console.log("---------");
});
