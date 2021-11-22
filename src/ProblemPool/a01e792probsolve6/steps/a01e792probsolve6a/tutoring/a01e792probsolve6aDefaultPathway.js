var hints = [{id: "a01e792probsolve6a-h1", type: "hint", dependencies: [], title: "Translate the problem into an equation", text: "The first step is to translate the question into a mathematical equation.", variabilization: {}}, {id: "a01e792probsolve6a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["n,n+2,n+4"], dependencies: ["a01e792probsolve6a-h1"], title: "Writing consecutive numbers", text: "Which of the following represent consecutive numbers in terms of n?", choices: ["n,n+2,n+4", "n,2n,3n", "n,n+1,n+2"], variabilization: {}}, {id: "a01e792probsolve6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["102"], dependencies: ["a01e792probsolve6a-h2"], title: "Total sum", text: "What should the numbers add up to?", variabilization: {}}, {id: "a01e792probsolve6a-h4", type: "hint", dependencies: ["a01e792probsolve6a-h3"], title: "Solving the equation", text: "The next step is to solve for n", variabilization: {}}, {id: "a01e792probsolve6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["32"], dependencies: ["a01e792probsolve6a-h4"], title: "Solving for n", text: "What is the value of n in the equation $$\\left(3\\right) n+\\left(6\\right)=102$$?", variabilization: {}}, {id: "a01e792probsolve6a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["34"], dependencies: ["a01e792probsolve6a-h5"], title: "Finding the consecutive numbers", text: "What is $$n+\\left(2\\right)$$?", variabilization: {}}, {id: "a01e792probsolve6a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["a01e792probsolve6a-h6"], title: "Finding the consecutive numbers", text: "What is $$n+\\left(4\\right)$$?", variabilization: {}}, ]; export {hints};