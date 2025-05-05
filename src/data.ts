export const topScores = [
    {
        id: 1,
        Img: "",
        username: "Andre Perez",
        email: "mavp061203@gmail.com",
        score: "1000 ",
    },
    {
        id: 2,
        Img: "",
        username: "Jahnreil Amarillento",
        email: "JahnReil@gmail.com",
        score: "900 ",
    },
    {
        id: 3,
        Img: "",
        username: "Elijah Tam-Od",
        email: "Elijah@gmail.com",
        score: "800 ",
    },
    {
        id: 4,
        Img: "",
        username: "Heso Yam",
        email: "hesoyam@gmail.com",
        score: "700 ",
    },
    {
        id: 5,
        Img: "",
        username: "Leni Penk",
        email: "leni@gmail.com",
        score: "600 ",
    },
    {
        id: 6,
        Img: "",
        username: "Baby Marcos",
        email: "marcos@gmail.com",
        score: "500 ",
    },
    {
        id: 7,
        Img: "",
        username: "Ninoy Aquino",
        email: "ninoy@gmail.com",
        score: "400 ",
    },
];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/person4.svg",
    title: "Total Users",
    number: "500",
    dataKey: "users",
    percentage: 80,
    chartData: [
        {name: "Sun", users: 61},
        {name: "Mon", users: 97},
        {name: "Tue", users: 91},
        {name: "Wed", users: 84},
        {name: "Thu", users: 49},
        {name: "Fri", users: 68},
        {name: "Sat", users: 50},
    ],
};

export const chartBoxQuizRate = {
    color: "#FFFF00",
    icon: "/wand.svg",
    title: "Success Rate",
    number: "500",
    dataKey: "passed",
    percentage: 95,
    chartData: [
        {name: "Quiz 1", passed: 420},
        {name: "Quiz 2", passed: 450},
        {name: "Quiz 3", passed: 400},
        {name: "Quiz 4", passed: 430},
        {name: "Quiz 5", passed: 410},
        {name: "Quiz 6", passed: 440},
        {name: "Quiz 7", passed: 415},
        {name: "Quiz 8", passed: 425},
        {name: "Quiz 9", passed: 435},
        {name: "Quiz 10", passed: 395},
    ],
};

export const chartBoxActiveParticipants = {
    color: "#00C49F",  // Greenish color for active users
    icon: "/calendar.svg",  // Placeholder for an icon
    title: "Active Participants Over Time",
    number: "500",  // Maximum number of participants
    dataKey: "active",
    percentage: 79,  // Random engagement percentage
    chartData: [
        { name: "Jan", active: 444 },
        { name: "Feb", active: 233 },
        { name: "Mar", active: 265 },
        { name: "Apr", active: 411 },
        { name: "May", active: 220 },
        { name: "Jun", active: 242 },
        { name: "Jul", active: 255 },
        { name: "Aug", active: 211 },
        { name: "Sep", active: 337 },
        { name: "Oct", active: 461 },
        { name: "Nov", active: 412 },
        { name: "Dec", active: 264 },
    ],
};

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FFA500",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 100,
        },
        {
            name: "Mon",
            visit: 300,
        },
        {
            name: "Tue",
            visit: 500,
        },
        {
            name: "Wed",
            visit: 200,
        },
        {
            name: "Thu",
            visit: 385,
        },
        {
            name: "Fri",
            visit: 426,
        },
        {
            name: "Sat",
            visit: 233,
        },

    ]
};

import { Report } from "./types/report";

export const reports: Report[] = [
    {
      id: "1",
      message: "Player got stuck after finishing Chapter 2",
      status: "High",
      date: "2024-04-01",
      type: "Bug"
    },
    {
      id: "2",
      message: "Player skipped Chapter 4 questions using dev tools",
      status: "High",
      date: "2024-04-02",
      type: "Exploit"
    },
    {
      id: "3",
      message: "Correct answer marked wrong in Chapter 1",
      status: "Mid",
      date: "2024-04-03",
      type: "Bug"
    },
    {
      id: "4",
      message: "Player sent false feedback multiple times",
      status: "Low",
      date: "2024-04-04",
      type: "Behavior"
    },
    {
      id: "5",
      message: "Score can be boosted by refreshing in Chapter 5",
      status: "Mid",
      date: "2024-04-05",
      type: "Exploit"
    },
    {
      id: "6",
      message: "Player spammed reset in Chapter 3, causing lag",
      status: "Low",
      date: "2024-04-06",
      type: "Behavior"
    }
  ];
