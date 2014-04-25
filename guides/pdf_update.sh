#!/bin/bash
for i in `cat current.txt`
do
	FNAMEPDF=`basename $i .md`
	FNAMEMD="$i"
	echo "$FNAMEMD"
	pandoc -V papersize:"letterpaper" -V fontsize:"12pt" --template templates/foundation.latex ${FNAMEMD} --latex-engine=xelatex -o pdf/${FNAMEPDF}_letter.pdf
	pandoc -V papersize:"a4paper" -V fontsize:"12pt" --template templates/foundation.latex ${FNAMEMD} --latex-engine=xelatex -o pdf/${FNAMEPDF}_a4.pdf
	# pandoc -s -S --toc -H templates/foundation.css ${FNAME}.md -o ${FNAME}.html
done
