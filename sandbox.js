//object literals
// const blogs = [
//     {tittle: 'why mac & cheese rules', likes: 30},
//     {tittle: '10 things to make with marmite', likes: 50}
// ] 

//console.log(blogs);

// let user = {
//      name: 'jhoedy',
//      age: 30,
//      email: 'jhoedy.20@gmail.com',
//      location: 'chetumal',
//      blogs : [
//             {title: 'why mac & cheese rules', likes: 30},
//             {title: '10 things to make with marmite', likes: 50}
//      ],
//      login(){
//          console.log('the user logged in');
//      },
//      logout(){
//          console.log('the user logged out');
//      },
//      logBlogs(){
//          //console.log(this.blogs);
//          console.log('this user has written the following blogs');
//          this.blogs.forEach(blog => {
//              console.log(blog.title, blog.likes);
//          });
//         }
//      };

//      user.logBlogs();

// Math Object 

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random*100));

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'Sheila', age: 20};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'Armando';
console.log(userOne, userTwo);