type PasswordStrengthResult = {
  score: number; // Strength score between 0 and 100
  strength: "Weak" | "Moderate" | "Strong"; // Strength level
  feedback: string[]; // Suggestions for improvement
};

export const checkPasswordStrength = (
  password: string,
  options?: { shouldBeUnbreakable?: boolean }
): PasswordStrengthResult => {
  let score = 0;
  const feedback: string[] = [];

  const { shouldBeUnbreakable = false } = options || {};

  // Length check
  const minLength = shouldBeUnbreakable ? 12 : 8;
  if (password.length >= minLength) {
    score += 20;
  } else {
    feedback.push(`Password should be at least ${minLength} characters long.`);
  }

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
  const specialCharRegex = /[^A-Za-z0-9]/;
  if (specialCharRegex.test(password)) score += 20;
  else feedback.push("Include at least one special character (!@#$%^&*).");

  // Additional strict checks for "unbreakable" passwords
  if (shouldBeUnbreakable) {
    // Require at least 2 uppercase letters
    if ((password.match(/[A-Z]/g) || []).length < 2) {
      score -= 10;
      feedback.push("Include at least two uppercase letters.");
    }

    // Require at least 2 special characters
    if ((password.match(specialCharRegex) || []).length < 2) {
      score -= 10;
      feedback.push("Include at least two special characters.");
    }

    // Avoid consecutive identical characters
    if (/(.)\1{2,}/.test(password)) {
      score -= 10;
      feedback.push(
        "Avoid using three or more consecutive identical characters."
      );
    }

    // Avoid dictionary words
    const dictionaryWords: string[] = [
      "welcome",
      "ninja",
      "cookie",
      "abc123",
      "letmein",
      "football",
      "baseball",
      "12345",
      "123456",
      "1234567",
      "12345678",
      "123456789",
      "1234567890",
      "password",
      "password1",
      "password123",
      "passw0rd",
      "admin",
      "admin123",
      "root",
      "qwerty",
      "qwerty123",
      "asdfgh",
      "zxcvbn",
      "sunshine",
      "monkey",
      "charlie",
      "superman",
      "batman",
      "shadow",
      "master",
      "dragon",
      "starwars",
      "princess",
      "iloveyou",
      "letmein",
      "1234",
      "696969",
      "987654",
      "123123",
      "1q2w3e4r",
      "654321",
      "111111",
      "112233",
      "qazwsx",
      "zaq12wsx",
      "trustno1",
      "hello",
      "whatever",
      "freedom",
      "tigger",
      "michael",
      "jessica",
      "bubbles",
      "baseball1",
      "soccer",
      "hunter",
      "summer",
      "welcome123",
      "password321",
      "secret",
    ];

    if (dictionaryWords.some((word) => password.toLowerCase().includes(word))) {
      score -= 15;
      feedback.push("Avoid using common passwords like 'password' or 'admin'.");
    }
  }

  // Strength evaluation
  let strength: "Weak" | "Moderate" | "Strong" = "Weak";
  if (score > 70) strength = "Strong";
  else if (score > 40) strength = "Moderate";

  return { score, strength, feedback };
};
