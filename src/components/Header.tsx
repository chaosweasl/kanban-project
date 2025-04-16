export function Header({ handleReset }: { handleReset: () => void }) {
  return (
    <>
      <div className="navbar bg-primary shadow-sm">
        <h1 className="flex text-2xl ml-5">Kanban-Board</h1>
        <div className="flex-1 flex justify-center items-center w-full">
          <h1 className="flex text-2xl text-black font-semibold">
            Welcome Guest!{" "}
            {/* change this to username when sign up page is done */}
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                <h2 className="text-xl text-black">Log Out</h2>
              </a>{" "}
              {/* remove this if not signed in */}
            </li>
            <li>
              <details>
                <summary>
                  <h2 className="text-xl text-black">More Actions</h2>
                </summary>
                <ul className="bg-primary rounded-t-none p-2">
                  <li>
                    <a href="https://github.com/chaosweasl" target="_blank">
                      <h3 className="text-lg">My Github</h3>
                    </a>
                  </li>
                  <li>
                    <a>
                      <h3 className="text-lg">Tech Stack</h3>
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const modal =
                          (document.getElementById(
                            "my_modal_1"
                          ) as HTMLDialogElement) || null;
                        if (modal) modal.showModal();
                      }}
                    >
                      <span className="text-red-600 text-lg font-medium">
                        Reset List
                      </span>
                    </button>
                    <dialog
                      id="my_modal_1"
                      className="modal items-center justify-center"
                    >
                      <div className="modal-box">
                        <h3 className="text-lg text-center text-red-800 font-extrabold">
                          WARNING
                        </h3>
                        <p className="py-4 font-sans">
                          Are you <b>sure</b> you want to reset your list?
                        </p>
                        <span className="underline">
                          This action cannot be undone!
                        </span>
                        <div className="modal-action">
                          <form
                            method="dialog"
                            className="flex w-full justify-between"
                          >
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => {
                                handleReset();
                              }}
                            >
                              Confirm
                            </button>
                            <button className="btn btn-sm">Cancel</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
