// Toggle Button
const historyButton=document.getElementById('history-btn')
const donationButton=document.getElementById('donation-btn')

historyButton.addEventListener('click',function(){
    document.getElementById('main').classList.add('hidden')
    historyButton.classList.add('bg-[#B4F461]')
    donationButton.classList.remove('bg-[#B4F461]')
    document.getElementById('history').classList.remove('hidden')
    


})

donationButton.addEventListener('click',function(){
    document.getElementById('history').classList.add('hidden')
    historyButton.classList.remove('bg-[#B4F461]')
    donationButton.classList.add('bg-[#B4F461]')
    document.getElementById('main').classList.remove('hidden')
   
    


})

// Home PAge to Blog page
document.getElementById('blog').addEventListener('click',function(){
    window.location.href = "faq.html";
})




// ....................................
// ReusableFUNCTIONs

function modalfnc(){
    document.getElementById('my_modal_1').showModal(); 
    
    
    
}

function time(){
    const historyTime=document.createElement('p');
    const today=new Date();
    const currentDateTime = today.toLocaleString();
    historyTime.innerText=
`Date: ${currentDateTime}`;
document.getElementById('history-list').appendChild(historyTime);
historyTime.classList.add("border-b","mb-3")
}


// ReusableFUNCTIONs End



// Card-1

document.getElementById('donate-btn').
    addEventListener('click', function () {
        // my balance
        const mybalance = parseFloat(document.getElementById('my-balance').innerText);
        // input value
        const inputValue = parseFloat(document.getElementById('input').value);

        if (isNaN(inputValue) || inputValue <= 0 ) {
            alert("Invalid Amount .Please try again");

        }else if(inputValue> mybalance){
            alert("Insufficient Balance")

        }
         else {
            //   Fund Balance
            const balance = document.getElementById('fund-amount').innerText;
            const balanceInt = parseFloat(balance)


            const totalBalance = balanceInt + inputValue

            document.getElementById('fund-amount').innerText = totalBalance;

            // My balance
           
            const remainingBlance = mybalance - inputValue

            console.log("Remaing:", remainingBlance);
            document.getElementById('my-balance').innerText = remainingBlance;









// History



const historyTitle=document.createElement('p');
historyTitle.innerText=
`${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh`
document.getElementById('history-list').appendChild(historyTitle);

historyTitle.classList.add("text-xl","font-bold","border-t")

// SHow TIME
time()






// open Modal

modalfnc()



        }


    })

// Card-2

document.getElementById('donate-btn2').
    addEventListener('click', function () {
        // my balance
        const mybalance = parseFloat(document.getElementById('my-balance').innerText);
        // input value
        const inputValue = parseFloat(document.getElementById('input2').value);

        if (isNaN(inputValue) || inputValue <= 0 ) {
            alert("Invalid Amount .Please try again");

        }else if(inputValue> mybalance){
            alert("Insufficient Balance")

        }
         else {
            //   Fund Balance
            const balance = document.getElementById('fund-amount2').innerText;
            const balanceInt = parseFloat(balance)


            const totalBalance = balanceInt + inputValue

            document.getElementById('fund-amount2').innerText = totalBalance;

            // My balance
           
            const remainingBlance = mybalance - inputValue

            console.log("Remaing:", remainingBlance);
            document.getElementById('my-balance').innerText = remainingBlance;









// History



const historyTitle=document.createElement('p');
historyTitle.innerText=
`${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh`
document.getElementById('history-list').appendChild(historyTitle);

historyTitle.classList.add("text-xl","font-bold","border-t")

// SHow TIME
time()






// open Modal

modalfnc()



        }


    })


    // Card-3

document.getElementById('donate-btn3').
addEventListener('click', function () {
    // my balance
    const mybalance = parseFloat(document.getElementById('my-balance').innerText);
    // input value
    const inputValue = parseFloat(document.getElementById('input3').value);

    if (isNaN(inputValue) || inputValue <= 0 ) {
        alert("Invalid Amount .Please try again");

    }else if(inputValue> mybalance){
        alert("Insufficient Balance")

    }
     else {
        //   Fund Balance
        const balance = document.getElementById('fund-amount3').innerText;
        const balanceInt = parseFloat(balance)


        const totalBalance = balanceInt + inputValue

        document.getElementById('fund-amount3').innerText = totalBalance;

        // My balance
       
        const remainingBlance = mybalance - inputValue

        console.log("Remaing:", remainingBlance);
        document.getElementById('my-balance').innerText = remainingBlance;









// History



const historyTitle=document.createElement('p');
historyTitle.innerText=
`${inputValue} Taka is Donated for Injured in the Quota Movement`
document.getElementById('history-list').appendChild(historyTitle);

historyTitle.classList.add("text-xl","font-bold","border-t")

// SHow TIME
time()






// open Modal

modalfnc()



    }


})