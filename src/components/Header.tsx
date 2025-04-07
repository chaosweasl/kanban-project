import { useState } from "react";

export function Header({ handleReset }: { handleReset: () => void }) {
  const [wantsReset, setWantsReset] = useState(false);

  function doPopUp() {
    setWantsReset(true);
  }

  return (
    <>
      <div className="navbar bg-primary shadow-sm">
        <h1 className="flex text-xl ml-5">Kanban-Board</h1>
        <div className="flex-1 flex justify-center items-center w-full">
          <h1 className="flex text-xl text-black font-semibold">
            Welcome Guest!{" "}
            {/* change this to username when sign up page is done */}
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Log Out</a> {/* remove this if not signed in */}
            </li>
            <li>
              <details>
                <summary>More Actions</summary>
                <ul className="bg-primary rounded-t-none p-2">
                  <li>
                    <a href="https://github.com/chaosweasl" target="_blank">
                      My Github
                    </a>
                  </li>
                  <li>
                    <a>Tech Stack</a>
                  </li>
                  <li>
                    <button onClick={() => doPopUp()}>
                      <span className="text-red-600">Reset List</span>
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {wantsReset && (
        <div
          role="alert"
          className="alert fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Are you sure you want to reset the list?</span>
          <div>
            <button className="btn btn-sm" onClick={() => setWantsReset(false)}>
              Cancel
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                handleReset();
                setWantsReset(false);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}
