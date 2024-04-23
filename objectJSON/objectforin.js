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
for(let key in myResume){
    //console.log(key)
    let values = myResume[key]
console.log(key, values);
}
console.log('...............')
for(let key in myResume.skills){
console.log(`${key}:${myResume.skills[key]}`)
}
console.log('...............')
for(let key in myResume.contact){
    console.log(`${key}:${myResume.contact[key]}`)
}



