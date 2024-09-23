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






// ....................................
// ReusableFUNCTIONs

function modalfnc(){
    document.getElementById('my_modal_1').showModal(); 
    
    
    
}


// ReusableFUNCTIONs End


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
`${inputValue}Taka is Donated for famine-2024 at Feni, Bangladesh`
document.getElementById('history-list').appendChild(historyTitle);

// open Modal
// document.getElementById('my_modal_1').showModal();
modalfnc()



        }


    })

