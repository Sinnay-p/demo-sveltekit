<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="relative w-full h-full">
		<nav class="f-f-l relative bg-gray-200 z-10">
			<div
				class="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11"
			>
				<div>
					<img src={logo} width="110" height="120"/>
				</div>
				<div class="flex items-center text-white text-lg font-bold">
					<ul class="flex items-center pr-3 xl:pr-12">
						<li class="cursor-pointer text-gray-700 hover:text-gray-400 ease-in">
							<a href="/sveltekit-simpleapp/build/">Home</a>
						</li>
						<li class="pl-3 lg:pl-5 xl:pl-8 cursor-pointer text-gray-700 hover:text-gray-400 ease-in">
							<a href="/sveltekit-simpleapp/build/about">About Us</a>
						</li>
						<li class="pl-3 lg:pl-5 xl:pl-8 cursor-pointer text-gray-700 hover:text-gray-400 ease-in">
							<a href="/sveltekit-simpleapp/build/about">Events</a>
						</li>
						<li class="pl-3 lg:pl-5 xl:pl-8 cursor-pointer text-gray-700 hover:text-gray-400 ease-in">
							<a href="/sveltekit-simpleapp/build/charts">Charts</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>
