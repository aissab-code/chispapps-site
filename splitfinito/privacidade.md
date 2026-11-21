---
title: Política de privacidade — SplitFinito
lang: pt
---

# Política de privacidade — SplitFinito

**Última atualização:** 5 de novembro de 2026 · versão 1.0

Outros idiomas: [English](privacy) · [Español](privacidad) · [Français](confidentialite) · [Deutsch](datenschutz) · [Italiano](privacy-it)

O SplitFinito é uma app para iPhone e Android para partilhar despesas com amigos, colegas de casa e
companheiros de viagem, publicada pela **Aissa Apps**. Não tem contas nem uma base de dados central: os
teus grupos vivem no teu telemóvel e nos telemóveis das pessoas que fazem parte deles. Esta política
explica com exatidão o que isso significa para os teus dados.

## 1. Responsável pelo tratamento

- **Responsável:** Aissa Bamogo Redondo (empresária em nome individual, Espanha), que opera como Aissa
  Apps (marca Chispapps)
- **Contacto, também para questões de privacidade:** aissa.b.code@gmail.com

## 2. Em poucas palavras

- **Sem conta.** Nunca te pedimos e-mail, número de telefone nem palavra-passe.
- **Os teus grupos ficam no teu grupo.** Despesas, nomes, notas, comentários e fotos de talões ficam
  guardados no teu telemóvel e nos telemóveis dos membros de cada grupo. Não temos nenhuma cópia e não os
  conseguimos ler.
- **Uma caixa de correio cifrada, não uma base de dados.** Para levar as alterações de um telemóvel para
  outro, o nosso relay guarda cópias cifradas de ponta a ponta apenas até todos os membros as receberem
  (no máximo 60 dias; as fotos de talões, no máximo 90 dias). Não as consegue decifrar.
