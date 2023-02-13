fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(response => {
        response.json()
        .then(parsedResponse => {

            // All students with an average grade higher than 3
            let averageGradeHigherThan3 =parsedResponse.filter((grade) => grade.averageGrade > 3);
            console.log (averageGradeHigherThan3);
            
            // All female student names with an average grade of 5
            parsedResponse
            .filter((student) => student.gender ==="Female" && student.averageGrade === 5)
            .forEach((student)=> console.log(`Name: ${student.firstName}, Average grade: ${student.averageGrade}`));
            
            // All male student full names who live in Skopje and are over 18 years old
            parsedResponse
            .filter((student) => student.gender ==="Male" && student.city=== "Skopje" && student.age > 18)
            .forEach((student) =>console.log( `${student.firstName} ${student.lastName}`));
            
            // The average grades of all female students over the age of 24
            let famleAverageGradesOver24Years=parsedResponse
            .filter ((student) => student.gender === "Female" && student.age > 24)
            .map ((student)=> student.averageGrade);
            console.log (famleAverageGradesOver24Years);

            // All male students with a name starting with B and average grade over 2
            let maleNameWithBAverageGradeOver2 = parsedResponse
            .filter((student) => student.gender === "Male" && student.firstName.startsWith("B",0) && student.averageGrade >2);
            console.log (maleNameWithBAverageGradeOver2);
        
    

        })
    })
    .catch(e => {
        console.error(e);
    })