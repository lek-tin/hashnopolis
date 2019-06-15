---
title: "Machine Learning Questions"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["machine-learning", "data-science"]
categories: ["machine-learning"]
date: 2019-06-08T23:35:57-07:00
draft: false
archive: false
---
### What is an Eigenvalue and Eigenvector?
Eigenvectors are used for understanding linear transformations. In data analysis, we usually calculate the eigenvectors for a correlation or covariance matrix. Eigenvectors are the directions along which a particular linear transformation acts by flipping, compressing or stretching. Eigenvalue can be referred to as the strength of the transformation in the direction of eigenvector or the factor by which the compression occurs.

### What is Gradient Descent?
A method to find the local minimum of a function. From a point along the direction of gradient to iterational search by a certain step length, until gradient equals zero.

### What is the curse of dimensionality?
It refers to various phenomena that arise when analyzing and organizing data in high-dimensional  spaces (often with hundreds or thousands of dimensions) that do not occur in low-dimensional settings.

### How can you overcome Overfitting?
Regularization: add a regularizer or a penalty term. Cross Validation: Simple cross validation; S-folder cross validation; Leave-one-out cross validation.

### How will you define the number of clusters in a clustering algorithm?
Though the Clustering Algorithm is not specified, this question will mostly be asked in reference to
K-Means clustering where “K” defines the number of clusters. The objective of clustering is to group similar entities in a way that the entities within a group are similar to each other but the groups are different from each other.  

