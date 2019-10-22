# Simple-visualization-tool
**A tool for visualizing research results for different presentation purposes.**

## Prerequisites
The tool contains HTML, JavaScript, CSS and image repositories and needs a browser to work.

## Installing
Clone or download the content of this project. The HTML folder contains the tool that is run in the browser.

## Content
New images and code changes are needed to add custom content. The tool works best if each combination of independent variable and dependent variable has its own image.

### Images
Create images to visualize results, for example, with a script called scatter.py. This is a script written in Python (3.6) programming language that utilizes the [seaborn.jointplot function](https://seaborn.pydata.org/generated/seaborn.jointplot.html). 

Name the images with the following scheme *independent*\_*dependent*.png where *independent* is the variable in y-axis and *dependent* is the variable in x-axis.

### HTML
To add image options to the drop-down list, the following sections of the index.html file must be edited: the page has two select elements; both left and right. The upper selection selects the independent variable and the lower selection selects the dependent variable. The options should match the custom content and new images.

Use the same naming scheme as with the images: <independent> part goes to the first select option and <dependent> part goes to the second select option.

## Authors
- Juho Savela
- Meri-Tuulia Kaarakainen

## Releases with a DOI
v1.0 INVEST-flagship/simple-visualization-tool: v1.0
 DOI: 10.5281/zenodo.3515770
 
<a href="https://zenodo.org/badge/latestdoi/215022468"><img src="https://zenodo.org/badge/215022468.svg" alt="DOI"></a>


## Cite as
Meri-Tuulia Kaarakainen, & juhosavela. (2019, October 22). INVEST-flagship/simple-visualization-tool: v1.0 (Version v1.0). Zenodo. http://doi.org/10.5281/zenodo.3515770

## License
GNU Genral Public License
Version 3
