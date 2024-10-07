<script lang="ts">
	import { Confetti } from 'svelte-confetti';
	import { scale } from 'svelte/transition';

	const audio = new Audio('/hbd.mp3');

	let clicked = $state(false);

	function play() {
		audio.play();
		clicked = true;
	}
</script>

{#if !clicked}
	<button onclick={play}>
		<img class="b-box" src="/images/b-box.png" alt="Birthday Box" />
	</button>
{:else}
	<div transition:scale>
		<img class="bday-pic" src="/images/hbd.jpeg" alt="Birthday" />

		<div
			style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
		>
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				delay={[500, 2000]}
				infinite
				duration={5000}
				amount={600}
				fallDistance="100vh"
			/>
		</div>
	</div>
{/if}

<style>
	.bday-pic {
		width: 100dvw;
		height: 100dvh;
	}

    .b-box {
        animation: shake 1s forwards infinite;
    }

    @keyframes shake {
        0% {
            transform: rotate(0deg);
        }
        
        20% {
            transform: rotate(20deg);
        }
        40% {
            transform: rotate(-20deg);
        }
        60% {
            transform: rotate(15deg);
        }
        80% {
            transform: rotate(-15deg);
        }
        100% {
            transform: rotate(0deg);
        }


    }
</style>
