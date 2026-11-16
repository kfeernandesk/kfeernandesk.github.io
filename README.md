# LoopingBR Publisher — Site público

Página institucional e documentação do **LoopingBR Publisher**, um aplicativo desktop de publicação de vídeos e Shorts no YouTube. Este repositório é o site estático publicado no GitHub Pages, **não** o repositório operacional que processa publicações.

**Site:** https://kfeernandesk.github.io/

## Páginas e endereços estáveis

| Página | Arquivo | Endereço |
| --- | --- | --- |
| Início e recursos | `index.html` | https://kfeernandesk.github.io/ |
| Documentação técnica | `documentacao.html` | https://kfeernandesk.github.io/documentacao.html |
| Política de Privacidade | `privacidade.html` | https://kfeernandesk.github.io/privacidade.html |
| Termos de Uso | `termos.html` | https://kfeernandesk.github.io/termos.html |

O site usa `estilos.css` e `site.js` (interações de navegação e animações de entrada; **sem rastreamento embutido**).

## Código do aplicativo

- **Portfólio e código-fonte:** https://github.com/kfeernandesk/loopingbr-publisher-portfolio
- **Release Windows v1.0.14.1:** https://github.com/kfeernandesk/loopingbr-publisher-portfolio/releases/tag/v1.0.14.1
- **Guia completo:** https://github.com/kfeernandesk/loopingbr-publisher-portfolio/blob/main/docs/INSTALACAO.md

## Relação com o Google Cloud / OAuth

Esta página pode ser informada como **página inicial pública** na configuração do aplicativo no Google Cloud, juntamente com os endereços próprios de privacidade e termos.

- Este site **não** recebe tokens, **não** realiza login Google e **não** substitui o endereço de callback OAuth.
- A versão híbrida documenta o redirect local `http://127.0.0.1:8765/oauth/google/callback` no guia de instalação, sob configuração apropriada do próprio usuário.
- Mantenha **exatamente as URLs** cadastradas no Google Cloud, bem como eventuais tags/arquivos de verificação de propriedade.
- A publicação desta página **não altera automaticamente** o status do app para produção nem substitui etapas de verificação e autorização que o Google possa exigir.
- Mudanças materiais na identidade do aplicativo, escopos ou conteúdo das políticas podem demandar revisão de conformidade. Confira se os textos refletem o software real.

## Desenvolvimento e atualização

O projeto utiliza HTML, CSS e JavaScript estáticos. Para publicar: **Settings → Pages → Deploy from a branch → main → /(root)**. O GitHub Pages disponibiliza o conteúdo da branch após o processamento do deploy.

Em uma atualização visual, preserve os caminhos `index.html`, `privacidade.html` e `termos.html`. Antes de editar, tenha um backup da branch atual.

A branch `backup/site-antes-redesign-2026-11-16` preserva o estado anterior à reformulação de novembro de 2026.

## Avisos

Sem credenciais OAuth, segredos, refresh tokens ou dados de publicações reais neste repositório. O site é independente e não tem afiliação com Google, YouTube ou GitHub.

© 2026 LoopingBR Publisher.
