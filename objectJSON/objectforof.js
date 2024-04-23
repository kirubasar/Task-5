const myResume = {
	name : 'Srikiruba',
	age: 23,
	DOB:'14.03.1999',
	address: {
	   street:'3A,TNagar',
	   city: 'Chennai'
        },
	academicProfile: {
	    degree:'M.Sc,.Mathematics',
	    instiution : 'SIGC College',
	    board : 'Bharathidasa University',
	    year : '2021'
        },
	skills :['type writing', 'COA', 'MSOffice'],
        contact:{
	    phone: '9534231890',
	    email: 'srikiruba147@gmail.com'
	 }
        
}
//console.log(myResume);
for(let prop of Object.keys(myResume)) {
//console.log(prop);
    console.log(prop, myResume[prop]);
}
console.log('----------------');
for(let val of Object.values(myResume)) {
    console.log(val);
}