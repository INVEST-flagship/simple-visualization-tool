# Simple-visualization-tool
**A tool for visualizing research results for different presentation purposes.**

## Prerequisites
Tool is contains HTML, JavaScript, CSS and image resporces. This tool needs web browser to use.

## Installing
Clone or download content of this project. HTML folder cointains the tool.

## Content
To add content new images and code changes are required. Tool works best if there is image for every independent variable and dependent variable combination.

### Images
Create images to visualize results, for example, with a script called scatter.py. This is a script written in Python (3.6) programming language that utilizes the [seaborn.jointplot function](https://seaborn.pydata.org/generated/seaborn.jointplot.html). 

Name the images with following scheme *independent*\_*dependent*.png where *independent* is variable in y-axis and *dependent* is variable in x-axis.

### HTML
To add image choices to drop down menus following sections of index.html needs editing. Page have two select elements in both left and right side. First select contains option elements for independent variables and second select contains option elements for dependent variables.  

Use the same naming scheme as with the images. <independent> part goes to firt select's options and <dependent> part goes to second select.

## Authors
- Juho Savela
- Meri-Tuulia Kaarakainen

## License
GNU Genral Public License
Version 3
