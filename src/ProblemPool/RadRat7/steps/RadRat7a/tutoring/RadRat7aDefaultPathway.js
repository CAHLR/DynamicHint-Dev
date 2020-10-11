var hints = [{id: "RadRat7a-h1", type: "hint", dependencies: [], title: "The Quotient Rule for Simplifying Square Roots", text: "The square root of the quotient $$\\frac{a}{b}$$ is equal to the quotient of the square roots of a and b, where b≠0:sqrt(a/b)=sqrt(a)/sqrt(b)"}, {id: "RadRat7a-h2", type: "hint", dependencies: ["RadRat7a-h1"], title: "The Quotient Rule for Simplifying Square Roots", text: "Use the quotient rule to simplify the expression:sqrt((2x**2)/(9y**4))=sqrt(2x**2)/sqrt(9y**4)"}, {id: "RadRat7a-h3", type: "hint", dependencies: ["RadRat7a-h2"], title: "Principal Square Root", text: "The principal square root of a is the nonnegative number that, when multiplied by itself, equals a. It is written as a radical expression, with a symbol called a radical over the term called the radicand: $$\\sqrt{a}$$."}, {id: "RadRat7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3y^2"], dependencies: ["RadRat7a-h3"], title: "Principal Square Root", text: "What number multiplied by itself equals $$9y^4$$?"}, {id: "RadRat7a-h5", type: "hint", dependencies: ["RadRat7a-h4"], title: "Principal Square Root", text: "Simplify the expression:sqrt(2x**2)/sqrt(9y**4)=x*sqrt(2)/3y**2"}, ]; export {hints};