import React from 'react'

const Contact = () => {
  return (
    <div>
          <div className="max-w-screen-md px-4 py-2 mx-auto"> 
            <h2 className="mt-5 mb-4 font-serif text-4xl font-extrabold text-center text-gray-900"> 
                Contact Us 
            </h2> 
            <p className="mb-4 font-serif font-light text-left text-gray-500 sm:text-xl"> 
                Want to Contact us? 
                Need details about your management? Let us know. 
            </p> 
            <form action="#"> 
                <div className="flex flex-row"> 
                    <div className="w-1/2 pr-2 "> 
                        <label for="firstName" 
                               className="block my-2 font-serif text-sm font-medium text-left text-gray-900"> 
                            First Name 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 font-serif" 
                               placeholder="Enter First Name"
                               required/> 
                    </div> 
                    <div className="w-1/2 pl-2"> 
                        <label for="firstName" 
                               className="block my-2 font-serif text-sm font-medium text-left text-gray-900"> 
                            Last Name 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border  
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 font-serif"
                               placeholder="Enter Last Name"/> 
                    </div> 
                </div> 
                <div> 
                    <label for="email" 
                           className="block my-2 font-serif text-sm font-medium text-left text-gray-900"> 
                        Your email 
                    </label> 
                    <input type="email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5 font-serif" 
                           placeholder="abc@gmail.com" 
                           required /> 
                </div> 
                <div> 
                    <label for="subject" 
                           className="block my-2 font-serif text-sm font-medium text-left text-gray-900"> 
                        Subject 
                    </label> 
                    <input type="text" 
                           className="block w-full p-3 font-serif text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
                           placeholder="What issue/suggestion do you have?" 
                           required /> 
                </div> 
                <div > 
                    <label for="message" 
                           className="block my-2 font-serif text-sm font-medium text-left text-gray-900 "> 
                        Your message 
                    </label> 
                    <textarea rows="6" 
                              className="block p-2.5 w-full text-sm  
                                         text-gray-900 bg-gray-50 rounded-lg  
                                         shadow-sm border border-gray-300 font-serif " 
                              placeholder="Query/Suggestion..."/> 
                </div> 
                <button type="submit" 
                        className="p-2 mt-2 mb-24 font-serif text-white bg-purple-500 border-purple-600 rounded-lg hover:scale-105"> 
                    Contact 
                </button> 
            </form> 
            </div>
</div>
  )
}

export default Contact