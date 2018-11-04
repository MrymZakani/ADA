# Are we consuming more local?

# Abstract
At an era where more and more ecological questions have risen, it seems that European countries, such as Switzerland or France, are trying to encourage the sale of their national products within their own territory and reduce the importation of alimentary goods. Indeed, one can easily notice that swiss supermarkets are promoting regional products, with labels such as “Aus der Region” in order to answer a growing request from customers to buy local products. However, are these few changes a simple superficial trend, or do we really import fewer goods? The research thus intends to determine the origin of most products we consume within Switzerland and in general, to give an overview of the income of resources from other countries to Switzerland, taking into account information as the origin of the ingredients and the place of manufacture. The research will be conducted with the help of the database Open Food Facts https://world.openfoodfacts.org/data, which provides origin information about products that are consumed in different countries around the world.


# Research questions
1) Where are the products we consume in our everyday life coming from?
    * Which countries produce the primary resources (ground ingredients) consumed in Switzerland?
    * Which countries manufacture most of the products consumed in Switzerland?

2) Is there a trend over time to consume more local products? 
    * Are new products mostly using primary resources from Switzerland? Or from other countries inside Europe?
    * Are new products mostly manufactured in Switzerland? Or from other countries inside Europe?
    * Is there a trend over time to local products to promote their origin?

# Dataset
Open Food Facts(https://world.openfoodfacts.org/data) is a non-profit project developed by thousands of volunteers from around the world. The database is composed of alimentary products that are consumed around the world. Each product contains a list of ingredients, their origin, the country or places where the product is manufactured or transformed and the countries where the product is sold. 

For the first research question, we would take into account those features, filtered to the specific case of Switzerland. As a deliverable of this, an interactive map showing the countries related to Switzerland in term of alimentary goods would be displayed.


For the second research question, we would take the feature  “Product added on” as an indicator of the presence of the product in the country. A cleaning process would be necessary, in order to group similar products to their earlier appearance date in the dataset. 

Additional datasets such as “Evolution de la consummation de denrées alimentaires en Suisse” and “Dépenses fédérales pour l’agriculture et l’alimentation” from https://opendata.swiss/fr/group/agriculture could be explored, in order to have a richer temporal and political context. 

# A list of internal milestones up until project milestone 2

For milestone 2, we should have the outcome for the first research question, which includes:
## 4-12 Nov
- Cleaning/Exploring dataset
- Descriptive analysis
  * We should determine the list of products that are sold in Switzerland
  * We should then classify these products under different categories:
    * products entirely originating from Switzerland
    * products partially originating from Switzerland (manufactured in Switzerland but ingredients are from another country)
    * products not originating from Switzerland
* Draw statistics from the importation balances, determining which are the countries producing most of the ground ingredients and manufacturing the products consumed in Switzerland.

## 12-19 Nov
- Discuss the narrative of the data-story.
- Find related datasets to enrich our dataset
- Deciding Graph representation

## 19-25 Nov
- Having a clickable map
    * Create an (interactive) map showing these exchanges
    * Create a map showing major actors on the global food market
- Finding the blog skeleton.

# Questions for TAa
- Which technology do you recommend in order to create a blog representation for our user story?
- What is a good scope for this project? Is it good to narrow scope of our research down to Switzerland?
- As mentioned in dataset part, Can we use "product added on" as an indicator of the presence of the product in the country? Otherwise, we were thinking about using the "evolution of the consumption of products categories" given by the swiss-open-data, and then linking those categories, with the categories of the products in open-food-data. In this point we could draw conclusions of country-of-origin-of-ingredients, and country-of-manufacture by years. Is this approach right? is there another better approach?