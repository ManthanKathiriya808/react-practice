
import FetchApi from "./fetchApi/FetchApi";
import Input from "./components/Input";
import { useState } from "react";

function App() {

  const[amount,setAmount] = useState("")
  const[from,setFrom] = useState("usd")
  const[to,setTo] = useState("inr")
  const [ convertedAmount,setConvertedAmount] = useState("")


  const {data} = FetchApi(from)
  let option = Object.keys(data)


  function submit(){
    setConvertedAmount( amount * data[to])
  }
  function swap(){
    
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    setFrom(to)
    setTo(from)

  }

  // console.log(from)

  return (
   <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://st3.depositphotos.com/10567138/35815/i/450/depositphotos_358156968-stock-photo-smoke-black-background-realistic-overlay.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-2xl  mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submit()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                onAmountChange={(curr)=> setAmount(curr)}
                                onCurrencyChange={(curr) => setFrom(curr)}
                                currencyOptions = {option}
                                currency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                 label="To"
                                 amount={convertedAmount}
                                 onAmountChange={(curr)=> setConvertedAmount(curr)}
                                 onCurrencyChange={(curr) => setTo(curr)}
                                 currency={to}
                                 currencyOptions = {option}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
   </>
  );
}

export default App
