const fs = require('fs');

class SparseMatrix {
    constructor(numRows = 0, numCols = 0) {
        this.numRows = numRows;
        this.numCols = numCols;
        this.elements = {};
    }

    static fromFile(filePath) {
        const data = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
        const numRows = parseInt(data[0].split('=')[1].trim());
        const numCols = parseInt(data[1].split('=')[1].trim());
        const matrix = new SparseMatrix(numRows, numCols);

        for (let i = 2; i < data.length; i++) {
            const line = data[i].trim();
            if (line) {
                const match = line.match(/^\((\d+),\s*(\d+),\s*(-?\d+)\)$/);
                if (!match) {
                    throw new Error("Input file has wrong format");
                }
                const [_, row, col, value] = match.map(Number);
                matrix.setElement(row, col, value);
            }
        }
        return matrix;
    }

    getElement(row, col) {
        return this.elements[`${row},${col}`] || 0;
    }

    setElement(row, col, value) {
        if (value !== 0) {
            this.elements[`${row},${col}`] = value;
        } else {
            delete this.elements[`${row},${col}`];
        }
    }

    add(matrix) {
        if (this.numRows !== matrix.numRows || this.numCols !== matrix.numCols) {
            throw new Error("Matrix dimensions must match for addition");
        }

        const result = new SparseMatrix(this.numRows, this.numCols);
        for (const key in this.elements) {
            const [row, col] = key.split(',').map(Number);
            result.setElement(row, col, this.getElement(row, col) + matrix.getElement(row, col));
        }

        for (const key in matrix.elements) {
            const [row, col] = key.split(',').map(Number);
            if (!this.elements.hasOwnProperty(key)) {
                result.setElement(row, col, matrix.getElement(row, col));
            }
        }

        return result;
    }

    subtract(matrix) {
        if (this.numRows !== matrix.numRows || this.numCols !== matrix.numCols) {
            throw new Error("Matrix dimensions must match for subtraction");
        }

        const result = new SparseMatrix(this.numRows, this.numCols);
        for (const key in this.elements) {
            const [row, col] = key.split(',').map(Number);
            result.setElement(row, col, this.getElement(row, col) - matrix.getElement(row, col));
        }

        for (const key in matrix.elements) {
            const [row, col] = key.split(',').map(Number);
            if (!this.elements.hasOwnProperty(key)) {
                result.setElement(row, col, -matrix.getElement(row, col));
            }
        }

        return result;
    }

    multiply(matrix) {
        if (this.numCols !== matrix.numRows) {
            throw new Error("Matrix dimensions do not match for multiplication");
        }

        const result = new SparseMatrix(this.numRows, matrix.numCols);
        for (const key1 in this.elements) {
            const [row1, col1] = key1.split(',').map(Number);
            for (const key2 in matrix.elements) {
                const [row2, col2] = key2.split(',').map(Number);
                if (col1 === row2) {
                    const current = result.getElement(row1, col2);
                    result.setElement(row1, col2, current + this.getElement(row1, col1) * matrix.getElement(row2, col2));
                }
            }
        }

        return result;
    }
}

module.exports = SparseMatrix;

