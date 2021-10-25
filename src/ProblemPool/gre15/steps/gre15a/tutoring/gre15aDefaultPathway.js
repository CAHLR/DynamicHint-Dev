var hints = [{id: "gre15a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes and write the variables with exponents in expanded form. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "gre15a-h2", type: "hint", dependencies: ["gre15a-h1"], title: "Factor First Expression", text: "$$\\left(10\\right) p^3 q=\\left(5\\right) \\left(2\\right) p p p q$$", variabilization: {}}, {id: "gre15a-h3", type: "hint", dependencies: ["gre15a-h2"], title: "Factor Second Expression", text: "$$\\left(12\\right) p q^2=\\left(2\\right) \\left(2\\right) \\left(3\\right) p q q$$", variabilization: {}}, {id: "gre15a-h4", type: "hint", dependencies: ["gre15a-h2", "gre15a-h3"], title: "Identify Common Factors in each Column", text: "$$\\left(10\\right) p^3 q=\\left(5\\right) \\left(2\\right) p p p q$$ $$\\left(12\\right) p q^2=\\left(2\\right) \\left(2\\right) \\left(3\\right) p q q$$ 2, p, and q are shared by both expressions.", variabilization: {}}, {id: "gre15a-h5", type: "hint", dependencies: ["gre15a-h4"], title: "Multiply Common Factors", text: "Bring down the 2, p, and q, and then multiply. $$GCF=\\left(2\\right) p q$$", variabilization: {}}, {id: "gre15a-h6", type: "hint", dependencies: ["gre15a-h5"], title: "Multiply Common Factors", text: "$$GCF=\\left(2\\right) p q$$", variabilization: {}}, ]; export {hints};