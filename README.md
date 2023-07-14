# Ekteply

Ekteply is a powerful web application that provides pre-designed templates for reports, mails, job offer emails, job descriptions, and more. It is built using React and Next.js on the frontend, with Firebase serving as the backend, and Figma for UI/UX design. The project also utilizes Chakra UI for styling and additional features.

## Features

- A wide range of professionally designed templates for various purposes.
- User-friendly interface for easy navigation and template selection.
- Real-time collaboration on templates using Firebase's real-time database.
- Ability to customize templates to match specific requirements.
- Export templates in multiple formats (PDF, Word, HTML, etc.).
- Robust search functionality for quickly finding the desired template.
- Integration with popular email services for seamless delivery of mails and job offers.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/ekteply.git`
2. Navigate to the project directory: `cd ekteply`
3. Install dependencies: `npm install`

## Configuration

1. Create a Firebase project at [https://firebase.google.com](https://firebase.google.com) and set up a Firestore database.
2. Add your Firebase configuration details in the `src/config/firebase.js` file.

```javascript
// src/config/firebase.js

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export default firebaseConfig;
```

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

1. Build the production-ready code: `npm run build`
2. Deploy the built files to your preferred hosting platform.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push the branch to your forked repository: `git push origin feature/my-new-feature`
5. Open a pull request on GitHub, providing a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to reach out to us at [support@ekteply.com](mailto:support@ekteply.com).
