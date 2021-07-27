    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const question1 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    console.log(question1);

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const question2 = inventors.map(inventor => {
        return {
            first: inventor.first, 
            last: inventor.last
        }
    });
    console.log(question2);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    inventors.sort((a, b) => {
        if(a.year < b.year) return -1; // Don't swap if a is older than b
        return 1;
    });
    // Testing
    console.log(inventors);


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const question3 = inventors.reduce((acc, obj) => {
        let lifespan = obj.passed - obj.year;
        return acc + lifespan;
    }, 0);
    console.log(question3);


    // 5. Sort the inventors by years lived
    inventors.sort((a,b) => {
        let lifespanA = a.passed - a.year;
        let lifespanB = b.passed- b.year;
        return lifespanA - lifespanB;
    });
    // Testing
    const test5 = inventors.map(inventor => inventor.passed - inventor.year);
    console.log(test5);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const boulevards = Array.from(document.querySelectorAll('.mw-category a'));
    // const deBoulevards = boulevards
    //     .map(b => b.innerText)
    //     .filter(b => b.includes('de'));
    // console.log(deBoulevards);

    /* ITERATIVE SOLUTION */
    // let deBoulevards = [];
    // boulevards.forEach(b => {
    //     if(b.innerText.includes('de')) 
    //         deBoulevards.push(b.innerText);
    // })
    // console.log(deBoulevards);

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    people.sort((a, b) => {
        const lastNameA = a.split(" ")[1];
        const lastNameB = b.split(" ")[1];
        return (lastNameA <= lastNameB) ? -1 : 1;
    });
    console.log(people);

    // 8. Reduce Exercise
    // Sum up the instances of each data (Frequency Count)
    const freq = data.reduce((acc, obj) => {
        (obj in acc) ? acc[obj]++ : acc[obj] = 1;
        return acc;
    }, {});
    console.log(freq);