- **Sem anúncios, sem estatísticas, sem rastreio, sem IA, e nunca vendemos dados.**
- **Podes apagar tudo** em *Conta → Cópia de segurança e dados → Apagar os meus dados*
  ([detalhes](#delete)).

## 3. O que fica no teu telemóvel

A app guarda o seguinte **apenas no seu armazenamento privado no teu telemóvel**:

- o teu nome visível e o teu avatar (um emoji e uma cor), as tuas definições e a tua identidade: um par
  de chaves criptográficas gerado no telemóvel da primeira vez que abres a app. As chaves secretas ficam
  no cofre seguro do telemóvel (Keychain no iOS, Keystore no Android);
- de cada um dos teus grupos: o nome e as definições, os nomes visíveis e avatares dos membros, as
  despesas, pagamentos, comentários, notas, categorias, modelos, despesas periódicas, fotos de talões, os
  dados de pagamento que cada membro decide partilhar com o grupo (por exemplo um nome PayPal.me, um
  número de telefone para MB WAY ou um IBAN) e o histórico completo de alterações;
- rascunhos, taxas de câmbio em cache e as tuas preferências.

Cada membro de um grupo guarda no seu próprio telemóvel o mesmo registo completo desse grupo: é assim que
o SplitFinito funciona sem servidor, e é por isso que um telemóvel perdido pode ser recuperado a partir
do de um amigo.

**Cópias de segurança do telemóvel.** Conforme as definições do teu telemóvel, a cópia do iCloud (iOS) ou
a cópia de segurança da Google (Android) podem incluir os ficheiros da app; essas cópias são geridas pela
Apple ou pela Google segundo as suas próprias condições. As tuas chaves secretas são guardadas de forma a
não serem copiadas para outros dispositivos. Para uma cópia controlada por ti, usa *Conta → Cópia de
segurança e dados → Exportar cópia de segurança*, que cria um ficheiro cifrado com uma frase-passe à tua
escolha.

Nós, enquanto programadores, não temos acesso a nenhuma destas informações.

## 4. O que o nosso relay trata

Quando partilhas um grupo com outras pessoas, os telemóveis trocam as alterações através de um pequeno
servidor de retransmissão (o «relay») que gerimos no Cloudflare Workers (Cloudflare, Inc.). Funciona como
uma caixa de correio: guarda o que um telemóvel envia até os outros o irem buscar, e foi construído para
não conseguir ler o conteúdo.

De cada grupo partilhado, o relay guarda:

- um identificador aleatório do grupo e um valor derivado do link de convite em vigor, que permite aos
  telemóveis novos provar que têm o link (não o link em si);
- de cada telemóvel registado no grupo: um identificador de dispositivo aleatório criado pela app (sem
  relação com os identificadores de hardware nem com o identificador de publicidade do telemóvel), a
  plataforma (iOS ou Android), o idioma da app, o teu token de notificações se as autorizaste, a tua
  opção *Mostrar detalhes* nas notificações, um hash do token de acesso atribuído a esse telemóvel, até
  onde já leu e quando se ligou pela última vez;
- **envelopes cifrados**: cada alteração (uma despesa, um pagamento, um comentário…) é assinada e cifrada
  no telemóvel de quem a envia com a chave do grupo antes de sair, juntamente com o tamanho, o número de
  ordem e a hora de chegada;
- **ficheiros cifrados**: fotos de talões e instantâneos do histórico, cifrados da mesma forma;
- contadores diários por grupo, que protegem o serviço gratuito contra abusos.

A chave do grupo só viaja dentro dos links de convite e fica nos telemóveis dos membros; nunca é enviada
para o relay. Nem nós, nem a Cloudflare, nem ninguém de fora do grupo consegue ler os envelopes ou os
ficheiros.

**Durante quanto tempo o relay guarda os dados**

- Um envelope é apagado assim que todos os telemóveis registados do grupo o recebem e, em qualquer caso,
  **60 dias** depois de chegar.
- Os ficheiros cifrados são apagados, no máximo, **90 dias** depois de serem carregados.
- O registo de um telemóvel (identificador de dispositivo, token de notificações, idioma e opção de
  notificações) é apagado quando esse telemóvel sai do grupo, quando um membro o remove ou quando usa
  *Apagar os meus dados*. Um telemóvel que não se liga há 90 dias deixa de atrasar a eliminação dos
  envelopes. Se o serviço de notificações indicar que um token já não é válido (por exemplo, depois de
  desinstalares a app), o relay descarta-o.

**Dados de ligação.** Como qualquer serviço web, a Cloudflare trata o teu endereço IP e dados técnicos do
pedido para o entregar e proteger a sua rede. O código do nosso relay não guarda endereços IP.

## 5. Notificações

As notificações são opcionais. Se as autorizares, a app obtém um token de notificações do telemóvel e
regista-o no relay para cada grupo. As notificações são entregues através do serviço de notificações da
Expo (650 Industries, Inc.), que as passa ao serviço de notificações da Apple ou ao Firebase Cloud
Messaging (Google).

Quando um membro guarda uma alteração, o telemóvel dele prepara um texto curto para cada destinatário, no
idioma deste, por exemplo *«A Marta adicionou "Jantar" 40,00 € · deves 13,33 €»*, e envia-o ao relay
juntamente com a alteração cifrada. O relay só usa esse texto **se o destinatário tiver ativado *Mostrar
detalhes*** (a predefinição); caso contrário, descarta-o e envia uma frase genérica como *«Há novidades
num dos teus grupos»*. Enquanto uma notificação com detalhes está a ser entregue, o seu texto (nome do
grupo, nomes dos membros, descrição e valores) pode ser lido pelo relay, pela Expo e pela Apple ou pela
Google. O relay não guarda os textos das notificações.

Se preferires que as notificações que recebes não mostrem detalhes dos teus grupos, desativa *Conta →
Notificações → Mostrar detalhes*, ou desativa as notificações. A app funciona perfeitamente sem elas e
atualiza-se quando a abres.

## 6. Taxas de câmbio

Quando registas uma despesa noutra moeda, a app descarrega tabelas públicas de taxas de câmbio destes
serviços: cdn.jsdelivr.net (jsDelivr) e currency-api.pages.dev (o conjunto de dados gratuito
*currency-api*), api.frankfurter.dev (Frankfurter) e, se falharem, open.er-api.com (ExchangeRate-API). O
pedido contém apenas a moeda base (o euro) e, para uma despesa passada, uma data: nunca valores, nomes
nem nada sobre os teus grupos. Estes serviços recebem o teu endereço IP no âmbito da ligação, segundo as
suas próprias políticas de privacidade. A taxa usada fica guardada na despesa, por isso os telemóveis dos
outros membros nunca a voltam a pedir.

## 7. Links de convite, links partilhados e as nossas páginas web

Um link de convite (`https://chispapps.com/splitfinito/join/#…`) leva a chave do grupo na parte que vem
depois do `#`. Os navegadores nunca enviam essa parte para um servidor, por isso o nosso alojamento web
(GitHub Pages, da GitHub, Inc.) só recebe o endereço da página, o teu endereço IP e os dados normais do
navegador, como em qualquer site. A página de convite lê o nome do grupo no teu navegador para to mostrar
e nunca envia o código para lado nenhum.

**Qualquer pessoa que tenha um link de convite pode entrar no grupo e ler todo o histórico**, por isso
partilha-o só com as pessoas que queres convidar. Qualquer membro pode renovar o link em *Definições do
grupo → Repor link*; a partir daí, os links antigos deixam de funcionar para telemóveis novos.

Os links de despesas partilhadas (`https://chispapps.com/splitfinito/i/#…`) só contêm dados cifrados que
os membros do grupo conseguem ler.

Quando partilhas um link, um saldo ou um resumo pelo WhatsApp ou por outra app, essa app trata a mensagem
segundo as suas próprias condições.

## 8. O que não fazemos

- Não criamos contas nem te pedimos e-mail, número de telefone ou palavra-passe.
- Não lemos os teus contactos: os convites são links e códigos QR.
- Não usamos a tua localização nem o teu microfone.
- Não mostramos anúncios, não usamos o identificador de publicidade e não incluímos ferramentas de
  estatística, relatórios de falhas ou rastreio. Não criamos perfis.
- Não vendemos nem cedemos dados a anunciantes ou a intermediários de dados.
- Não usamos inteligência artificial de nenhum tipo.
- A app não tem compras integradas e não processa pagamentos. Os botões de pagamento apenas abrem outras
  apps (como a do teu banco ou de pagamentos) ou copiam dados; o que lá acontece rege-se por essas apps.

## 9. Permissões

- **Câmara** (opcional): para ler o código QR de um convite e fotografar um talão.
- **Fotos**: o seletor de fotos do sistema só entrega à app a foto que escolhes; a app não tem acesso ao
  resto da tua galeria.
- **Face ID / impressão digital** (opcional): para bloquear a app. Os dados biométricos nunca saem do
  hardware seguro do telemóvel e a app nunca os vê.
- **Notificações** (opcional): consulta a secção 5.

## 10. Prestadores de serviços e transferências internacionais

Usamos a Cloudflare (alojamento do relay), a Expo (entrega de notificações), a Apple e a Google (entrega
de notificações e distribuição da app) e o GitHub (páginas web). Tratam apenas os dados limitados
descritos acima: identificadores aleatórios, tokens de notificações, conteúdo cifrado, dados de ligação
e, quando os detalhes estão ativos, textos de notificações. Escolhemos prestadores que se comprometem a
proteger os dados com um nível pelo menos equivalente ao desta política. Alguns estão sediados nos
Estados Unidos; as transferências assentam nas garantias oferecidas por esses prestadores, como o Quadro
de Privacidade de Dados UE-EUA ou as cláusulas contratuais-tipo da Comissão Europeia.

## 11. Fundamento jurídico

- Transmitir as alterações cifradas, ficheiros e notificações, e conservar para esse fim os
  identificadores de dispositivo e tokens de notificações: necessário para te prestar o serviço que pedes
  (artigo 6.º, n.º 1, alínea b), do RGPD).
- Limites diários, proteção contra abusos e dados de ligação: o nosso interesse legítimo em manter um
  serviço gratuito seguro e disponível (artigo 6.º, n.º 1, alínea f), do RGPD).
