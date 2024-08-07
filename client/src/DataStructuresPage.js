import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("javascript", js);

const declareArray = ` const cars = ["Mercedes", "Volvo", "BMW"];`;

const accessElementInArray = `cars[0];
 // return 'Mercedes'
 cars[2];
 // return 'BMW'
`;
const arrayMethods = `cars.length();
    // returns 3
    cars.sort();
    // returns ["BMW", "Mercedes", "Volvo"]
  `;
const arrayLoop = `const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fLen = fruits.length;
  
  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
  }
  text += "</ul>";`;

const concatenationString = `let firstName = 'Amandha';
let lastName= 'Barok';
let fullName = firstName.concat(lastName);
// fullName = 'AmandhaBarok'
`;

const substring = `const student = 'Amandha';
const substring1 = student.substring(0,3);
// substring1 = 'Ama'
`;

const searchString = `const string = 'JesusIsTheWay';
let result = string.search('Jesus');
// result = 0`;

const createTree = `function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}`;

const doublyLinkedList = `class Node {
  constructor(data)
  {
    // Store the value (the node itself)
    this.data = data;
    // Reference to the previous node
    this.prev = null;
    // Reference to the next node
    this.next = null;
  }
}`;

const singlyLinkedList = `class Node {
  constructor(data)
  {
    // Store the value (the node itself)
    this.data = data;
    // Reference to the next node
    this.next = null;
  }
}`;

const exampleOSquare = `function selectionSort(list) {
  for(i from 0 to List.length) {
    smallestElement = list[i];
    for(j from i to list.length) {
      if(smallestElement > list[j]) {
        smallestElement = list[j]
      }
    }
      swap(list[i], smallestElement)
  }
}`;

const exampleLinearSearch = `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i // Return the index of the target element
    }
  }
    return -1 // Target not found
}`;

const exampleBinarySearch = `function binarySearch(arr, target) {
  let left = 0
  let right = arr.length -1;

  while (left <= right):
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid -1; // Search in the left half
    }

  return -1; // Target not found
}`;

const DataStructuresPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Understanding Data Structures</h1>
      </header>

      <section style={styles.section}>
        <h2>Introduction to Data Structures</h2>
        <p>
          A data structure is a method of organizing data in a virtual system.
          Think of sequences of numbers, or tables of data: these are both
          well-defined data structures. An algorithm is a sequence of steps
          executed by a computer that takes an input and transforms it into a
          target output. Together, data structures and algorithms combine and
          allow programmers to build whatever computer programs they would like.
          Deep study into data structures and algorithms ensures well-optimized
          and efficient code.
        </p>
        <h2>How Do Data Structures and Algorithms Work Together?</h2>
        <p>
          There are many algorithms for different purposes. They interact with
          different data structures in the same computational complexity scale.
          Think of algorithms as dynamic underlying pieces that interact with
          static data structures.
        </p>
        <p>
          The way data is expressed in code is flexible. Once you understand how
          algorithms are built, you can generalize across different programming
          languages. In a sense, it is a bit like knowing how a related family
          of languages work syntactically. Once you glimpse the fundamental
          rules behind programming languages and their organizing principles,
          you can more easily switch between the different languages and learn
          each faster.
        </p>
        <h2>Common Data Structures and Algorithms</h2>
      </section>

      <section style={styles.section}>
        <h2>Arrays</h2>
        <p>
          An array is a collection of items stored at contiguous memory
          locations. The idea is to store multiple items of the same type
          together. This makes it easier to calculate the position of each
          element by simply adding an offset to a base value, i.e., the memory
          location of the first element of the array (generally denoted by the
          name of the array).
        </p>
        <img src="images/array_explanation.jpeg" width={600} height={350} />
        <h4>Advantages:</h4>
        <ul>
          <li>Direct access to elements using an index.</li>
          <li>
            Efficient for storing and accessing a fixed number of elements.
          </li>
        </ul>
        <h4>Disadvantages:</h4>
        <ul>
          <li>
            Fixed size: the size of an array must be known at compile time.
          </li>
          <li>Insertion and deletion operations can be costly.</li>
        </ul>
        <h4>Example of usage in JavaScript:</h4>
        <p>To declare a new array in JavaScript is as follows:</p>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {declareArray}
        </SyntaxHighlighter>
        <p>
          After declaring this array, it is easier to access it in O(1) time
          (big O notation is explained below).{" "}
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {accessElementInArray}
        </SyntaxHighlighter>
        <p>
          It is important to mention that array indexing starts with 0, so the
          first element on the array is on the position zero.
        </p>
        <h4>Array properties and methods:</h4>
        <p>
          The real strength of JavaScript arrays are the built-in array
          properties and methods:
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {arrayMethods}
        </SyntaxHighlighter>
        <h4>Looping Array elements</h4>
        <p>One way of loop through an array, is using a FOR loop</p>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {arrayLoop}
        </SyntaxHighlighter>
      </section>

      <section style={styles.section}>
        <h2>Strings</h2>
        <p>
          A string is a data type used in programming, that is used to represent
          text rather than numbers. A string is a sequence of characters and can
          contain letters, numbers, symbols and even spaces. It must be enclosed
          in quotation marks for it to be recognized as a string.
        </p>
        <img src="images/string_explanation.jpeg" width={600} height={350} />
        <h4>Common Operations:</h4>
        <h3>Concatenation</h3>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {concatenationString}
        </SyntaxHighlighter>
        <p>
          This method is used to combine two strings as shown in the example.
        </p>
        <h3>Substring</h3>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {substring}
        </SyntaxHighlighter>
        <p>
          The substring() method of String values returns the part of this
          string from the start index up to and excluding the end index, or to
          the end of the string if no end index is supplied.
        </p>
        <h3>Search</h3>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {searchString}
        </SyntaxHighlighter>
        <p>
          The search() method in JavaScript is used to search for a specified
          substring within a string. It returns the index of the first
          occurrence of the substring within the string. If the substring is not
          found, it returns -1.
        </p>
      </section>
      <section style={styles.section}>
        <h2>Trees</h2>
        <p>
          A tree is a hierarchical data structure that consists of nodes
          connected by edges. The top node is called the root, and each node can
          have children nodes. Common types of trees include binary trees, AVL
          trees, and B-trees.
        </p>
        <img src="images/tree_explanation.jpeg" width={550} height={500} />
        <h4>Types of Trees:</h4>
        <ul>
          <li>
            <strong>Binary Tree:</strong> Each node has at most two children,
            referred to as the left child and the right child. It is commonly
            used in computer science for efficient storage and retrieval of
            data, with various operations such as insertion, deletion, and
            traversal.
          </li>
          <img
            src="images/binary_tree_explanation.jpeg"
            width={450}
            height={400}
          />
          <li>
            <strong>Binary Search Tree Tree:</strong> Each node in a Binary
            Search Tree has at most two children, a left child and a right
            child, with the left child containing values less than the parent
            node and the right child containing values greater than the parent
            node. This hierarchical structure allows for efficient searching,
            insertion, and deletion operations on the data stored in the tree.
          </li>
          <img
            src="images/binary_search_tree_explanation.jpeg"
            width={550}
            height={400}
          />
        </ul>
        <h4>Example:</h4>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {createTree}
        </SyntaxHighlighter>
      </section>

      <section style={styles.section}>
        <h2>Linked List</h2>
        <p>
          A linked list is a linear data structure that consists of a series of
          nodes connected by pointers (in C or C++) or references (in Java,
          Python and JavaScript). Each node contains data and a
          pointer/reference to the next node in the list. Unlike arrays, linked
          lists allow for efficient insertion or removal of elements from any
          position in the list, as the nodes are not stored contiguously in
          memory.
        </p>
        <img
          src="images/linked_list_explanation.jpeg"
          width={550}
          height={500}
        />
        <h4>Types of Linked List:</h4>
        <ul>
          <li>
            <strong>Singly Linked List:</strong> Each element is connected only
            to its next element using a pointer.
          </li>
          <img
            src="images/singly_linked_list_explanation.jpeg"
            width={450}
            height={400}
          />
          <h4>Example (Singly Linked List):</h4>
          <SyntaxHighlighter
            language="javascript"
            style={monokai}
            showLineNumbers={true}
          >
            {singlyLinkedList}
          </SyntaxHighlighter>
          <li>
            <strong>Doubly Linked List:</strong> A doubly linked list is a more
            complex data structure than a singly linked list, but it offers
            several advantages. The main advantage of a doubly linked list is
            that it allows for efficient traversal of the list in both
            directions. This is because each node in the list contains a pointer
            to the previous node and a pointer to the next node. This allows for
            quick and easy insertion and deletion of nodes from the list, as
            well as efficient traversal of the list in both directions.
          </li>
          <img
            src="images/doubly_linked_list_explanation.jpeg"
            width={550}
            height={400}
          />
        </ul>
        <h4>Example (Doubly Linked List):</h4>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {doublyLinkedList}
        </SyntaxHighlighter>
      </section>

      <section style={styles.section}>
        <h2>Big O Notation</h2>
        <p>
          Big O notation is one of the most fundamental tools for computer
          scientists to analyze the cost of an algorithm. It is a good practice
          for software engineers to understand in-depth as well.
        </p>
        <p>
          Going deeper, Big O notation is a mathematical notation that describes
          the limiting behavior of a function when the argument tends towards a
          particular value or infinity. It is a member of a family of notations
          invented by Paul Bachmann, Edmund Landau, and others, collectively
          called Bachmann Landau notation or asymptotic notation. In plain
          words, Big O notation describes the complexity of a code using
          algebraic terms.
        </p>
        <h4>Examples:</h4>
        <h4>O(n²):</h4>
        <p>
          To understand what Big O notation is, we can take a look at a typical
          example, O(n²), which is usually pronounced “Big O squared”. The
          letter “n” here represents the input size, and the function “g(n) =
          n²” inside the “O()” gives us an idea of how complex the algorithm is
          with respect to the input size.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {exampleOSquare}
        </SyntaxHighlighter>
        <h4>O(n):</h4>
        <p>
          The code code below iterates through each element on the array and
          checks if it is equal to the target. The item will increase in time
          complexity as the function’s parameter array is longer. Because it
          will signifincalty increase the number of iterations.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {exampleLinearSearch}
        </SyntaxHighlighter>
        <h4>O(log n):</h4>
        <p>
          A classic example of algorithm that runs in O(log n) time is Binary
          Search. As shown in the code below, in each step, the array is divided
          into two, effectively reducing the problem size by half.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={monokai}
          showLineNumbers={true}
        >
          {exampleBinarySearch}
        </SyntaxHighlighter>
        <h4>Graph Comparation Between Them:</h4>
        <img src="images/graph_bigO_notation.png" width={550} height={500} />
        <p>y = Operations</p>
        <p>x = Elements</p>
      </section>

      {/* <section style={styles.section}>
        <h2>Searching Algorithms</h2>
        <p>Searching algorithms are designed to check for an element or retrieve an element from any data structure where it is stored. Here are two common searching algorithms:</p>
      </section>
      
      <section style={styles.section}>
        <h3>Brute Force Search</h3>
        <p>Brute force search is the most straightforward approach. It checks each element of the list sequentially until the desired element is found or the list ends.</p>
        <h4>Example:</h4>
        <p>To find the number 5 in the array [1, 2, 3, 4, 5], the brute force search will check each element one by one until it finds 5.</p>
        <h4>Time Complexity:</h4>
        <p>O(n) - Linear time, as each element is checked sequentially.</p>
      </section>
      
      <section style={styles.section}>
        <h3>Binary Search</h3>
        <p>Binary search is a more efficient algorithm that works on sorted arrays. It repeatedly divides the search interval in half. If the value of the search key is less than the item in the middle of the interval, it narrows the interval to the lower half. Otherwise, it narrows it to the upper half. It continues until the value is found or the interval is empty.</p>
        <h4>Example:</h4>
        <p>To find the number 5 in the sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9], binary search will first check the middle element (5) and find it immediately.</p>
        <h4>Time Complexity:</h4>
        <p>O(log n) - Logarithmic time, as the search interval is halved with each step.</p>
      </section> */}

      <section style={styles.section}>
        <h2>Educational Materials</h2>
        <p>
          Below are some resources to help you understand these concepts better:
        </p>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/data-structures/">
              GeeksforGeeks: Data Structures
            </a>
          </li>
          <li>
            <a href="https://www.bigocheatsheet.com/">Big O Cheat Sheet</a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/mycodeschool">
              YouTube: MyCodeSchool
            </a>
          </li>
          <li>
            <a href="https://visualgo.net/en">
              VisuAlgo: Data Structures and Algorithms
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
  },
  header: {
    backgroundColor: "#FFC0CB",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  },
  section: {
    marginBottom: "20px",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
};

export default DataStructuresPage;
