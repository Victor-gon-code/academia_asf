# ASF Academia Super Forma

Site institucional da ASF Academia Super Forma — Bagé / RS.

## Estado atual

A Fase 5 fecha a narrativa: assinatura "Uma Questão de Saúde", endereço confirmado, mapa, Instagram, encerramento e footer. A próxima etapa é a auditoria responsiva integrada.

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
