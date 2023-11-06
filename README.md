# CSV Analyzer with GPT-4

**CONTEXT (NOV 2023):** This application was originally developed before Code Interpreter was released by OpenAI so users could still have ChatGPT interact with their spreadsheets.

This application provides a simple interface for users to upload CSV files or spreadsheets, input a question, and receive an answer from GPT-4 about the data in the sheets. The application uses Express.js as the backend framework and EJS for server-side rendering of the views. The CSV file is previewed on the client side before being uploaded and analyzed by GPT-4.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:

```bash
git clone https://github.com/bijx/csv-analyzer-GPT.git
```

2. Install the dependencies:

```bash
cd csv-analyzer-GPT
npm install
```

3. Rename the `config.template.json` file in the root directory of the project to `config.json` and add your GPT-4 API key:

```json
{
  "OPENAI_AUTH": "your-api-key-here",
  "GPT_MODEL": "gpt-4"
}
```

Optionally, you can also choose which version of GPT you wish to use, as `gpt-3.5-turbo` is just as good at handling simple queries.

4. Run the application:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. Navigate to the application's homepage.

2. Click the "CSV File" input field and select a CSV file.

3. Enter your question in the "Question" input field.

4. Click the "Upload" button to upload the CSV file and wait for an answer from GPT based on your question.

5. The application will display the analysis results on a new page.

## Built With

- [Express.js](https://expressjs.com/) - The backend framework used
- [EJS](https://ejs.co/) - Embedded JavaScript templating for server-side rendering
- [Multer](https://github.com/expressjs/multer) - Middleware for handling `multipart/form-data`
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) for details.

## Acknowledgments

- OpenAI for providing the GPT-4 API
