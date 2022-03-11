<template>
	<div class="card rounded-0 mb-3">
		<div class="card-body">
			<div class="card-title">
				<slot name="title">Card Title</slot>
			</div>
			<div class="card-text">
				<slot name="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cumque tempora, aspernatur voluptates ab quod illum facere tenetur sapiente reiciendis eligendi.</slot>
			</div>
			<a href="#" class="card-link">Card link</a>
		</div>
	</div>
</template>