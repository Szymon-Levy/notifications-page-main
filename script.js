const btnReadAll = document.getElementById("read-all-notifications")
const allNotificationsItems = document.querySelectorAll(".notifications__list .notifications__list-item")

getNumberOfUnread ();
btnReadAll.addEventListener("click", readAllNotifications)

allNotificationsItems.forEach(item =>{
    item.addEventListener("click", () =>{
        if(item.classList.contains("unread")){
            item.classList.remove("unread")
        }else{
            item.classList.add("unread")
        }
        getNumberOfUnread ();
    })
})

function getNumberOfUnread () {
    const unreadNotificationsItems = document.querySelectorAll(".notifications__list .notifications__list-item.unread")
    const numberOfUnread = unreadNotificationsItems.length;
    const notificationsNumber = document.getElementById("notifications-number")
    notificationsNumber.innerHTML = numberOfUnread
}

function readAllNotifications () {
    const unreadNotificationsItems = document.querySelectorAll(".notifications__list .notifications__list-item.unread")

    unreadNotificationsItems.forEach(item => {
        item.classList.remove("unread")
    })

    const notificationsNumber = document.getElementById("notifications-number")
    notificationsNumber.innerHTML = "0"
}



