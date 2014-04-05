#!/bin/bash
for i in *.md
do
	FNAME=`basename $i .md`
	TITLE=`head -1 ${FNAME}.md | sed "s/\% //"`
	LETTER=`echo ${FNAME}_letter.pdf`
	A4=`echo ${FNAME}_a4.pdf`
	HTML=`echo ${FNAME}.html`
	echo "- ${TITLE}: [PDF letter size]($LETTER), [PDF A4 size]($A4), [html]($HTML)"
done