For example, the following image shows three different groups.
![](https://s3.amazonaws.com/files.dezyre.com/images/blog/100+Data+Science+Interview+Questions+and+Answers+(General)/Data+Science+Interview+Questions+K-Means+Clustering.jpg)

K-Mean Clustering Machine Learning Algorithm  
Within Sum of squares is generally used to explain the homogeneity within a cluster. If you plot WSS for a range of number of clusters, you will get the plot shown below. The Graph is generally known as Elbow Curve.  
![](https://s3.amazonaws.com/files.dezyre.com/images/blog/100+Data+Science+Interview+Questions+and+Answers+(General)/Data+Science+Interview+Questions+K-Means.png)

Red circled point in above graph i.e. Number of Cluster =6 is the point after which you don’t see any decrement in WSS. This point is known as bending point and taken as K in K – Means. This is the widely used approach but few data scientists also use Hierarchical clustering first to create dendograms and identify the distinct groups from there.  

### Why L1 regularizations causes parameter sparsity whereas L2 regularization does not?
Regularizations in statistics or in the field of machine learning is used to include some extra  information in order to solve a problem in a better way. L1 & L2 regularizations are generally used
to add constraints to optimization problems.

![](https://s3.amazonaws.com/files.dezyre.com/images/blog/100+Data+Science+Interview+Questions+and+Answers+(General)/L1+L2+Regularizations.png)

In the example shown above H0 is a hypothesis. If you observe, in L1 there is a high likelihood to 
hit the corners as solutions while in L2, it doesn’t. So in L1 variables are penalized more as compared to L2 which results into sparsity.
In other words, errors are squared in L2, so model sees higher error and tries to minimize that squared error.

### Explain the difference between L1 and L2 regularization.
L2 regularization tends to spread error among all the terms, while L1 is more binary/sparse, with
many variables either being assigned a 1 or 0 in weighting. L1 corresponds to setting a Laplacean
prior on the terms, while L2 corresponds to a Gaussian prior.  

![](https://lh6.googleusercontent.com/vXUSHKE11Qpolek11IPPP6Fs-iU1-LeWtf5EXVdrfOl97ytug_cME-vLF1t4BNvoAppxfRhx4dNzHoKkdl8dfGVix4jc2hhvrtDG_wyuByxpVfeFZQdMH-INzG6RSi_9jkJLERto)

### Can you cite some examples where a false positive is important than a false negative?
Before we start, let us understand what are false positives and what are false negatives.
False Positives are the cases where you wrongly classified a non-event as an event a.k.a Type I error.  
And, False Negatives are the cases where you wrongly classify events as non-events, a.k.a Type II error.
![](https://s3.amazonaws.com/files.dezyre.com/images/blog/100+Data+Science+Interview+Questions+and+Answers+(General)/False+Positive+False+Negative.png)

### Can you explain the difference between a Test Set and a Validation Set?
Validation set can be considered as a part of the training set as it is used for parameter selection
and to avoid Overfitting of the model being built. On the other hand, test set is used for testing 
or evaluating the performance of a trained machine leaning model.   
In simple terms ,the differences can be summarized as -  
- Training Set is to fit the parameters i.e. weights.
- Test Set is to assess the performance of the model i.e. evaluating the predictive power and generalization.
- Validation set is to tune the parameters.

### Explain how a ROC curve works.
The ROC curve is a graphical representation of the contrast between true positive rates and the 
false positive rate at various thresholds. It’s often used as a proxy for the trade-off between
the sensitivity of the model (true positives) vs the fall-out or the probability it will trigger 
a false alarm (false positives).
![](https://lh3.googleusercontent.com/zUWYO4VwGpoyu9oygT12F3hgZ30GxVY7sg_ZF46INrNbDutd9mVz9GnYIYGw2r1ZcbPLQXF4HV-uNXvQcVrP7Sg2BDDqRkaY3RAApumdXgH2mQZ8OCSgqqsVl7UDVjqwVFq224Z_)

### What’s the difference between a generative and discriminative model?
A generative model will learn categories of data while a discriminative model will simply learn the 
distinction between different categories of data. Discriminative models will generally outperform 
generative models on classification tasks.

#### What cross-validation technique would you use on a time series dataset?
Instead of using standard k-folds cross-validation, you have to pay attention to the fact that a 
time series is not randomly distributed data — it is inherently ordered by chronological order. If a pattern emerges in later time periods for example, your model may still pick up on it even if that effect doesn’t hold in earlier years!  
You’ll want to do something like forward chaining where you’ll be able to model on past data then
look at forward-facing data.  
fold 1 : training [1], test [2]  
fold 2 : training [1 2], test [3]  
fold 3 : training [1 2 3], test [4]  
fold 4 : training [1 2 3 4], test [5]  
fold 5 : training [1 2 3 4 5], test [6]  

### How is a decision tree pruned?
Pruning is what happens in decision trees when branches that have weak predictive power are removed 
in order to reduce the complexity of the model and increase the predictive accuracy of a decision 
tree model. Pruning can happen bottom-up and top-down, with approaches such as reduced error pruning and cost complexity pruning.  
Reduced error pruning is perhaps the simplest version: replace each node. If it doesn’t decrease  predictive accuracy, keep it pruned. While simple, this heuristic actually comes pretty close to an approach that would optimize for maximum accuracy.  

### Name an example where ensemble techniques might be useful.
Ensemble techniques use a combination of learning algorithms to optimize better predictive performance.  They typically reduce overfitting in models and make the model more robust (unlikely to be influenced by small changes in the training data).  
You could list some examples of ensemble methods, from bagging to boosting to a “bucket of models” method and demonstrate how they could increase predictive power.  

### How do you ensure you’re not overfitting with a model?
This is a simple restatement of a fundamental problem in machine learning: the possibility of 
overfitting training data and carrying the noise of that data through to the test set, thereby
providing inaccurate generalizations.  
There are three main methods to avoid overfitting:  
1. Keep the model simpler: reduce variance by taking into account fewer variables and parameters, 
thereby removing some of the noise in the training data.
2. Use cross-validation techniques such as k-folds cross-validation.
3. Use regularization techniques such as LASSO that penalize certain model parameters if they’re 
likely to cause overfitting.

### What’s the “kernel trick” and how is it useful?
The Kernel trick involves kernel functions that can enable in higher-dimension spaces without explicitly calculating the coordinates of points within that dimension: instead, kernel functions compute the inner products between the images of all pairs of data in a feature space. This allows them the very useful attribute of calculating the coordinates of higher dimensions while being computationally cheaper than the explicit calculation of said coordinates. Many algorithms can be expressed in terms of inner products.  
Using the kernel trick enables us effectively run  algorithms in a high-dimensional space with lower-dimensional data.  

### 
