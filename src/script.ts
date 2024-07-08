import { PrismaClient } from "@prisma/client";
import { json } from "stream/consumers";
/**
 * when migration is run it take models from prisma folder
 *  and create some code in node_modules/@prisma/client
 * which is used to interact with database
 * when we write Prisma.User the suggestion we
 * get is from node_modules/@prisma/client
 */
const prisma = new PrismaClient({log:["query","info","warn"]});

// async function  createUser(){

//     try {
//         const response= await prisma.user.create({
//             data:{
//                 Username:"John doe",
//                 Email:"john@gmail.com",
//             }
//         })
//         console.log(response)

//     } catch (error) {
//         console.log(error)

//     }
// }

// createUser().finally(()=>{
//     prisma.$disconnect()
// })

// async function  getSingleuser(){
//     try {
//         const user=await prisma.user.findUnique({
//             where:{
//                 id:1,

//             }

//         })
//         console.log(user)

//     } catch (error) {
//         console.log(error)

//     }
// }

// getSingleuser().finally(()=>{
//     prisma.$disconnect()
// })

// async function CreatePost(title:string,content:string,authorId:number){
//     try {
//         const post=await prisma.post.create({
//             data:{
//                 Title:title,
//                 Content:content,
//                 Author:{
//                     connect:{
//                         id:authorId
//                     }
//                 }
//             }
//         })
//         console.log(post)

//     } catch (error) {
//         console.log(error)

//     }
// }

// CreatePost("Post 1","This is post 1",2).finally(()=>{
//     prisma.$disconnect()
// })

// async function getPostsWithAuthor() {
//   try {
//     const response = await prisma.post.findMany({
//       include: {
//         Author: true,
//       },

    
//     });

//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }


// getPostsWithAuthor().finally(() => {
//     prisma.$disconnect();
//     });



// async function  PostBySpecificUser() {
//     const response = await prisma.post.findMany({
//         where:{
//             authorId:2,
//         },
//         include:{
//             Author:{
//                 select:{
//                     Username:true
//                 }
//             }
            
//         },
//         orderBy:{
//             id:"desc"
//         },
//         take:2, //return only 2 post
//         skip:1 //offset the first post
        
//     })
    
//     console.log(response)
// }

// PostBySpecificUser().finally(()=>{
//     prisma.$disconnect()
// })




// async function  getUserWithTheirPost(){

//     const response= await prisma.user.findMany({
//         include:{
//             Posts:{
//                 select:{
//                     Title:true,
//                     Content:true
//                 }
//             }
//         }
//     })
//     console.log(JSON.stringify(response,null,2))
// }

// getUserWithTheirPost().finally(()=>{
//     prisma.$disconnect()
// })



// async function DeletePostForUser(id:number) {
//    const response = await prisma.user.update({
//         where:{
//             id: id
//         },

//         data:{
//             Posts:{
//                 deleteMany:{
//                     authorId:id
//                 }
//             }
//         }
//    })
//     console.log(response)
// } 

// DeletePostForUser(2).finally(()=>{
//     prisma.$disconnect()
// })