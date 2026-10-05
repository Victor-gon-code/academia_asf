# ASF Academia Super Forma

Site institucional da ASF Academia Super Forma — Bagé / RS.

## Estado atual

A Fase 1 estabelece somente a fundação técnica e visual. Os capítulos narrativos do site começam na Fase 2.

## Stack

- Vite — servidor de desenvolvimento e pipeline de produção.
- TypeScript — interações tipadas sem framework de aplicação.
- HTML semântico — estrutura nativa antes de abstrações.
- CSS moderno — tokens, composição e direção responsiva sem biblioteca de UI.

GSAP permanece **não instalado**. Ele só entra quando uma fase de motion apresentar um problema real que justifique timeline/ScrollTrigger.

## Tipografia

Archivo e Newsreader são carregadas pelo Google Fonts com `display=swap` e fallbacks de sistema. Apenas os pesos usados pela direção atual são solicitados.

## Identidade e assets

- `src/assets/derived/logo-asf-clean.svg` é um traçado vetorial gerado automaticamente a partir da marca raster canônica já limpa do checkerboard. Não houve redesenho livre das letras ou da geometria.
- `src/assets/derived/logo-asf-mark.svg` deriva do recorte central da mesma marca e é usado no header.
- `public/favicon.svg` usa as letras ASF extraídas do próprio mark, com a paleta validada da marca.
- As quatro fotografias canônicas foram auditadas e tiveram derivados locais de teste, mas só entrarão no bundle quando seus capítulos forem implementados. Isso evita enviar assets ainda não utilizados.

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
