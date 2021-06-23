users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

function userInfo(users) {
  str = ''
  for (var i = 0; i < users.length; i++) {
    str += `${users[i].fname} knows`
    for(var j = 0; j < users[i].languages.length-1; j++) {
      str += ` ${users[i].languages[j]}`
    }
    str += ` and ${users[i].languages[j]}\n`
    k = Object.keys(users[i].interests)
    str += `${users[i].fname} is also interested in`
    for (var l = 0; l < k.length; l++) {
      for(var n = 0; n < users[i].interests[k[l]].length; n++) {
        if(l == k.length-1 && n == users[i].interests[k[l]].length-1) {
          str += ` and ${users[i].interests[k[l]][n]}`
        }
        else {
          str += ` ${users[i].interests[k[l]][n]}`
        }
      }
    }
    str += '\n'
  }
  return str
}
console.log(userInfo(users))