# Guides of the Education Committee of the Bitcoin Foundation 

You will need to have the following programs installed on your computer:

- Pandoc
- XeLaTeX

## Create pdf version

	pandoc -V papersize:"letterpaper" -V fontsize:"12pt" --template templates/foundation.latex intoduction.md --latex-engine=xelatex -o introduction_letter.pdf

	pandoc -V papersize:"a4paper" -V fontsize:"12pt" --template templates/foundation.latex intoduction.md --latex-engine=xelatex -o introduction_a4.pdf


## Create html version

	pandoc -s -S --toc -H templates/foundation.css intoduction.md -o introduction.html
