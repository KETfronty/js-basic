let currentUserName = prompt('Who is there?')
if(question = 'Admin'){
    let password = prompt('Write your password') 
    if(password === 'The Master'){
        alert('Welcome!')
    } else if( password === null || password === ''){
        alert('Canceled')
    }else{
        alert('Wrong password')
    }
} else if (currentUserName === '' || currentUSerNAme === null ){
    alert('Canceled')
}else{
    alert("I do not know you")
}