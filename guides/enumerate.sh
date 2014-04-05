#!/bin/bash
for i in *.md
do
	REPO="https://github.com/btcfoundationedcom/btcfoundationedcom.github.io/raw/master/guides/"
	FNAME=`basename $i .md`
	TITLE=`head -1 ${FNAME}.md | sed "s/\% //"`
	LETTER="$REPO/${FNAME}_letter.pdf"
	A4="$REPO/${FNAME}_a4.pdf"
	HTML="$REPO/${FNAME}.html"
	echo "- ${TITLE}: [PDF letter size]($LETTER), [PDF A4 size]($A4), [html]($HTML)"
done
