import { MONTH, YEAR } from '../assets/Shared/NumberCreditCard'



const CheckOut = () => {
    return (
        <>

            <div className=" flex items-center justify-center flex-col h-[500px] 
                    text-blue-200 text-lg font-semibold rounded-2xl">
                <div className="">
                    <div className="bg-bg-Company mt-[30px] mb-[30px] w-[520px] h-[400px] flex-col  ">
                        <div className="h-[60px] rounded-tl-xl rounded-tr-xl bg-blue-checkout
                            flex justify-between items-center border-b-2 border-blue-10 ">

                            <div className=" flex justify-between items-center ml-[30px]">
                                <input id="pp" type="radio" name="payment" />
                                <label htmlfor="pp" className="ml-[20px]">Paypal</label>
                            </div>

                            <div className="flex  w-[70px] h-[30px]">
                                <img src="src/assets/images/creditCard Logos/paypal.png" alt="paypal" />
                            </div>
                        </div>

                        <div className="h-[60px]  bg-blue-checkout
                            flex justify-between items-center">

                            <div className=" flex justify-between items-center ml-[30px]">
                                <input id="cd" type="radio" name="payment" />
                                <label for="cd" className="ml-[20px]">Debit/ Credit Card</label>
                            </div>
                            <div className=" flex  w-[120px] h-[30px]">
                                <img src="src/assets/images/creditCard Logos/visa.png" alt="visa" />
                                <img src="src/assets/images/creditCard Logos/master.png" alt="mastercard" />
                                <img src="src/assets/images/creditCard Logos/amex.png" alt="amex" />
                            </div>
                        </div>


                        <div className="mt-[20px] mb-[20px]">
                            <div className="  flex justify-around items-center">
                                <label htmlfor="cardholdername" className='mr-[60px]'>Name</label>
                                <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text"
                                    className=" m-w-[300px] w-[300px] bg-transparent " />
                            </div>
                        </div>
                        <div className="">
                            <div className=" flex justify-around items-center">
                                <label htmlfor="cardnumber ">Card number</label>
                                <input id="cardnumber" type="number" placeholder="8888-8888-8888-8888"
                                    className=" m-w-[300px] w-[300px] bg-transparent" />
                            </div>
                        </div>

                        <div className="flex flex-col mt-[20px]">
                            <div className=" pl-[30px] flex justify-between">
                                <label htmlfor="expiry-date">Expiry/CVV</label>
                                <div className="pr-[90px]">
                                    <select id="expiry-date"
                                        className='appearance-none bg-transparent  '>
                                        <option>MM</option>
                                        {MONTH.map((month) => {
                                            return <option value={month}>{month}</option>
                                        })}
                                    </select>

                                    <select id="expiry-date"
                                        className='appearance-none bg-transparent  '>
                                        <option>YYYY</option>
                                        {YEAR.map((year) => {
                                            return <option value={year}>{year}</option>
                                        })}
                                    </select>
                                    <input type="text" maxlength="4" placeholder="123"
                                        className='w-[60px] bg-transparent' />
                                </div>
                            </div>
                            <button className=" w-[520px] bg-blue-700 border-none  p-[18px]
                                outline-none mt-[30px] flex justify-center 
                                active:bg-blue-900"
                                type="submit">
                                Confirm and Pay
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default CheckOut