- As notificações só são enviadas se as autorizares nas definições do telemóvel; podes retirar essa
  autorização a qualquer momento.

## 12. Os teus direitos

Tens direito de acesso, retificação e apagamento, de limitação e de oposição ao tratamento e de
portabilidade dos dados. Podes exercer a maioria destes direitos diretamente na app, porque a tua
informação está no teu telemóvel: exporta-a com *Exportar cópia de segurança* ou com a exportação CSV,
corrige o teu nome no perfil e apaga-a com *Apagar os meus dados*.

O relay só guarda identificadores aleatórios que não conseguimos associar a uma pessoa. Se nos
escreveres, poderemos pedir-te dados que a app mostra para encontrar os registos certos. Escreve para
aissa.b.code@gmail.com; respondemos no prazo de um mês. Também podes apresentar reclamação a uma
autoridade de proteção de dados, por exemplo a CNPD em Portugal ([cnpd.pt](https://www.cnpd.pt)), a ANPD
no Brasil ([gov.br/anpd](https://www.gov.br/anpd)) ou, em Espanha, a Agencia Española de Protección de
Datos ([aepd.es](https://www.aepd.es)).

## 13. Como apagar os teus dados {#delete}

Na app, vai a **Conta → Cópia de segurança e dados → Apagar os meus dados** e confirma. Isto:

1. apaga deste telemóvel todos os teus grupos, despesas, fotos de talões, rascunhos, definições, a tua
   identidade e as tuas chaves; e
2. pede ao relay que apague os registos deste telemóvel (identificador de dispositivo, token de
   notificações, idioma e opção de notificações) em todos os grupos.

Os envelopes cifrados que já enviaste são apagados segundo o calendário normal (depois de entregues, no
máximo aos 60 dias; os ficheiros, no máximo aos 90 dias). Desinstalar a app também apaga tudo o que está
no telemóvel, mas não consegue avisar o relay; se puderes, usa antes *Apagar os meus dados*.

O que não conseguimos apagar: as cópias dos teus grupos que os outros membros guardam nos seus próprios
telemóveis, porque guardá-las é precisamente a função da app. Podes sair de um grupo, os outros membros
podem remover-te e cada membro pode apagar um grupo do seu próprio telemóvel. Se já não conseguires usar
a app, escreve-nos e apagaremos os registos do relay que conseguirmos identificar.

## 14. Menores

O SplitFinito não se destina a crianças. Para o usares tens de ter pelo menos 16 anos (consulta os
[Termos de utilização](termos)). Não tratamos conscientemente dados de pessoas com menos de 16 anos; se
achares que uma criança está a usar a app, contacta-nos.

## 15. Segurança

- **Cifra de ponta a ponta:** cada alteração é assinada com Ed25519 e cifrada com XChaCha20-Poly1305 com
  uma chave aleatória de 256 bits que só os membros do grupo têm; as fotos de talões são cifradas da
  mesma forma antes de serem carregadas.
- **Em trânsito:** todas as ligações ao relay e aos outros serviços usam HTTPS (TLS).
- **No dispositivo:** as chaves secretas estão no cofre seguro do telemóvel; na app podes ativar um
  bloqueio com Face ID ou impressão digital. Os ficheiros de cópia de segurança são cifrados com uma chave
  derivada da tua frase-passe (PBKDF2-SHA256).

Nenhum sistema é totalmente seguro: protege o teu telemóvel com um bloqueio de ecrã e partilha os links
de convite com cuidado.

## 16. Alterações

Se esta política mudar, publicaremos aqui a nova versão com uma nova data e a app avisar-te-á das
alterações importantes. Consulta também os [Termos de utilização](termos) e a [página de ajuda](ajuda).
