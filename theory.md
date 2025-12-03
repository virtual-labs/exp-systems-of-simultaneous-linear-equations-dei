### Theory

A system of simultaneous linear equations consists of two or more linear equations with two or more unknown variables. These equations represent straight lines in a coordinate plane, and their solution is the point where the lines intersect. In matrix form, a linear system can be represented using an augmented matrix to simplify the operations required to find the solution.

Numerical methods are widely used to solve systems of linear equations efficiently, especially when dealing with large datasets or engineering computations. Two common matrix-based techniques used for solving such systems are:

1. **Gaussian Elimination**
   Gaussian Elimination converts the augmented matrix into an upper triangular form using row operations. Once the matrix is in this form, back-substitution is used to compute the values of unknown variables. This method is systematic, reliable, and suitable for most linear problem-solving scenarios.

2. **Gauss-Jordan Elimination**
   This method extends Gaussian Elimination by continuing the row operations until the augmented matrix reaches **reduced row echelon form**. At this stage, the solutions appear directly in the matrix without the need for back-substitution. Gauss-Jordan is more straightforward for smaller systems and helps visualize the solution clearly.

These elimination techniques use three valid row operations:
- Swapping two rows
- Multiplying a row by a non-zero constant
- Adding or subtracting a multiple of one row to another

Using such operations ensures that the solution of the system remains unchanged.

The graphical interpretation of a system with two variables helps in understanding the results:
- If lines intersect at one point → **Unique Solution**
- If lines overlap completely → **Infinite Solutions**
- If lines are parallel → **No Solution**

This experiment demonstrates how matrix transformations provide a systematic approach to solving linear equations and how visualization aids in understanding the nature of the solution.
