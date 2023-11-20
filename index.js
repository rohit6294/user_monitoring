const userData = [
    { id: 1, name: "User A", riskybehavior: true },
    { id: 2, name: "User B", riskybehavior: false },
    { id: 3, name: "User C", riskybehavior: true },
    
  ];

  function displayUserQueue() {
    const userQueueDiv = document.getElementById("userQueue");
    userQueueDiv.innerHTML = "";

    userData.forEach(user => {
      const userlist = document.createElement("li");
      userlist.className = user.riskybehavior ? "risky" : "normal";
      userlist.innerHTML = `<b>User ${user.id}:</b> ${user.name}`;

      userQueueDiv.appendChild(userlist);
    });
  }

displayUserQueue();