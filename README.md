# Sparse Matrix Operations

This project provides a JavaScript implementation for performing operations on sparse matrices. It includes functionality to read sparse matrices from input files, perform addition, subtraction, and multiplication operations on them, and save the results to output files.


## Features

- **SparseMatrix Class**: Implements a sparse matrix with methods to manipulate it.
- **fromFileContent**: Static method to create a SparseMatrix object from file content.
- **getElement**: Get an element from the matrix.
- **setElement**: Set an element in the matrix.
- **add**: Add two matrices.
- **subtract**: Subtract one matrix from another.
- **multiply**: Multiply two matrices.
- **saveToFile**: Save the matrix to a file.


  ## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/your_repository.git](https://github.com/nellyiya/SparseMatrix.git
Install dependencies:


Copy code
npm install
Run the code:


Copy code
node SparseMatrix.js


3. Install dependencies:

npm install


## Input File Format

The input file format should follow these rules:

The first line specifies the number of rows in the matrix (format: rows=<numRows>).
The second line specifies the number of columns in the matrix (format: cols=<numCols>).
Each subsequent line represents a non-zero element in the matrix, formatted as (row, col, value).

 ```bash
Example input file:

Copy code

rows=3

cols=3

(0, 0, 1)

(1, 1, 2)

(2, 2, 3)

```
## Sample Input Files

Sample input files are provided in the sample_inputs directory.

Results
Results of matrix operations are saved in the results directory.

## Conclusion

The Sparse Matrix Operations module provides a versatile tool for handling sparse matrices efficiently. By implementing a SparseMatrix class with support for basic operations such as addition, subtraction, multiplication, and saving matrices to files, this application offers a flexible solution for various matrix manipulation tasks.

Whether you're working with large datasets or need to perform matrix operations in resource-constrained environments, Sparse Matrix Operations offers an effective approach to manage sparse matrices with ease.

We hope this module proves useful in your projects and encourages further exploration and development in the field of matrix operations.

If you have any questions, feedback, or contributions, please feel free to reach out to me 
Email:n.iyabikoze@alustudent.com. Thank you 


