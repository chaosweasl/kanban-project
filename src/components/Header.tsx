export function Header({ handleReset }: { handleReset: () => void }) {
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
                    <button
                      onClick={() => {
                        const modal =
                          (document.getElementById(
                            "my_modal_1"
                          ) as HTMLDialogElement) || null;
                        if (modal) modal.showModal();
                      }}
                    >
                      <span className="text-red-600">Reset List</span>
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
