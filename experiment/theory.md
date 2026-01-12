## Theory

### Introduction to Systems of Linear Equations
A system of simultaneous linear equations consists of two or more linear equations involving multiple unknown variables. Such systems arise frequently in engineering, physics, economics, and computer science. A system of linear equations can be expressed in matrix form, which provides a compact and systematic way to analyze and solve the equations.

A general system of linear equations can be written as:

<img width="100" height="30" alt="image" src="https://github.com/user-attachments/assets/d4d62e03-b3ab-4f52-bc84-e07fcdd938e0" />

where 𝐴 is the coefficient matrix, 𝑋 is the column vector of unknowns, and 𝐵 is the constant vector. To solve the system, the augmented matrix [𝐴∣𝐵] is commonly used.

### Gaussian Elimination Method
Gaussian Elimination is a numerical technique used to solve systems of linear equations by transforming the augmented matrix into an upper triangular form using elementary row operations. These operations include swapping rows, multiplying a row by a non-zero constant, and adding or subtracting a multiple of one row from another.

Consider the system:

<img width="223" height="106" alt="image" src="https://github.com/user-attachments/assets/d2615387-a2ef-45b7-84be-8bbe70812348" />

The augmented matrix is:


<img width="205" height="115" alt="image" src="https://github.com/user-attachments/assets/bd951cbd-40f4-420c-919d-e897b21169d1" />

By applying elementary row operations, the matrix is converted into an upper triangular form:

<img width="206" height="106" alt="image" src="https://github.com/user-attachments/assets/f39ee6d6-1cfc-4172-9ade-bb874ac2643c" />

Once this form is obtained, the solution is found using back-substitution.

### Gauss–Jordan Elimination Method

Gauss–Jordan Elimination is an extension of Gaussian Elimination in which the augmented matrix is further reduced to reduced row echelon form (RREF). In this form, the leading coefficient of each row is 1, and all other elements in the corresponding column are zero. This allows the solution to be read directly from the matrix without back-substitution.

Continuing from the upper triangular matrix, further row operations yield:

<img width="180" height="96" alt="image" src="https://github.com/user-attachments/assets/8c47763b-d5a9-463c-9652-d805768bc789" />

From this matrix, the solution is obtained directly as:

<img width="253" height="23" alt="image" src="https://github.com/user-attachments/assets/8f2e6c49-0cac-4bb4-afe6-ce50b6b58a7e" />

### Valid Row Operations

Both Gaussian and Gauss–Jordan elimination methods rely on the following elementary row operations:

- Interchanging two rows

- Multiplying a row by a non-zero constant

- Adding or subtracting a multiple of one row to another

These operations preserve the equivalence of the system and do not alter the solution.

### Nature of Solutions

The nature of the solution to a system of linear equations can be interpreted from the transformed matrix:

- A unique solution exists if each variable has a leading 1 in the matrix.

- Infinite solutions occur when at least one variable is free.

- No solution occurs when a row reduces to an inconsistent equation.

Graphically, for systems with two variables:

- Intersecting lines indicate a unique solution.

- Coincident lines indicate infinitely many solutions.

- Parallel lines indicate no solution.

### Importance and Applications
Solving systems of linear equations using matrix methods is fundamental in numerical computation. These techniques are widely used in circuit analysis, structural engineering, optimization problems, computer graphics, and data science, where efficient and systematic solutions are required.
