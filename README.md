

# 🔐 Pass Scorer 🛡️

A simple and lightweight password strength checker to evaluate your password based on various security criteria. Let **Pass Scorer** help you create stronger passwords! 💪🔒

## 📦 Installation

To install the package via npm, run the following command:

```bash
npm install pass-scorer
```

## 🛠️ Usage

### 1️⃣ Import the Function

You can import the `checkPasswordStrength` function and use it to check the strength of your password.

```typescript
import { checkPasswordStrength } from 'pass-scorer';

const password = 'Password123!';

const result = checkPasswordStrength(password);

console.log(result.score);    // Numeric score (0-100)
console.log(result.strength); // 'Weak', 'Moderate', or 'Strong'
console.log(result.feedback); // Feedback messages (array)
```

#### Example Output:

```json
{
  "score": 85,
  "strength": "Strong",
  "feedback": []
}
```

### 2️⃣ Advanced Usage (Unbreakable Password)

To enforce stricter password rules, use the `shouldBeUnbreakable` option. This will apply additional security checks to ensure your password is highly secure.

```typescript
import { checkPasswordStrength } from 'pass-scorer';

const result = checkPasswordStrength('UnbreakablePassword!123', { shouldBeUnbreakable: true });

console.log(result.score);    // Numeric score (0-100)
console.log(result.strength); // 'Weak', 'Moderate', or 'Strong'
console.log(result.feedback); // Feedback messages (array)
```

#### Example Output:

```json
{
  "score": 90,
  "strength": "Strong",
  "feedback": [
    "Include at least two uppercase letters.",
    "Include at least two special characters."
  ]
}
```

## 🔍 Function Details

```typescript
checkPasswordStrength(password: string, options?: { shouldBeUnbreakable?: boolean }): PasswordStrengthResult
```

### Parameters:
- `password` (string): The password to evaluate.
- `options` (optional object):
  - `shouldBeUnbreakable` (boolean): If set to `true`, applies stricter rules to enforce stronger passwords.

### Returns:
An object containing:
- `score` (number): A score between 0 and 100 indicating the strength of the password.
- `strength` (string): A string representing the password strength ("Weak", "Moderate", or "Strong").
- `feedback` (array): An array of feedback messages with suggestions for improvement.

## 🛡️ Criteria for Evaluation

The password is evaluated based on these rules:

- **Length**: Password must be at least 8 characters long (12 characters if `shouldBeUnbreakable` is enabled).
- **Uppercase Letters**: Must contain at least one uppercase letter. For unbreakable passwords, two uppercase letters are required.
- **Lowercase Letters**: Must contain at least one lowercase letter.
- **Numbers**: Must include at least one number.
- **Special Characters**: Must have at least one special character (e.g., !@#$%^&*). For unbreakable passwords, at least two special characters are required.
- **Common Patterns**: Avoid using common patterns like "123456", "password", etc. If a common pattern is detected, the password will be penalized.
- **Consecutive Identical Characters**: Avoid using three or more consecutive identical characters in the password.
  
If `shouldBeUnbreakable` is enabled, stricter checks are applied:
- Password must have at least two uppercase letters.
- Password must have at least two special characters.
- Avoid consecutive identical characters.
- Avoid dictionary words and common passwords.

## 💡 Example Output

### Weak Password Example

```json
{
  "score": 35,
  "strength": "Weak",
  "feedback": [
    "Password should be at least 8 characters long.",
    "Include at least one uppercase letter.",
    "Include at least one number."
  ]
}
```

### Moderate Password Example

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

### Strong Password Example

```json
{
  "score": 85,
  "strength": "Strong",
  "feedback": []
}
```

### Unbreakable Password Example

```json
{
  "score": 90,
  "strength": "Strong",
  "feedback": [
    "Include at least two uppercase letters.",
    "Include at least two special characters."
  ]
}
```

## 📝 License

This project is licensed under the MIT License 🌟

## 🚀 Contributing

Feel free to contribute! Open an issue or submit a pull request to improve this project. Your suggestions and improvements are always welcome! ✨

## 📣 Stay Safe Online!

Remember, the stronger your password, the harder it is for attackers to break into your account. Use Pass Scorer to build secure and reliable passwords. Stay safe! 🔒✨

---




