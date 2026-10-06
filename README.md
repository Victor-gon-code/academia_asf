# ASF Academia Super Forma

Site institucional da ASF Academia Super Forma — Bagé / RS.

## Estado atual

A Fase 8 conclui a auditoria visual final. O projeto está pronto para pull, inserção dos dois pacotes de assets, revisão local e preparação de deploy.

## Stack

- Vite — servidor de desenvolvimento e pipeline de produção.
- TypeScript — interações tipadas sem framework de aplicação.
- HTML semântico — estrutura nativa antes de abstrações.
- CSS moderno — tokens, composição e direção responsiva sem biblioteca de UI.

GSAP permanece **não instalado**. A Fase 2 usa Web Animations API + `requestAnimationFrame` porque as animações atuais são pequenas e não justificam uma dependência adicional.

## Tipografia

Archivo e Newsreader são carregadas pelo Google Fonts com `display=swap` e fallbacks de sistema. Apenas os pesos usados pela direção atual são solicitados.

## Identidade e assets

- `src/assets/derived/logo-asf-clean.svg` é um traçado vetorial gerado automaticamente a partir da marca raster canônica já limpa do checkerboard. Não houve redesenho livre das letras ou da geometria.
- `src/assets/derived/logo-asf-mark.svg` deriva do recorte central da mesma marca e é usado no header.
- `public/favicon.svg` usa as letras ASF extraídas do próprio mark, com a paleta validada da marca.
- A fotografia professor + aluno já entra no Hero através de AVIF/WebP responsivo e JPEG fallback.
- Como o conector GitHub desta sessão não envia binários locais de forma confiável, os derivados do Hero são entregues em um pacote separado e devem ser colocados exatamente em `public/assets/hero/` depois do pull.
- As duas fotografias de ambiente entram na Fase 4 por AVIF/WebP responsivo e PNG fallback. Como o conector atual não envia binários locais com segurança, o pacote é entregue separadamente para `public/assets/space/`.

Paleta-base validada nesta fase:

- ASF Orange: `#F1802E`
- ASF Near Black: `#030708`
- White: `#FFFFFF`
- Warm Paper de interface: `#F3EFE6`

## Executar localmente

Requer Node.js 22.12+.

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Organização

```text
src/
  main.ts
  scripts/
    navigation.ts
  styles/
    reset.css
    tokens.css
    base.css
    layout.css
    sections.css
    responsive.css
  assets/
    derived/
public/
  favicon.svg
```

## Qualidade

O repositório possui GitHub Actions em `.github/workflows/ci.yml` para instalar dependências e executar `npm run build` em cada push e em pull requests da `main`.


## Assets da Fase 2

O código espera:

```text
public/assets/hero/
  professor-aluno-640.avif
  professor-aluno-960.avif
  professor-aluno-1280.avif
  professor-aluno-1649.avif
  professor-aluno-640.webp
  professor-aluno-960.webp
  professor-aluno-1280.webp
  professor-aluno-1649.webp
  professor-aluno-original.jpg
```

O arquivo `ASSET_HANDOFF.md` registra o mesmo procedimento dentro do repositório.


## Fase 3

A seção humana resume temas recorrentes de avaliações públicas sem criar depoimentos individuais.

A seção de treino lista somente:
- musculação;
- treinamento funcional;
- treino de força;
- fisiculturismo;
- preparação física para concursos.

Não há assets novos nesta fase.


## Assets da Fase 4

O código espera:

```text
public/assets/space/
  ambiente-01-320.avif
  ambiente-01-full.avif
  ambiente-01-320.webp
  ambiente-01-full.webp
  ambiente-01-original.png
  ambiente-02-320.avif
  ambiente-02-full.avif
  ambiente-02-320.webp
  ambiente-02-full.webp
  ambiente-02-original.png
```

As imagens são somente resize/compressão das fotos reais fornecidas. Não há upscale, reconstrução ou alteração de conteúdo.


## Fase 5

A fase final de conteúdo não adiciona assets binários.

Informações publicadas:
- Rua Quinze de Novembro, 1510, São Judas, Bagé / RS;
- Instagram `@asf.academiasuperforma`;
- posicionamento público "A 1ª academia da Zona Leste".

Continuam deliberadamente fora do site até confirmação:
- telefone / WhatsApp;
- horários;
- preços;
- planos;
- promoções;
- condições de matrícula.


## Fase 6 — responsividade

Auditoria integrada concluída nos seguintes tamanhos:

`320×568`, `360×800`, `390×844`, `430×932`, `768×1024`, `1024×768`, `1280×720`, `1366×768`, `1440×900` e `1920×1080`.

Ajustes principais:
- retrato de tablet usa composição empilhada até 55.99rem;
- landscape intermediário preserva a composição dividida;
- landscape estreito recebe Hero 4:3;
- remoção do `min-width: 20rem` dependente de tamanho de fonte;
- endereço e ações de visita agora quebram de forma segura;
- tipografia crítica de telas muito estreitas tolera texto ampliado.

Também foram testados tamanhos de texto equivalentes a 125% e 150% em larguras representativas sem overflow horizontal.


## Fase 7 — performance, acessibilidade e SEO técnico

A fase adiciona:
- contraste acessível para o laranja em fundos claros através de `--color-accent-ink`;
- foco visível em superfícies claras, escuras e laranja;
- menu mobile com `inert`, contenção de foco e Escape;
- semântica refinada para listas/timeline;
- `loading` / `fetchpriority` explícitos;
- redução de escritas redundantes nas animações ligadas ao scroll;
- Open Graph e Twitter metadata;
- `ExerciseGym` JSON-LD;
- `public/robots.txt`.

Medições dos AVIF do handoff:
- Hero: ~50 / 83 / 126 / 205 KB em 640 / 960 / 1280 / 1649 px;
- Espaço 01: ~19 / 32 KB;
- Espaço 02: ~24 / 39 KB.

O domínio final ainda não foi definido. Por isso canonical, `og:url`, `og:image` absoluto e sitemap com URL permanecem deliberadamente pendentes.


## Fase 8 — auditoria visual final

A narrativa completa foi revisada em mobile, tablet, desktop e ultra-wide.

Polimentos finais:
- textos de fonte/validação que ainda pareciam documentação interna foram convertidos em copy de produção;
- a seção de espaço ficou mais direta e menos autorreferente;
- a nota da reputação pública ficou curta e humana;
- o fechamento de visita reforça 2001 + Zona Leste sem acrescentar dado operacional não confirmado.

Não foram adicionadas bibliotecas, imagens ou efeitos novos.

### Estado final antes do deploy

Ainda dependem do contexto de produção:
- canonical e URLs sociais;
- sitemap com domínio;
- conferência final do 4,9/5;
- inspeção de Archivo + Newsreader no domínio real;
- Core Web Vitals/Lighthouse do host real.

Os dois pacotes de imagens entregues anteriormente continuam sendo os únicos assets externos ao GitHub necessários.
