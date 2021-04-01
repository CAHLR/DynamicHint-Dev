var hints = [{id: "Formula1a-h1", type: "hint", dependencies: [], title: "Read and Understand the Problem", text: "The question tells us that Jamal rides his bike at the speed of 12 miles per hour which means that every hour he is riding 12 miles."}, {id: "Formula1a-h2", type: "hint", dependencies: ["Formula1a-h1"], title: "Identify the Unknown", text: "We are looking for the total distance traveled and we can name it \"d\""}, {id: "Formula1a-h3", type: "hint", dependencies: ["Formula1a-h2"], title: "Translate", text: "We can use the formula $$distance=rate time$$ --> $$d=rt$$"}, {id: "Formula1a-h4", type: "hint", dependencies: ["Formula1a-h3"], title: "Substitute", text: "Since we are given that the rate is 12 mph and the time is 3.5 hours, we can substitute $$r=12$$, $$t=3.5$$ and get d=(12)*(3.5)."}, {id: "Formula1a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["42"], dependencies: ["Formula1a-h4"], title: "Evaluate", text: "Evaluate $$\\left(12\\right) \\left(3.5\\right)$$ to find the distance in miles. What is the distance?"}, ]; export {hints};