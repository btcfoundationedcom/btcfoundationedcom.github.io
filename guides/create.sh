#!/bin/bash
FNAME=`basename $1 .md`
pandoc -V papersize:"letterpaper" -V fontsize:"12pt" --template templates/foundation.latex ${FNAME}.md --latex-engine=xelatex -o ${FNAME}_letter.pdf
pandoc -V papersize:"a4paper" -V fontsize:"12pt" --template templates/foundation.latex ${FNAME}.md --latex-engine=xelatex -o ${FNAME}_a4.pdf
pandoc -s -S --toc -H templates/foundation.css ${FNAME}.md -o ${FNAME}.html
