const myResume = {
	name : 'Srikiruba',
	age:23,
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
Object.keys(myResume).forEach(key => {
    let value = myResume[key];
    console.log(key, value);
});
console.log('----------------');
Object.values(myResume).forEach(value => {
    console.log(value);
});
console.log('----------------');
Object.entries(myResume).forEach(([key, value]) =>{
    console.log(key, value);
});