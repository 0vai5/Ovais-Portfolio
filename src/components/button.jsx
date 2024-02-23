import React from 'react'

const Button = ({ label, centered }) => {

    return (
        <>
            <div className="w-full h-40 flex items-center  justify-center sm:justify-center cursor-pointer">
                <div
                    className={`
                    relative  items-center justify-center py-3 pl-4 pr-12
                    overflow-hidden font-semibold shadow text-[#009687]
                    transition-all duration-150 ease-in-out rounded
                    hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-[#36454f]
                    dark:text-white dark:hover:text-gray-200 dark:shadow-none group
                  `}
                >
                    <span
                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#009687] group-hover:h-full"
                    ></span>
                    <span
                        className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            className="w-5 h-5 text-green-400"
                        >
                            <path
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </span>
                    <span
                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            className="w-5 h-5 text-green-400"
                        >
                            <path
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </span>
                    <span
                        className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                    >{label}</span
                    >
                </div>
            </div>

        </>
    )
}

export default Button