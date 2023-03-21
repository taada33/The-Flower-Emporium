

const price =document.querySelector('.price').innerHTML.split(':')[1]
const name =document.querySelector('.product-name').innerHTML
const quantity = document.querySelector('.quantity-input').value

// const price =document.querySelector('.price')

console.log(quantity)

const buttonCheckout = document.querySelector("#checkout")
//  console.log(button)

buttonCheckout.addEventListener('click',(e)=>{
  e.preventDefault();
  
  // console.log("hello")

  fetch("/api/checkout/create-checkout-session", {
    method: "POST",
    // mode: "no-cors",
  
    headers: {
      "Content-Type": "application/json",
    },
    // Send along all the information about the items
    body: JSON.stringify({
      items: [
        {
          id: 1,
          name: name,
          price: parseInt(price),
          quantity: quantity,
        }
    
      ],
    })}).then(res => {
      if (res.ok) return res.json()

      // window.location.href= res.url
      // If there is an error then make sure we catch that
      // return res.json().then(e => Promise.reject(e))
    }).then(({ url }) => {
      console.log(url)
      // On success redirect the customer to the returned URL
      window.location=  url

    
    })

    
    // .catch(e => {
    //   console.error(e.error)
    // })
 
});
      
    
  //   // mode: 'opaque',
  //   mode: 'no-cors'

    
  // }).then(res => {
  //     if (res.ok) return res.json()

  //     window.location.href= res.url
  //     // If there is an error then make sure we catch that
  //     // return res.json().then(e => Promise.reject(e))
  //   })
  //   // .then(({ url }) => {
  //   //   // On success redirect the customer to the returned URL
  //   //   window.location.href= '/checkout'
  //   // })
  //   .catch(e => {
  //     console.error(e.error)
  //   })
  // });

