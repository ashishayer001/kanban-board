/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

export default function Sidebar() {
	return (
		<div className="hidden md:block w-64 border-r bg-gray-100 px-8 py-4 overflow-auto">
			<img className="w-9 h-9" src="/images/logo.jpg" />

			<nav className="mt-8">
				<h2 className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
					Kanban Board
				</h2>
			</nav>
		</div>
	);
}
