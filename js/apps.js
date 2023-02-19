document.getElementById('bcg-colour').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');

    for(const friend of friends){
        friend.style.backgroundColor = 'indianred'
        console.log(friend)
    }
})
