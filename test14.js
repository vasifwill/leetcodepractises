// // const data = [
// //  {
// //     'dep':'Design',
// //     'title':'Web Redesigning',
// //     'subTitle':'Modify the contents',
// //     'dueDate': new Date,
// //     'prioraty':'Urgent',
// //     'assignto':['vasif', 'Mamed', 'Elmar', 'Elisa']
// //     },
// //     {
// //       'dep':'Marketing',
// //       'title':'Web solution',
// //       'subTitle':'Change the contents',
// //       'dueDate': new Date,
// //       'prioraty':'Proccessing',
// //       'assignto':['Ceyran', 'Elmar', 'Elisa']
// //       }

// // ]

// // const result = data.filter((item,index) => item.dep === 'Marketing')

// // console.log(result)

let data = "Vasif Mammadov"

// // //VM
let result = data.split(" ").map(item => item[0].toUpperCase()).join("")

console.log(result)

// // //V
// // let result1 = data.charAt(0).toUpperCase()

// // let letters = '0123456789ABCDEF';
// // 	let color = '#';
// // 	for (let i = 0; i < 6; i++) {
// // 		color += letters[Math.floor(Math.random() * 16)];
// // 	}

// // console.log(color)
// const contacts = [
//     {
//         name: 'Anton Mayer',
//         email: 'antoncahn@gmail.com',
//     },
//     {
//         name: 'Anja Shculz',
//         email: 'anja.shculz@gmail.com',
//     },
//     {
//         name: 'Benedict Ziegler',
//         email: 'benedict.ziegler@gmail',
//     },
//     {
//         name: 'David Eisenberg',
//         email: 'david.hanson@gmail.com',
//     },
//     {
//         name: 'Eva Fischer',
//         email: 'evafischer@gmail.com',
//     },
//     {
//         name: 'Emanuael Moe',
//         email: 'emmanuael@gmail.com',
//     },
//     {
//         name: 'Macel Bauer',
//         email: 'maxmacel@gmail.com',
//     },
//     {
//         name: 'Vasif Mamed',
//         email: 'vasif@gmail.com',
//     },
//     {
//         name: 'Anja Shculz',
//         email: 'anja.shculz@gmail.com',
//     },
//     {
//         name: 'Benedict Ziegler',
//         email: 'benedict.ziegler@gmail',
//     },
// ];
// const sortContactByGroup = (contacts) => {
// 	let groups = {};

// 	contacts.forEach((contact) => {
// 		let firstLetter = contact.name.charAt(0).toUpperCase();

// 		if (!groups[firstLetter]) {
// 			groups[firstLetter] = [];
// 		}
// 		groups[firstLetter].push(contact);
// 	});

// 	return groups;
// };

// console.log(sortContactByGroup(contacts));


// const initialUrl = `/posts/${postId}/comments/${commentId}`;
// const initialUrl = "/posts/:postId/comments/:commentId";

// const replaceParamsInUrl  = (url, data) => {
//     let postid = data.filter(item => item.from === "postId" )[0].to;
//     let comments = data.filter(item => item.from === "commentId" )[0].to;
//     let result1 = url.split(" ").join(" ")

//    let result =  result1.replace(':postId', postid)
//    let result2 = result.replace(':commentId', comments)
//     return result2
    
// }

// const resulturl = replaceParamsInUrl(initialUrl, [{ from: "postId", to: "1" },{ from: "commentId", to: "3" }]) ;

// console.log(resulturl)


// posts/1/comments/3