const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'general_faqs.json');
const outputFilePath = path.join(__dirname, 'faqs.json');

// Read the input JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the input file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const faqs = JSON.parse(data);

        // Add RowId as the first field and convert to NDJSON format
        const ndjson = faqs.map((faq, index) => {
            const newFaq = { RowId: index + 1, ...faq };
            return JSON.stringify(newFaq);
        }).join('\n');

        // Write the NDJSON to the output file
        fs.writeFile(outputFilePath, ndjson, 'utf8', (err) => {
            if (err) {
                console.error('Error writing the output file:', err);
                return;
            }
            console.log('NDJSON file with RowId created successfully.');
        });
    } catch (parseErr) {
        console.error('Error parsing the JSON data:', parseErr);
    }
});