const fs = require('fs');
const path = require('path');

class SparseMatrix {
    constructor(numRows = 0, numCols = 0) {
        this.numRows = numRows;
        this.numCols = numCols;
        this.elements = new Map();
    }

    static fromFileContent(fileContent) {
        const lines = fileContent.trim().split('\n').map(line => line.trim()).filter(line => line !== '');

        if (lines.length < 2) {
            throw new Error("Input file does not contain enough information");
        }

        const numRowsMatch = lines[0].match(/^rows=(\d+)$/);
        const numColsMatch = lines[1].match(/^cols=(\d+)$/);

        if (!numRowsMatch || !numColsMatch) {
            throw new Error("Input file has wrong format");
        }

        const numRows = parseInt(numRowsMatch[1]);
        const numCols = parseInt(numColsMatch[1]);

        const matrix = new SparseMatrix(numRows, numCols);

        for (let i = 2; i < lines.length; i++) {
            const match = lines[i].match(/^\((\d+),\s*(\d+),\s*(-?\d+)\)$/);
            if (!match) {
                throw new Error("Input file has wrong format");
            }
            const [_, row, col, value] = match.map(Number);
            matrix.setElement(row, col, value);
        }
        return matrix;
    }

    getElement(row, col) {
        return this.elements.get(`${row},${col}`) || 0;
    }

    setElement(row, col, value) {
        const key = `${row},${col}`;
        if (value !== 0) {
            this.elements.set(key, value);
        } else {
            this.elements.delete(key);
        }
    }

    add(matrix) {
        // Add method implementation...
    }

    subtract(matrix) {
        // Subtract method implementation...
    }

    multiply(matrix) {
        // Multiply method implementation...
    }

    saveToFile(filePath) {
        let result = `rows=${this.numRows}\n`;
        result += `cols=${this.numCols}\n`;

        this.elements.forEach((value, key) => {
            const [row, col] = key.split(',').map(Number);
            result += `(${row}, ${col}, ${value})\n`;
        });

        fs.writeFileSync(filePath, result);
    }
}

// Read input files, perform matrix operations, and save results
try {
    // Read input files
    const inputFile1 = path.join(__dirname, 'sample_inputs', 'easy_sample_01_1.txt');
    const inputFile2 = path.join(__dirname, 'sample_inputs', 'easy_sample_01_2.txt');
    const fileContent1 = fs.readFileSync(inputFile1, 'utf-8');
    const fileContent2 = fs.readFileSync(inputFile2, 'utf-8');

    // Create SparseMatrix objects from file contents
    const matrix1 = SparseMatrix.fromFileContent(fileContent1);
    const matrix2 = SparseMatrix.fromFileContent(fileContent2);

    // Save matrices to files
    const resultFilePath1 = path.join(__dirname, 'results', 'matrix1.txt');
    const resultFilePath2 = path.join(__dirname, 'results', 'matrix2.txt');
    matrix1.saveToFile(resultFilePath1);
    matrix2.saveToFile(resultFilePath2);

    console.log('Matrices saved to files:', resultFilePath1, resultFilePath2);
} catch (error) {
    console.error('Error:', error.message);
}
