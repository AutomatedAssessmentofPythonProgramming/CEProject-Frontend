const tempcard=[
    {
        "pk": 1,
        "name": "CE1",
        "membersCount": 1
    },
    {
        "pk": 2,
        "name": "CE2",
        "membersCount": 1
    },
    {
        "pk": 1,
        "name": "CE3",
        "membersCount": 1
    },
]
const teammanagecard=[
    {
        teamname:"team1",
        teamid:"team1",
        teamstudent:"30"
    },
    {
        teamname:"team2",
        teamid:"team2",
        teamstudent:"40"
    },
    {
        teamname:"team3",
        teamid:"team3",
        teamstudent:"50"
    },
]
const exercisecard=[
    {
        "dueTime": "2023-04-21T17:59:03.328Z",
        "openTime": "2023-04-21T17:59:03.328Z",
        "isOpen": true,
        "week": 10,
        "Team": {
          "pk": 1,
          "name": "CECE"
        },
        "exercise": {
          "pk": 1,
          "title": "ex1",
          "instruction": "print hello",
          "created": "2023-04-21T17:56:33.616728Z",
          "updated": "2023-04-21T17:56:33.616748Z",
          "isDone": false
        }
    },
    {
        "dueTime": "2023-04-21T17:59:03.328000Z",
        "openTime": "2023-04-21T17:59:03.328000Z",
        "isOpen": true,
        "week": 10,
        "Team": {
          "pk": 1,
          "name": "CECE"
        },
        "exercise": {
          "pk": 2,
          "title": "ex2",
          "instruction": "print hello2",
          "created": "2023-04-21T17:56:33.616728Z",
          "updated": "2023-04-21T17:56:33.616748Z",
          "isDone": true
        }
    },
    {
        "dueTime": "2023-04-21T17:59:03.328000Z",
        "openTime": "2023-04-21T17:59:03.328000Z",
        "isOpen": true,
        "week": 10,
        "Team": {
          "pk": 1,
          "name": "CECE"
        },
        "exercise": {
          "pk": 3,
          "title": "ex3",
          "instruction": "print hello3",
          "created": "2023-04-21T17:56:33.616728Z",
          "updated": "2023-04-21T17:56:33.616748Z",
          "isDone": false
        }
    },
]
const membercard=[
    {
        name:"Adam",
        email:"123@gmail.com",
        studentid:"62012345",
        submit:"2",
        score:"20",
    },
    {
        name:"beck",
        email:"123@gmail.com",
        studentid:"62098765",
        submit:"3",
        score:"30",
    },
    {
        name:"Cat",
        email:"123@gmail.com",
        studentid:"62055432",
        submit:"3",
        score:"30",
    },{
        name:"Dog",
        email:"123@gmail.com",
        studentid:"62077777",
        submit:"3",
        score:"30",
    },
]
const membersubmitcard=[
    {
        name:"Adam",
        email:"123@gmail.com",
        studentid:"62012345",
        submitdate:"29/11/2565 23:59",
    },
    {
        name:"Beck",
        email:"123@gmail.com",
        studentid:"62012222",
        submitdate:"29/11/2565 23:59",
    },
    {
        name:"Dennis",
        email:"122223@gmail.com",
        studentid:"62018725",
        submitdate:"29/11/2565 23:59",
    },
]
const memberexercisecard=[
    {
        exercisename:"ex1",
        description:"print hello",
        exerciseid:"ex1",
        duedate:"29/11/2565 23:59",
        score:"10"
    },
    {
        exercisename:"ex2",
        description:"print hello",
        exerciseid:"ex2",
        duedate:"30/12/2565 23:59",
        score:"8"
    },
    {
        exercisename:"ex3",
        description:"print hello",
        exerciseid:"ex3",
        duedate:"30/12/2565 23:59",
        score:"6"
    },
   
]
export{tempcard,teammanagecard,exercisecard,membercard,membersubmitcard,memberexercisecard}