const myName = 'Cain'
const rank = 'Recruit'
const age = 30

if (age < 18) {
    console.log('You are too young for the military!');
} else if (myName === 'Rugen' && rank === 'Count') {
    console.log('My name is Inigo Montoya, You killed my father, prepare to die.');
} else if (rank === 'Captain') {
    console.log('Aye Aye Captain ${myName}');
} else if (rank === 'Private' && age > 40) {
    console.log('what have you been doing with your life ${myName}?')
} else {
    console.log(`Hello ${rank} ${myName}, I cannot wait to celebrate your ${age + 1}st birthday next year!`)}
