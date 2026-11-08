# LoopingBR Publisher — Site informativo

Site estático destinado ao GitHub Pages, com apresentação do projeto e páginas de privacidade/termos. Este repositório deve ser **público e separado** de `kfeernandesk/Loopingbr_publisher`, que permanece privado.

## Publicação

1. Crie o repositório público `kfeernandesk.github.io` na conta GitHub `kfeernandesk`, inicializando-o com um README.
2. Envie os arquivos `index.html`, `privacidade.html`, `termos.html` e `estilos.css` para a raiz da branch `main`.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/(root)` e salve.
4. Confira quando estiver disponível `https://kfeernandesk.github.io/`, assim como `/privacidade.html` e `/termos.html`.
5. Antes de informar o endereço ao Google Cloud, revise o texto da política para confirmar que corresponde ao funcionamento real do Publisher e escolha um canal apropriado para contato privado.
6. Para a verificação de propriedade no Google Search Console, acrescente a tag HTML fornecida pelo Google no `<head>` da página inicial (ou use arquivo de verificação HTML fornecido pelo Google). Esta etapa precisa acontecer no Google Search Console; o site por si só não verifica a propriedade.

## Endereços previstos

- Inicial: https://kfeernandesk.github.io/
- Privacidade: https://kfeernandesk.github.io/privacidade.html
- Termos: https://kfeernandesk.github.io/termos.html

## Observações importantes

- Não coloque credenciais OAuth, Secrets, refresh tokens, IDs confidenciais ou arquivos do repositório privado neste site.
- Este site **não** recebe tokens, **não** substitui o redirect URI do OAuth Playground e **não** migra automaticamente a aplicação para o status "Em produção".
- O Google Cloud pode exigir verificação de domínio, da identidade do aplicativo e/ou de escopos, mesmo com a página publicada.
- O Google pode exigir verificação de domínio próprio ou outra comprovação; a URL `github.io` não representa garantia de aprovação.
- Um token anteriormente emitido no modo de teste pode precisar de uma nova autorização após a mudança do status do aplicativo.