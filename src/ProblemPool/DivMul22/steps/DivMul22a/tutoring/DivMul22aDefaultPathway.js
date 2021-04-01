var hints = [{id: "DivMul22a-h1", type: "hint", dependencies: [], title: "Simplification", text: "With these more complicated equations the first step is to simplify both sides of the equation as much as possible."}, {id: "DivMul22a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6r+12-12=30"], dependencies: ["DivMul22a-h1"], title: "Simplification", text: "Simplify both sides of the equation using the distributive property first."}, {id: "DivMul22a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6r=30"], dependencies: ["DivMul22a-h2"], title: "Simplification", text: "Simplify this equation with addition property."}, {id: "DivMul22a-h4", type: "hint", dependencies: ["DivMul22a-h3"], title: "Isolation", text: "Using multiplication property, division property etc. to isolate the variable."}, {id: "DivMul22a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["r=-5"], dependencies: ["DivMul22a-h4"], title: "Division", text: "Divide both sides by -6 to isolate r."}, {id: "DivMul22a-h6", type: "hint", dependencies: ["DivMul22a-h5"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul22a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul22a-h6"], title: "Verification", text: "Check whether $$-\\left(6\\right) \\left(\\left(-5\\right)-\\left(2\\right)\\right)-\\left(12\\right)$$ equals 30.", choices: ["TRUE", "FALSE"]}, ]; export {hints};