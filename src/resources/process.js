// Processes the files of 'most-common-words-by-language' npm package and
// outputs a file with the words in a format that can be used by TypeX. The
// output file should be a .js file which exports a words object, with languages
// as keys and words as arrays. Additinally, it outputs a file with the possible
// languages

const fs = require('fs');
const path = require('path');

const inputDirectory = path.join(__dirname, 'src', 'resources');
const outputDirectory = __dirname;
const outputFile = path.join(outputDirectory, 'words.js');

const files = fs.readdirSync(inputDirectory);

const words = {};

// languages to keep
const languages = []


for (const file of files) {
    const language = file.split('.')[0];
    const content = fs.readFileSync(path.join(inputDirectory, file), 'utf8');
    const lines = content.split('\n');
    // remove words with less than 3 characters
    const filteredLines = lines.filter(line => line.length > 3);
    words[language] = filteredLines.slice(0, 1000);
    languages.push(language);
}

fs.writeFileSync(outputFile, `export default ${JSON.stringify(words)}`);
fs.writeFileSync(path.join(outputDirectory, 'languages.js'), `export default ${JSON.stringify(languages)}`);