axios.get('https://api.github.com/users/igomedeiros')
.then(function(response) {
    console.log(response);
})
.catch(function(reject) {
    console.log(reject);
})