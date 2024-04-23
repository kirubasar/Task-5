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
const key = Object.keys(myResume)
for(let ind =0; ind <key.length; ind++){
    //console.log(key[ind])
    let keys = key[ind];
    let values = myResume[keys];
    console.log(keys, values);
}
 