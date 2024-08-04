import React, {useState} from "react";
import {XMarkIcon} from "@heroicons/react/20/solid";

export default function Banner() {
	const [isVisible, setIsVisible] = useState(true);

	const handleDismiss = () => {
		setIsVisible(false);
	};

	return (
		<>
			{isVisible && (
				<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-slate-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
					{/* Your banner content */}
					<div className="flex items-center gap-5 ">
						<p className="text-sm  text-black">
							<strong className="font-semibold">
								Artisian_Aura@24
							</strong>
						</p>
						<p className="text-lg text-black font-serif italic">
							Limited Time Deal
						</p>
					</div>
					<div className="flex flex-1 justify-end">
						<button
							type="button"
							className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
							onClick={handleDismiss}
						>
							<span className="sr-only">Dismiss</span>
							<XMarkIcon
								className="h-5 w-5 text-gray-900"
								aria-hidden="true"
							/>
						</button>
					</div>
				</div>
			)}
		</>
	);
}
