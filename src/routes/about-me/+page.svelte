<script>
	import { Card } from '$lib/components'
	import Gradient from '$lib/components/common/Gradient.svelte'
	import { t } from '$lib/translations'

  const resume = `Prazer, me chamo Ruan Augusto Pasta e atuo como desenvolvedor frontend a
		mais de 5 anos. Sou um amante do ecosistema JS e tudo o que o engloba, porem
		estou sempre curioso para aprender novas tecnologias. Tenho bastante
		interesse em me aprofundar mais no desenvolvimento de games com o uso de
		Unity e Unreal. Gosto de passar meu tempo livre estudando, jogando,
		assistindo filmes/series e animes e tambem fazendo alguns projetos pessoais
		Se quiser me conhecer um pouco mais ou ate mesmo conversar sobre alguma
		proposta, estou aberto para conversa e para freelances seletos.`

  let fragmentedResume = resume.split('.')
</script>

<Card title={$t('common.menu.aboutMe')}>
	<div class="about-me-image">
		<Gradient
			class="about-me-image--rounded"
			show={true}
			position="all"
			rounded
		>
			<figure>
				<img src="/images/ruanpasta.jpg" alt="Foto de Ruan Pasta" />
			</figure>
		</Gradient>
	</div>

  {#each fragmentedResume as text}
    <p class="about-me-resume">
      {text}
    </p>
  {/each}
</Card>

<style lang="scss">
	:global {
		.about-me-image {
			@apply flex justify-center mb-4;

			&--rounded {
				@apply w-40;
			}

			img {
				@apply rounded-full;
			}
		}
	}

	.about-me-resume {
		@apply mx-10 mb-4;
	}
</style>
