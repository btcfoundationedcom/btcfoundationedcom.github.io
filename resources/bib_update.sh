#!/bin/bash
pandoc -s -S --ascii bitcoin.tex -t markdown_github --bibliography bitcoin.bib -o README.md --csl ieee-with-url.csl
