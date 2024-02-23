## Module 32-1 Module Overview, Primitive And Non-Primitive Data Type

### Strongly Typed VS Dynamically Typed

Strongly typed languages and dynamically typed languages represent different approaches to how variables are handled and enforced in a programming language.

1. **Strongly Typed Language**:
   - In a strongly typed language, each variable is bound to a specific data type.
   - Type checking is performed at compile-time, ensuring that types are used consistently and appropriately throughout the code.
   - It offers more strictness and can prevent certain types of errors related to data type mismatches.
   - Examples of strongly typed languages include Java, C#, and Swift.

2. **Dynamically Typed Language**:
   - In a dynamically typed language, variables are not bound to a specific data type during declaration; instead, the data type is inferred at runtime.
   - Type checking is performed at runtime, allowing for more flexibility but potentially leading to runtime errors if types are used inconsistently.
   - It offers more flexibility and concise code but might require more testing to catch certain types of errors.
   - Examples of dynamically typed languages include Python, JavaScript, and Ruby.

Here's a comparison of the two approaches:

| Aspect                  | Strongly Typed Language                                     | Dynamically Typed Language                                  |
|-------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| Type Declaration        | Explicitly declared data types                               | Type inference or no explicit declaration required           |
| Type Checking           | Done at compile-time                                        | Done at runtime                                             |
| Error Detection         | Can catch certain errors at compile-time                    | Errors may only be caught at runtime                         |
| Flexibility             | More rigid due to strict typing                             | More flexible due to dynamic typing                         |
| Development Speed       | May require more explicit type handling, potentially slower  | Often allows for faster development due to less verbosity    |
| Debugging               | Some errors can be caught early during compilation          | May require runtime debugging for type-related issues       |
| Code Readability        | Type annotations can enhance readability and understanding  | Less cluttered due to lack of explicit type annotations      |

The choice between using a strongly typed or dynamically typed language often depends on factors such as the project requirements, team preferences, and the specific use case. Each approach has its advantages and drawbacks, and the suitability of one over the other can vary depending on the context.

## Primitive VS Non-primitive

In programming, data types classify various types of data that can be used in a program. These data types can be categorized broadly into two main categories: primitive data types and non-primitive (or reference) data types.

1. **Primitive Data Types**:
   - Primitive data types are basic data types that are directly supported by the programming language.
   - They are the building blocks for more complex data structures.
   - They usually represent simple values and are not composed of other types.
   - Examples of primitive data types include integers, floating-point numbers, characters, booleans, and pointers.
   - Primitive data types typically have a fixed size and are stored directly in memory.

2. **Non-Primitive (Reference) Data Types**:
   - Non-primitive data types are also known as reference data types.
   - They are more complex data types that are constructed using primitive data types or other non-primitive data types.
   - Unlike primitive data types, non-primitive data types do not store the actual data values directly; instead, they store references or addresses to where the data is stored.
   - Examples of non-primitive data types include arrays, strings, objects, classes, and interfaces.
   - Non-primitive data types can have variable sizes and structures, depending on the data they represent.

Here's a comparison between primitive and non-primitive data types:

| Aspect                  | Primitive Data Types                                         | Non-Primitive Data Types                                     |
|-------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| Examples                | int, float, char, boolean                                    | Arrays, Strings, Objects, Classes, Interfaces               |
| Direct Storage          | Stored directly in memory                                    | Store references to data locations                           |
| Size                    | Fixed size                                                   | Variable size                                                |
| Mutability               | Immutable (in some languages)                                 | Mutable                                                      |
| Memory Allocation       | Allocated on the stack or heap depending on the language     | Allocated on the heap (in languages with garbage collection) |

The choice between primitive and non-primitive data types depends on the requirements of the program and the nature of the data being manipulated. Primitive types are often used for simple data storage and manipulation, while non-primitive types are used for more complex data structures and object-oriented programming paradigms.

---