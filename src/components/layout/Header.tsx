import React from "react";
import { useBoardData } from "../../context/boardData";

export default function Header() {
	const { data, setData } = useBoardData();
	const addNewData = () => {
		setData([
			...data,
			{
				id: Math.floor(Math.random() * 100000),
				name: "",
				cards: [],
			},
		]);
	};
	return (
		<div className="border-b-2 border-gray-200">
			<header className="px-5 ">
				<div className="flex items-center justify-between border-b border-gray-200 py-3">
					<div>
						<div className="relative">
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between py-2">
					<div>
						<h1 className=" font-bold text-2xl text-gray-900 leading-tight">
							All Issues
						</h1>
					</div>
					<div className=" flex">
						<span className=" border bg-gray-200 rounded-md flex items-center p-1">
							<button className=" px-2 py-1 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4 6h16M4 10h16M4 14h16M4 18h16"
									/>
								</svg>
							</button>
							<button className=" px-2 py-1 bg-white shadow rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
									/>
								</svg>
							</button>
						</span>

						<span className="ml-5">
							<button
								className="flex items-center text-sm font-medium bg-gray-700 text-white rounded-md pl-3 pr-4 py-3"
								onClick={addNewData}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-white mr-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 4v16m8-8H4"
									/>
								</svg>{" "}
								New Board
							</button>
						</span>
					</div>
				</div>
			</header>
		</div>
	);
}
