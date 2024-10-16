
const promise = new Promise((good, bad)=>{
    if (true){
        good("All clear!")
    }else{
        bad("Something went wrong")
  
    }
})
const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, 'Hiii')
})
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 'yurrrrr')
})
const promise4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, 'heyyyyy')
})

Promise.all([promise, promise2, promise3, promise4]).then(values =>{
    console.log(values)
})

promise
.then(result => {
   return result + '!!'}
)
.then(result2 => result2 + ' ?')
.catch(() => console.log('error!'))
.then(result3 => console.log(result3 + ' '))

const urls = [//urls from api testing site
    'https://jsonplace5older.typicode.com/posts',//intentional error to show catch function
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/photos',
]
Promise.all(urls.map(url =>{
    return fetch(url).then(resp => resp.json()).then(results => {
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
        console.log(results[3])
    }) 
})).catch(()=> console.log('Something went wrong'))