import React from 'react'

function Pagess() {
  return (
    <div className="flex bg-white text-black justify-evenly w-full overflow-scroll lg:overflow-hidden mb-10">
      <div className="px-6 py-4 h-full border-gray-900 border-2 flex justify-between items-center rounded-2xl hover:cursor-pointer ">
        <p className=" w-36">Hotels</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_2421)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.83206 5.22805C2.83206 4.75905 3.21206 4.37805 3.68206 4.37805H19.3061C19.7761 4.37805 20.1561 4.75905 20.1561 5.22805V11.8781C20.8361 12.4391 21.3761 13.2701 21.3761 14.4211V19.2681H19.8761V17.5951H3.28406V19.2681H1.78406V14.3941C1.80906 13.7391 2.08806 12.8051 2.83306 12.0431L2.83206 5.22805ZM5.46606 10.8151C5.73006 10.7811 6.00806 10.7641 6.30306 10.7641H10.1991C9.69606 10.2811 8.88906 9.83305 7.76606 9.83305C6.67606 9.83305 5.93606 10.3001 5.46606 10.8151ZM12.8561 10.7641H17.3241L17.3601 10.7671C17.5211 10.7831 17.7031 10.8091 17.8961 10.8491C17.8278 10.7665 17.7539 10.6886 17.6751 10.6161C17.2281 10.2061 16.4951 9.83305 15.4211 9.83305C14.3431 9.83305 13.6701 10.1061 13.2401 10.4171C13.0995 10.5185 12.9705 10.6348 12.8551 10.7641H12.8561ZM18.6561 9.48105C17.9301 8.83005 16.8441 8.33305 15.4211 8.33305C14.0741 8.33305 13.0821 8.68005 12.3611 9.20105C12.0191 9.44905 11.7511 9.72605 11.5401 10.0031C10.8041 9.14305 9.53506 8.33305 7.76606 8.33305C6.13706 8.33305 5.03306 9.04505 4.33206 9.83605V5.87805H18.6561V9.48105ZM3.28306 16.0951H19.8771V14.4201C19.8771 13.7171 19.5221 13.2321 18.9891 12.8751C18.4291 12.5011 17.7261 12.3141 17.2491 12.2631H6.30406C5.18606 12.2631 4.49406 12.5791 4.06706 12.9401C3.49706 13.4221 3.30206 14.0631 3.28406 14.4361V16.0941L3.28306 16.0951Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_2421">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="px-6 py-4 h-full border-gray-900 border-2 flex justify-between items-center rounded-2xl hover:cursor-pointer ">
        <p className="w-36">Destinations</p>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.75 5.25H22.25V9.704L21.714 9.864C21.1471 10.034 20.6501 10.3823 20.2967 10.8572C19.9434 11.332 19.7526 11.9081 19.7526 12.5C19.7526 13.0919 19.9434 13.668 20.2967 14.1428C20.6501 14.6177 21.1471 14.966 21.714 15.136L22.25 15.296V19.75H2.75V15.296L3.286 15.136C3.85293 14.966 4.34994 14.6177 4.70327 14.1428C5.0566 13.668 5.24743 13.0919 5.24743 12.5C5.24743 11.9081 5.0566 11.332 4.70327 10.8572C4.34994 10.3823 3.85293 10.034 3.286 9.864L2.75 9.704V5.25ZM4.25 6.75V8.626C4.99569 8.96242 5.62844 9.5069 6.0723 10.1941C6.51615 10.8813 6.75225 11.6819 6.75225 12.5C6.75225 13.3181 6.51615 14.1187 6.0723 14.8059C5.62844 15.4931 4.99569 16.0376 4.25 16.374V18.25H20.75V16.374C20.0043 16.0376 19.3716 15.4931 18.9277 14.8059C18.4838 14.1187 18.2477 13.3181 18.2477 12.5C18.2477 11.6819 18.4838 10.8813 18.9277 10.1941C19.3716 9.5069 20.0043 8.96242 20.75 8.626V6.75H4.25Z"
            fill="black"
          />
          <path
            d="M12.5 15C12.7652 15 13.0196 15.1054 13.2071 15.2929C13.3946 15.4804 13.5 15.7348 13.5 16C13.5 16.2652 13.3946 16.5196 13.2071 16.7071C13.0196 16.8946 12.7652 17 12.5 17C12.2348 17 11.9804 16.8946 11.7929 16.7071C11.6054 16.5196 11.5 16.2652 11.5 16C11.5 15.7348 11.6054 15.4804 11.7929 15.2929C11.9804 15.1054 12.2348 15 12.5 15ZM12.5 11.5C12.7652 11.5 13.0196 11.6054 13.2071 11.7929C13.3946 11.9804 13.5 12.2348 13.5 12.5C13.5 12.7652 13.3946 13.0196 13.2071 13.2071C13.0196 13.3946 12.7652 13.5 12.5 13.5C12.2348 13.5 11.9804 13.3946 11.7929 13.2071C11.6054 13.0196 11.5 12.7652 11.5 12.5C11.5 12.2348 11.6054 11.9804 11.7929 11.7929C11.9804 11.6054 12.2348 11.5 12.5 11.5ZM12.5 8C12.7652 8 13.0196 8.10536 13.2071 8.29289C13.3946 8.48043 13.5 8.73478 13.5 9C13.5 9.26522 13.3946 9.51957 13.2071 9.70711C13.0196 9.89464 12.7652 10 12.5 10C12.2348 10 11.9804 9.89464 11.7929 9.70711C11.6054 9.51957 11.5 9.26522 11.5 9C11.5 8.73478 11.6054 8.48043 11.7929 8.29289C11.9804 8.10536 12.2348 8 12.5 8Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="px-6 py-4 h-full border-gray-900 border-2 flex justify-between items-center rounded-2xl hover:cursor-pointer ">
        <p className="w-36">Rentals</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_2434)">
            <path
              d="M3 21.2H2.25V21.95H3V21.2ZM3 9.19995L2.584 8.57595L2.25 8.79895V9.19995H3ZM12 3.19995L12.416 2.57595L12 2.29895L11.584 2.57595L12 3.19995ZM21.01 9.19995H21.76V8.79795L21.426 8.57595L21.01 9.19995ZM21.01 21.2V21.95H21.76V21.2H21.01ZM3.75 21.2V9.19995H2.25V21.2H3.75ZM3.416 9.82395L12.416 3.82395L11.584 2.57595L2.584 8.57595L3.416 9.82395ZM11.584 3.82395L20.594 9.82395L21.426 8.57595L12.416 2.57595L11.584 3.82395ZM20.26 9.19995V21.2H21.76V9.19995H20.26ZM21.01 20.45H3V21.95H21.01V20.45ZM18 12.96H11.01V14.46H18V12.96ZM10.26 13.71C10.26 14.4 9.7 14.96 9.01 14.96V16.4599C9.73935 16.4599 10.4388 16.1702 10.9545 15.6545C11.4703 15.1388 11.76 14.4393 11.76 13.71H10.26ZM9.01 14.96C8.32 14.96 7.76 14.4 7.76 13.71H6.26C6.26 14.4393 6.54973 15.1388 7.06546 15.6545C7.58118 16.1702 8.28065 16.4599 9.01 16.4599V14.96ZM7.76 13.71C7.76 13.02 8.32 12.46 9.01 12.46V10.96C8.28065 10.96 7.58118 11.2497 7.06546 11.7654C6.54973 12.2811 6.26 12.9806 6.26 13.71H7.76ZM9.01 12.46C9.7 12.46 10.26 13.02 10.26 13.71H11.76C11.76 12.9806 11.4703 12.2811 10.9545 11.7654C10.4388 11.2497 9.73935 10.96 9.01 10.96V12.46ZM14.25 13.71V16.7099H15.75V13.71H14.25Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_2434">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="px-6 py-4 h-full border-gray-900 border-2 flex justify-between items-center rounded-2xl hover:cursor-pointer ">
        <p className="w-36">Restaurants</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_2440)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.798 5.14097L17.47 2.46997L18.53 3.52997L15.859 6.20197C15.18 6.88097 14.804 7.66397 14.739 8.40097C14.696 8.90097 14.793 9.40397 15.066 9.87297L19.97 4.96997L21.03 6.02997L16.124 10.936C16.597 11.217 17.098 11.323 17.59 11.29C18.308 11.243 19.057 10.896 19.686 10.267C20.539 9.41301 21.3904 8.55734 22.24 7.69997L22.466 7.47197L23.533 8.52697L23.305 8.75697C22.4535 9.61516 21.6005 10.4718 20.746 11.327C19.897 12.176 18.819 12.711 17.689 12.786C16.7438 12.8493 15.8065 12.5773 15.042 12.018L13.811 13.249L21.531 20.969L20.47 22.029L14.5 16.059L11.5 19.059L9.74998 17.309L5.02998 22.029L3.96998 20.969L8.68998 16.249L4.29798 11.858C3.85683 11.4169 3.50688 10.8932 3.26813 10.3169C3.02938 9.74053 2.90649 9.12281 2.90649 8.49897C2.90649 7.87513 3.02938 7.25741 3.26813 6.68107C3.50688 6.10472 3.85683 5.58106 4.29798 5.13997L4.99998 4.43997L12.75 12.19L13.982 10.958C13.4201 10.181 13.1583 9.22692 13.245 8.27197C13.345 7.12497 13.915 6.02597 14.798 5.14197V5.14097ZM13.439 15L5.02798 6.58797C4.57254 7.21401 4.35554 7.98206 4.41604 8.75387C4.47654 9.52568 4.81056 10.2505 5.35798 10.798L11.5 16.94L13.439 15Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_2440">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="px-6 py-4 h-full border-gray-900 border-2 flex justify-between items-center rounded-2xl hover:cursor-pointer ">
        <p className="w-36">Airlines</p>
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.70784 14H16.2578L18.5078 2H12.9578L4.70784 14ZM0.907837 16L10.9578 1.375C11.2412 0.958333 11.6038 0.625 12.0458 0.375C12.4878 0.125 12.9585 0 13.4578 0H18.5078C19.1412 0 19.6538 0.241667 20.0458 0.725C20.4378 1.20833 20.5752 1.75833 20.4578 2.375L17.9078 16H0.907837ZM13.4078 10C14.1078 10 14.6995 9.75833 15.1828 9.275C15.6662 8.79167 15.9078 8.2 15.9078 7.5C15.9078 6.8 15.6662 6.20833 15.1828 5.725C14.6995 5.24167 14.1078 5 13.4078 5C12.7078 5 12.1162 5.24167 11.6328 5.725C11.1495 6.20833 10.9078 6.8 10.9078 7.5C10.9078 8.2 11.1495 8.79167 11.6328 9.275C12.1162 9.75833 12.7078 10 13.4078 10Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}

export default Pagess