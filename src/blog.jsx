import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faShare,
	faComment,
} from "@fortawesome/free-solid-svg-icons";

import {useNavigate} from "react-router-dom";

const like = <FontAwesomeIcon icon={faThumbsUp} />;
const share = <FontAwesomeIcon icon={faShare} />;
const comment = <FontAwesomeIcon icon={faComment} />;

const posts = [
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: {title: "Marketing", href: "#"},
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPCODeWiVfeT82Yu6J6q5t0yJFoKUmFD_9XPOTfTCcA&s",
	},
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: {title: "Marketing", href: "#"},
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPCODeWiVfeT82Yu6J6q5t0yJFoKUmFD_9XPOTfTCcA&s",
	},
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: {title: "Marketing", href: "#"},
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPCODeWiVfeT82Yu6J6q5t0yJFoKUmFD_9XPOTfTCcA&s",
	},
];

export default function Blog() {
	const navigate = useNavigate();
	function detailsShow() {
		navigate("./detail");
	}
	return (
		<>
			<div className="bg-slate-900 py-5 flex justify-between">
				<div className="flex justify-center mx-auto max-w-9xl px-6 lg:px-8 overflow-hidden max-h-screen hover:overflow-y-auto scrollbar-w-2 scrollbar-color-gray sticky left-0">
					<div className="text-white flex flex-col listleft">
						<div className="list">Subhadro</div>
						<div className="list">Friends</div>
						<div className="list">Saved</div>
					</div>
				</div>
				<div className="relative z-12 flex justify-center mx-auto max-w-9xl px-6 lg:px-8 overflow-hidden max-h-screen hover:overflow-y-auto midcontent hover:-mt-16">
					<div className="mx-auto mt-10 grid w-2xl grid-cols-1 gap-y-20  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1 ">
						{posts.map(post => (
							<div
								className="flex flex-col w-11/12
							 items-center justify-center"
							>
								<article
									key={post.id}
									className="flex flex-col items-start justify-between"
								>
									<div className="relative mt-0 flex items-center gap-x-4">
										<img
											src={post.author.imageUrl}
											alt=""
											className="h-10 w-10 rounded-full bg-gray-50"
										/>
										<div className="text-sm leading-6">
											<p className="font-semibold text-gray-900">
												<a href={post.author.href}>
													<span className="absolute inset-0" />
													{post.author.name}
												</a>
											</p>
											<p className="text-white">
												{post.author.role}
											</p>
										</div>
									</div>

									<div className="group relative m-1">
										<h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
											<a href={post.href}>
												<span className="absolute inset-0" />
												{post.title}
											</a>
										</h3>
										<p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
											{post.description}
										</p>
									</div>
									<div className="group relative m-4">
										<img
											className="w-96 p-2 rounded-2xl"
											src={post.url}
											alt=""
										/>
									</div>
									<div className="flex items-center gap-x-4 text-xs m-4">
										<time
											dateTime={post.datetime}
											className="text-white"
										>
											{post.date}
										</time>
										<a
											href={post.category.href}
											className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white-600 hover:bg-gray-100"
										>
											{post.category.title}
										</a>
									</div>
									<hr className="hr-prop text-gray-400 w-96 m-4" />
									<div className="cart flex items-center gap-x-4 text-xl m-4 justify-between text-stone-50 w-96">
										<button className="btn w-20 px-3 py-1 gap-1 flex ">
											<p>like</p>
											<p className="like">{like}</p>
										</button>
										<button className="btn w-24 px-3 py-1 gap-1 flex ">
											<p>share</p>
											<p className="share">{share}</p>
										</button>
										<button className="btn w-26  px-3 py-1 gap-1 flex ">
											<i class="bi bi-hand-thumbs-up "></i>
											<p>comment</p>
											<p className="comment">{comment}</p>
										</button>
										{/* //add to cart view details */}
									</div>
									<div className="flex text-white justify-between items-center w-96 bg-indigo-950 space-x-1">
										<div>
											<button className="h-10  border rounded-lg text-xl w-48 p-2 ">
												Add To Cart
											</button>
										</div>
										<div>
											<button
												className="h-10  border-r-slate-300 border rounded-lg text-xl w-48 p-2 "
												onClick={detailsShow}
											>
												View Details
											</button>
										</div>
									</div>
								</article>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-center mx-auto px-6 lg:px-8 right-0 ">
					<div className="text-white flex flex-col listright">
						<div className="list">Subhadro</div>
						<div className="list">Friends</div>
						<div className="list">Saved</div>
					</div>
				</div>
			</div>

			{/* <div className="bg-slate-900 py-5 flex justify-between">
				<div className="flex justify-center mx-auto max-w-9xl px-6 lg:px-8 ">
					<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-20  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
						{posts.map((post) => (
							<article
								key={post.id}
								className="flex max-w-2xl flex-col items-start justify-between"
							>
								<div className="flex items-center gap-x-4 text-xs">
									<time
										dateTime={post.datetime}
										className="text-white"
									>
										{post.date}
									</time>
									<a
										href={post.category.href}
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white-600 hover:bg-gray-100"
									>
										{post.category.title}
									</a>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
										<a href={post.href}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
										{post.description}
									</p>
								</div>
								<div className="relative mt-8 flex items-center gap-x-4">
									<img
										src={post.author.imageUrl}
										alt=""
										className="h-10 w-10 rounded-full bg-gray-50"
									/>
									<div className="text-sm leading-6">
										<p className="font-semibold text-gray-900">
											<a href={post.author.href}>
												<span className="absolute inset-0" />
												{post.author.name}
											</a>
										</p>
										<p className="text-white">
											{post.author.role}
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
			<div className="bg-slate-900 py-5 flex justify-between">
				<div className="flex justify-center mx-auto max-w-9xl px-6 lg:px-8 ">
					<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-20  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
						{posts.map((post) => (
							<article
								key={post.id}
								className="flex max-w-2xl flex-col items-start justify-between"
							>
								<div className="flex items-center gap-x-4 text-xs">
									<time
										dateTime={post.datetime}
										className="text-white"
									>
										{post.date}
									</time>
									<a
										href={post.category.href}
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white-600 hover:bg-gray-100"
									>
										{post.category.title}
									</a>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
										<a href={post.href}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
										{post.description}
									</p>
								</div>
								<div className="relative mt-8 flex items-center gap-x-4">
									<img
										src={post.author.imageUrl}
										alt=""
										className="h-10 w-10 rounded-full bg-gray-50"
									/>
									<div className="text-sm leading-6">
										<p className="font-semibold text-gray-900">
											<a href={post.author.href}>
												<span className="absolute inset-0" />
												{post.author.name}
											</a>
										</p>
										<p className="text-white">
											{post.author.role}
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div> */}
		</>
	);
}
