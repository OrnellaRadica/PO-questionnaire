const myVar = {
  name: "Happy Dev",
  experience: 4,
  languages: 1,
  friends: ["Larry", "Jeff", "Tim"],
};

let friendShown = null;
var element = document.getElementById("friends");

element.onclick = function () {
  if (friendShown === null) {
    friendShown = 0;
  } else if (friendShown < myVar.friends.length - 1) {
    friendShown++;
  } else {
    friendShown = 0;
  }

  element.innerText = myVar.friends[friendShown];
};
