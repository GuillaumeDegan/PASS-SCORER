type PasswordStrengthResult = {
  score: number; // Strength score between 0 and 100
  strength: "Weak" | "Moderate" | "Strong"; // Strength level
  feedback: string[]; // Suggestions for improvement
};

export const checkPasswordStrength = (
  password: string
): PasswordStrengthResult => {
  let score = 0;
  const feedback: string[] = [];

  // Length check
  if (password.length >= 8) score += 20;
  else feedback.push("Password should be at least 8 characters long.");

  // Uppercase check
  if (/[A-Z]/.test(password)) score += 20;
  else feedback.push("Include at least one uppercase letter.");

  // Lowercase check
  if (/[a-z]/.test(password)) score += 20;
  else feedback.push("Include at least one lowercase letter.");

  // Number check
  if (/[0-9]/.test(password)) score += 20;
  else feedback.push("Include at least one number.");

  // Special character check
  if (/[^A-Za-z0-9]/.test(password)) score += 20;
  else feedback.push("Include at least one special character (!@#$%^&*).");

  // Common patterns check
  const commonPatterns: string[] = ["123456", "password", "qwerty"];
  if (
    commonPatterns.some((pattern) => password.toLowerCase().includes(pattern))
  ) {
    score -= 10;
    feedback.push("Avoid using common patterns like '123456' or 'password'.");
  }

  // Strength evaluation
  let strength: "Weak" | "Moderate" | "Strong" = "Weak";
  if (score > 70) strength = "Strong";
  else if (score > 40) strength = "Moderate";

  return { score, strength, feedback };
};
