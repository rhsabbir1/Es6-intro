
// background Color
document.getElementById('bcg-colour').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');

    for (const friend of friends) {
        friend.style.backgroundColor = 'indianred'
        console.log(friend)
    }
})

// text align center 
document.getElementById("text-center").addEventListener('click', function () {
    const thirdFriend = document.getElementById('third-friend')
    thirdFriend.style.textAlign = 'center';
})


// add-new-firend
document.getElementById('add-new-firend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');

    const newElement = document.createElement('div');
    newElement.classList.add('friend')
    newElement.innerHTML = `
    <div">
        <h1>Firend</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, deleniti?</p>
    </div>
    `
    friendContainer.appendChild(newElement)
})
