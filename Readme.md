# My Resume Package

A beautifully formatted resume that can be viewed directly in the terminal using npx.

## Usage

```bash
npx @your-linkedin-id
```

## About

This package displays my professional resume with:
- Contact information
- Professional summary
- Work experience
- Technical skills
- Education
- Certifications
- Key projects

## Installation Steps

To create and publish your own resume package:

### 1. Setup the Package

```bash
# Create a new directory for your package
mkdir resume-package
cd resume-package

# Initialize npm package
npm init -y
```

### 2. Install Dependencies

```bash
npm install chalk@4.1.2 boxen@5.1.2
```

### 3. Configure Package

- Update `package.json` with your LinkedIn ID as the package name
- Ensure you have the `bin` field configured
- Add your personal information

### 4. Customize Your Resume

Edit `index.js` and replace the sample data with your own:
- Personal information
- Work experience
- Skills
- Education
- Projects

### 5. Test Locally

```bash
# Test your package locally
node index.js

# Or link it globally to test with npx
npm link
npx your-package-name
```

### 6. Publish to npm

```bash
# Login to npm (create account at npmjs.com if needed)
npm login

# Publish your package
npm publish --access public
```

### 7. Verify Publication

```bash
# Test your published package
npx @your-linkedin-id
```

## Package Structure

```
resume-package/
├── package.json          # Package configuration
├── index.js             # Main resume script
├── README.md            # This file
└── .gitignore           # Git ignore file
```

## Features

- 🎨 Colorful, well-formatted terminal output
- 📦 Easy to run with npx
- 🔧 Highly customizable
- 📱 Professional presentation
- ⚡ Fast and lightweight

## Tips

1. **Package Name**: Use your LinkedIn handle (e.g., if your profile is `linkedin.com/in/johndoe`, use `@johndoe`)
2. **Scoped Packages**: If your LinkedIn ID is taken, try variations or add your name
3. **Updates**: You can update your resume anytime with `npm version patch && npm publish`
4. **Privacy**: Only include information you're comfortable sharing publicly

## License

MIT

## Connect With Me

- LinkedIn: [https://www.linkedin.com/in/saksham-mishra7/](https://www.linkedin.com/in/saksham-mishra7/)
- GitHub: [https://github.com/sakshammishra5](https://github.com/sakshammishra5)
- Website: [https://saksham7dev.vercel.app/](https://saksham7dev.vercel.app/)