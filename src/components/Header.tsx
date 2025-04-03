export function Header() {
  return (
    <div className="navbar bg-primary shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Kanban-Board</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Log Out</a>
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
                  <a>
                    <span className="text-red-600">Reset List</span>
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
