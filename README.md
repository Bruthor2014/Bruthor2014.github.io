# Arcade CV · Rúben Correia

Currículo interativo em estilo arcade ("Player Select"), com versão PT/EN, música gerada em tempo real (Web Audio API) e CV em PDF para descarregar.

## Stack
HTML, CSS e JavaScript puros, sem frameworks nem build.

## Estrutura
- `index.html`: ecrã de seleção + perfil (Sobre, Percurso, Skills, Projetos, Contacto)
- `script.js`: **todo o conteúdo** (bio, skills, percurso, projetos, links) e traduções no topo do ficheiro
- `styles.css`: estilos, *mobile first* em ecrãs até 640px
- `cv/cv.html`: modelo do CV em PDF; `powershell -File cv/gerar-pdf.ps1` volta a gerar `assets/CV-Ruben-Correia-PT.pdf` e `-EN.pdf`

## Correr localmente
Abrir `index.html` no browser (ou servir a pasta com qualquer servidor estático).
