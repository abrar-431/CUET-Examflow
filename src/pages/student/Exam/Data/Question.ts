import { Question } from "../../../../types/exam";

export const questions: Question[] = [
  {
    "id": 1,
    "course": "Algorithm",
    "text": "In the Greedy approach, the solution is built step by step by making which type of choice at each step?",
    "options": ["Global optimum", "Local optimum", "Random choice", "Random optimum"],
    "correctAnswer": 1
  },
  {
    "id": 2,
    "course": "Algorithm",
    "text": "In the Fractional Knapsack problem, which of the following is allowed?",
    "options": ["Breaking the items into fractions", "Selecting only whole items", "Selecting only the smallest items", "None of the above"],
    "correctAnswer": 0
  },
  {
    "id": 3,
    "course": "Algorithm",
    "text": "What is the time complexity of Dijkstra's algorithm when using a priority queue implemented with a binary heap?",
    "options": ["O(V^2)", "O(E log V)", "O(V log E)", "O(V + E)"],
    "correctAnswer": 1
  },
  {
    "id": 4,
    "course": "Algorithm",
    "text": "In the 0/1 Knapsack problem, which of the following best describes the solution approach?",
    "options": ["Greedy approach", "Divide and conquer", "Dynamic programming", "Brute force"],
    "correctAnswer": 2
  },
  {
    "id": 5,
    "course": "Algorithm",
    "text": "In Prim's algorithm for minimum spanning tree (MST), which data structure is often used to store the graph?",
    "options": ["Adjacency matrix", "Adjacency list", "Hash table", "Both adjacency matrix and list"],
    "correctAnswer": 1
  },
  {
    "id": 6,
    "course": "Algorithm",
    "text": "What is the time complexity of the Greedy algorithm for the Fractional Knapsack problem?",
    "options": ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
    "correctAnswer": 1
  },
  {
    "id": 7,
    "course": "Algorithm",
    "text": "What is the optimal greedy choice for the activity selection problem?",
    "options": ["Choose the longest activity", "Choose the earliest finishing activity", "Choose the activity that starts the earliest", "Choose the most popular activity"],
    "correctAnswer": 1
  },
  {
    "id": 8,
    "course": "Algorithm",
    "text": "In the Knapsack problem, if the weight of an item exceeds the remaining capacity of the knapsack, what should happen?",
    "options": ["The item is discarded", "The item is partially taken", "The item is taken whole", "None of the above"],
    "correctAnswer": 0
  },
  {
    "id": 9,
    "course": "Algorithm",
    "text": "Which algorithm is used for finding the shortest path in a graph with negative weight edges?",
    "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm"],
    "correctAnswer": 2
  },
  {
    "id": 10,
    "course": "Algorithm",
    "text": "In the context of the Knapsack problem, what is the goal of dynamic programming?",
    "options": ["To store the best solution for every subproblem", "To find the largest possible solution", "To approximate the solution", "To use greedy decisions"],
    "correctAnswer": 0
  },
  {
    "id": 11,
    "course": "Algorithm",
    "text": "Which of the following is a characteristic of a greedy algorithm?",
    "options": ["It always guarantees an optimal solution", "It works by taking the best available option at each step", "It uses dynamic programming", "It requires backtracking"],
    "correctAnswer": 1
  },
  {
    "id": 12,
    "course": "Algorithm",
    "text": "What is the worst-case time complexity of Kruskal's algorithm for finding the minimum spanning tree?",
    "options": ["O(E log E)", "O(V log V)", "O(V^2)", "O(E + V)"],
    "correctAnswer": 0
  },
  {
    "id": 13,
    "course": "Algorithm",
    "text": "In the Traveling Salesman Problem (TSP), which of the following algorithms can be used to approximate the solution?",
    "options": ["Greedy algorithm", "Dijkstra's algorithm", "Floyd-Warshall algorithm", "Kruskal's algorithm"],
    "correctAnswer": 0
  },
  {
    "id": 14,
    "course": "Algorithm",
    "text": "Which of the following is NOT a greedy algorithm?",
    "options": ["Prim's algorithm", "Huffman coding", "Dijkstra's algorithm", "Bellman-Ford algorithm"],
    "correctAnswer": 3
  },
  {
    "id": 15,
    "course": "Algorithm",
    "text": "In Kruskal's algorithm, what is the key operation that makes it efficient?",
    "options": ["Merging sets", "Sorting edges", "Selecting minimum weight edges", "Greedy selection of edges"],
    "correctAnswer": 1
  },
  {
    "id": 16,
    "course": "Algorithm",
    "text": "In a directed graph, what is the time complexity of topological sorting using depth-first search (DFS)?",
    "options": ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
    "correctAnswer": 0
  },
  {
    "id": 17,
    "course": "Algorithm",
    "text": "Which of the following is an example of a greedy algorithm?",
    "options": ["Knapsack problem", "Merge Sort", "Quick Sort", "Huffman coding"],
    "correctAnswer": 3
  },
  {
    "id": 18,
    "course": "Algorithm",
    "text": "In the Bellman-Ford algorithm, what happens if a negative weight cycle is detected?",
    "options": ["The algorithm terminates and reports the cycle", "The algorithm continues", "The cycle is ignored", "The shortest path is recomputed"],
    "correctAnswer": 0
  },
  {
    "id": 19,
    "course": "Algorithm",
    "text": "What is the time complexity of the dynamic programming approach for the 0/1 Knapsack problem?",
    "options": ["O(n)", "O(W)", "O(nW)", "O(2^n)"],
    "correctAnswer": 2
  },
  {
    "id": 20,
    "course": "Algorithm",
    "text": "In the greedy algorithm for activity selection, which choice leads to an optimal solution?",
    "options": ["Choosing the longest activity", "Choosing the earliest finishing activity", "Choosing the most expensive activity", "Choosing the most time-consuming activity"],
    "correctAnswer": 1
  },
  {
    "id": 21,
    "course": "Algorithm",
    "text": "What is the time complexity of the greedy algorithm used in the Huffman coding problem?",
    "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    "correctAnswer": 1
  },
  {
    "id": 22,
    "course": "Data Structure",
    "text": "Which data structure follows the Last In, First Out (LIFO) principle?",
    "options": ["Queue", "Stack", "Linked List", "Array"],
    "correctAnswer": 1
  },
  {
    "id": 23,
    "course": "Data Structure",
    "text": "A doubly linked list allows traversal in how many directions?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": 1
  },
  {
    "id": 24,
    "course": "Data Structure",
    "text": "The top element of a stack can be accessed in which time complexity?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    "correctAnswer": 0
  },
  {
    "id": 25,
    "course": "Data Structure",
    "text": "Which data structure is commonly used for implementing function calls?",
    "options": ["Queue", "Stack", "Heap", "Graph"],
    "correctAnswer": 1
  },
  {
    "id": 26,
    "course": "Data Structure",
    "text": "An array is best suited for which type of access pattern?",
    "options": ["Random", "Sequential", "Hierarchical", "Cyclic"],
    "correctAnswer": 0
  },
  {
    "id": 27,
    "course": "Data Structure",
    "text": "Which of the following data structures allows insertion and deletion from both ends?",
    "options": ["Queue", "Deque", "Stack", "Array"],
    "correctAnswer": 1
  },
  {
    "id": 28,
    "course": "Data Structure",
    "text": "A circular queue avoids which problem in a standard queue?",
    "options": ["Overflow", "Underflow", "Memory fragmentation", "Wasted space"],
    "correctAnswer": 3
  },
  {
    "id": 29,
    "course": "Data Structure",
    "text": "The number of pointers required to implement a singly linked list node is:",
    "options": ["0", "1", "2", "3"],
    "correctAnswer": 1
  },
  {
    "id": 30,
    "course": "Data Structure",
    "text": "Which data structure provides the best performance for a priority queue?",
    "options": ["Stack", "Heap", "Array", "Linked List"],
    "correctAnswer": 1
  },
  {
    "id": 31,
    "course": "Data Structure",
    "text": "Which operation is more efficient in a linked list compared to an array?",
    "options": ["Random access", "Searching", "Insertion at the beginning", "Sorting"],
    "correctAnswer": 2
  }
]
