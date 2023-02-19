
// background Color
document.getElementById('bcg-colour').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');

    for(const friend of friends){
        friend.style.backgroundColor = 'indianred'
        console.log(friend)
    }
})

// text align center 
document.getElementById("text-center").addEventListener('click' , function(){
    const thirdFriend = document.getElementById('third-friend')
    thirdFriend.style.textAlign = 'center';
})
