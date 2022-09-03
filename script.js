const review = [
    {
        id:0,
        img:'https://images.unsplash.com/photo-1657664072464-e525da1d426e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        name: 'Sara',
        role: 'Sale Manager',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas non accusamus, delectus necessitatibus amet fugiat numquam, veniam sed magnam at soluta deleniti vitae hic! Sed atque aliquid eligendi blanditiis laudantium'
    },
    {
        id:1,
        img:'https://images.unsplash.com/photo-1657664049364-01bdba8ec858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
        name: 'Mary',
        role: 'Data Anatics',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas non accusamus, delectus necessitatibus amet fugiat numquam, veniam sed magnam at soluta deleniti vitae hic! Sed atque aliquid eligendi blanditiis laudantium'
    },
    {
        id:2,
        img:'https://images.unsplash.com/photo-1662018497676-13e60857c200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Jonas',
        role: 'Manager',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas non accusamus, delectus necessitatibus amet fugiat numquam, veniam sed magnam at soluta deleniti vitae hic! Sed atque aliquid eligendi blanditiis laudantium'
    },
    {
        id:3,
        img:'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'At',
        role: 'UI Designer',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas non accusamus, delectus necessitatibus amet fugiat numquam, veniam sed magnam at soluta deleniti vitae hic! Sed atque aliquid eligendi blanditiis laudantium'
    }

]

// 

// user details change
const changeUser = document.querySelector("#imgChange");
const changeName = document.querySelector("#user-name");
const changeRole = document.querySelector("#change-role");

// button

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// events

prevBtn.addEventListners("click", () => {
  console.log("prev Btn");
});

nextBtn.addEventListners("click", () => {
  console.log("next btn");
});
