import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Read the data from csv file 'filename.csv'  (use sep=None attribute if the file is tab delimited)
data = pd.read_csv("your-file-name.csv", engine='python')

# With specified color palette, the lines below draw a scatterplot with marginal histograms and regression line
with sns.color_palette("RdBu", 16):
	_ =sns.jointplot(x="Your dependent variable b", y="Your independent variable b", data=data, kind='reg')

plt.show()


