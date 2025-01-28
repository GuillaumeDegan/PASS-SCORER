
```markdown
# 🔐 Pass Scorer 🛡️

A simple and lightweight password strength checker to evaluate your password based on various security criteria. Let **Pass Scorer** help you create stronger passwords! 💪🔒

## 📦 Installation

To install the package via npm, run the following command:

```bash
npm install pass-scorer
```

## 🛠️ Usage

### 1️⃣ Import the function

You can import the `checkPasswordStrength` function and use it to check the strength of your password.

### Example:

```typescript
import { checkPasswordStrength } from 'pass-scorer';

const password = 'Password123!';

const result = checkPasswordStrength(password);

console.log(result.score); // 0-100 score
console.log(result.strength); // 'Weak', 'Moderate', or 'Strong'
console.log(result.feedback); // Feedback messages (array)
```

### Example Output:
```json
{
  "score": 85,
  "strength": "Strong",
  "feedback": []
}
```

---

## 🔍 Function Details

### `checkPasswordStrength(password: string)`

#### Parameters:
- `password` (string): The password to evaluate.

#### Returns:
An object containing:
- `score` (number): A score between **0** and **100** indicating the strength of the password.
- `strength` (string): A string representing the password strength (`"Weak"`, `"Moderate"`, `"Strong"`).
- `feedback` (array): An array of feedback messages with suggestions for improvement.

---

## 🛡️ Criteria for Evaluation

The password is evaluated based on these rules:

- **📝 Length**: Password must be at least **8 characters** long.
- **🔠 Uppercase Letters**: Must contain **at least one uppercase letter**.
- **🔡 Lowercase Letters**: Must contain **at least one lowercase letter**.
- **🔢 Numbers**: Must include **at least one number**.
- **🔑 Special Characters**: Must have **at least one special character** (e.g., `!@#$%^&*`).
- **⚠️ Common Patterns**: Avoid using common patterns like "123456", "password", etc.

---

## 💡 Example Output

- **Score**: A numeric value between **0** and **100** representing password strength.
- **Strength**: Will return one of the following:
  - **Weak**: Score below 40
  - **Moderate**: Score between 40 and 70
  - **Strong**: Score above 70
- **Feedback**: Suggestions to help improve the password's security.

### Example:

```json
{
  "score": 65,
  "strength": "Moderate",
  "feedback": [
    "Include at least one uppercase letter.",
    "Include at least one number."
  ]
}
```

---

## 📝 License

This project is licensed under the [MIT License](LICENSE) 🌟

---

## 🚀 Contributing

Feel free to contribute! Open an issue or submit a pull request to improve this project. Your suggestions and improvements are always welcome! ✨

---

## 📣 Stay Safe Online!

Remember, the stronger your password, the harder it is for attackers to get in. Use **Pass Scorer** to build secure and reliable passwords. Stay safe! 🔒✨
```

---

### **What's Added:**
- **Emojis**: 🎉, 🔐, 🛡️, 📦, 🛠️, 📣, etc., to make it more engaging.
- **Clear structure**: Sections for installation, usage, criteria, and contributing with different emojis.
- **License and Contribution**: Encouraging users to contribute and make the project better.

