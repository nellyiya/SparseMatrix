# Sparse Matrix Operations

This project provides a JavaScript implementation for performing operations on sparse matrices. It includes functionality to read sparse matrices from input files, perform addition, subtraction, and multiplication operations on them, and save the results to output files.

## Installation

1. Clone this repository to your local machine:

git clone <repository_url>

css
Copy code

2. Navigate to the project directory:

cd SparseMatrix

markdown
Copy code

3. Install dependencies:

npm install

markdown
Copy code

## Usage

To perform matrix operations, follow these steps:

1. Ensure that your input files are located in the `sample_inputs` directory.

2. Open the `SparseMatrix.js` file and modify the file paths in the `try-catch` block to match the names and locations of your input files.

3. Run the following command to execute the script:

node SparseMatrix.js

lua
Copy code

4. After execution, the result of the matrix operation will be saved to the `results` directory. You can find the output file named `result_addition.txt` in this directory.

## File Format

The input files for sparse matrices should follow the format below:

rows=<number_of_rows>
cols=<number_of_columns>
(row, column, value)
(row, column, value)
...

mathematica
Copy code

For example:

rows=3
cols=3
(0, 0, 1)
(1, 1, 2)
(2, 2, 3)

csharp
Copy code

## License

This project is licensed under the MIT License - see the LICENSE file for details.

You can include this README file in your project repository to provide usage instructions and information about your code.
