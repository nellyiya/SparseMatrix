const fs = require('fs');
const SparseMatrix = require('./SparseMatrix');

function main() {
    const matrix1File = '/dsa/sparse_matrix/sample_inputs/matrix1.txt';
    const matrix2File = '/dsa/sparse_matrix/sample_inputs/matrix2.txt';

    try {
        const matrix1 = SparseMatrix.fromFile(matrix1File);
        const matrix2 = SparseMatrix.fromFile(matrix2File);

        console.log('Choose operation: 1) Add 2) Subtract 3) Multiply');
        const choice = parseInt(prompt('Enter choice: '), 10);

        let result;
        switch (choice) {
            case 1:
                result = matrix1.add(matrix2);
                break;
            case 2:
                result = matrix1.subtract(matrix2);
                break;
            case 3:
                result = matrix1.multiply(matrix2);
                break;
            default:
                console.log('Invalid choice');
                return;
        }

        console.log('Result:', result.elements);
    } catch (error) {
        console.error(error.message);
    }
}

main();

