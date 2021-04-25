let student = {
    name: 'Sarah',
    'Grad Year': '2022',
    greeting: function() { console.log("Hello!"); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
console.log(student.courseLoad[0]) ;
console.log('3'+2, '3'-2, 3+null, '3'+null, true+3, false+null, '3'+undefined, '3'-undefined);
console.log('2' > 1, '2' < '12', 2 == '2', 2 === '2', true == 2, true == Boolean(2))