# FCND - 04 - Estimation - 01 - Intro to Estimation
Previous: [+FCND - 03 - Control](https://paper.dropbox.com/doc/FCND-03-Control-irVk0GzJyFZV5JC3AHSX7) 
Next: [+FCND - 04 - Estimation - 02 - Intro to Sensors](https://paper.dropbox.com/doc/FCND-04-Estimation-02-Intro-to-Sensors-f8ClXg3WfHWqJ7PDUqbwG) 

## 4. Review of Discrete Probability

**Probability Mass Function**
Once you have a Probability Mass Function you can determine conditional probability.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587822454114_image.png)


**Sample Space** - The set of all possible outcomes for a probabilistic trial. For the case of rolling a single die, the sample space would be \left \{ 1,2,3,4,5,6 \right \}{1,2,3,4,5,6}

**Normalized**
sum of probabilities of all events = 1.
Any mathematically correct distribution must be normalized, but un-normalized distributions can also be useful if we just want to compare relative probabilities.

**Conditional Probability**
The conditional probability p(A|B)*p*(*A*∣*B*) gives the probability of event A *given* that event B has already occurred.

**Probability Distribution**
A mapping of events to probabilities. For a **discrete** distribution we can use a table like the following for a fair die:

| **Event** | **Probability** |
| --------- | --------------- |
| 1         | 1/6             |
| 2         | 1/6             |
| 3         | 1/6             |
| 4         | 1/6             |
| 5         | 1/6             |
| 6         | 1/6             |

**Random Variable** - A random variable is a variable whose possible values are outcomes of some random phenomenon.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587822859460_image.png)



## 5. Expected Value

Tells us the result of the random variable at any given time.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587823219512_image.png)



## 6. Variance

How spread out are these values around the mean x_bar.
It’s an expression of how well we know the **mean**. It’s a confidence. It tells us how much the samples vary.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587823353101_image.png)


**Expected Value** - The expected value gives the long-run average value of a repeated probabilistic experiment. Mathematically, the expected value of a random variable X is defined as:

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587823408726_image.png)


**Variance** - The variance of a random variable measures how spread out a set of numbers are from their mean (expected value).

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587823417570_image.png)


**Standard Deviation** - The standard deviation is a common measure of spread. It's just the square root of the variance.


## 8. Probability Density Function

**Cumulative Distribution Function**
Describes probability that x <= u

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587824288863_image.png)


**Probability Density Function**
The derivative with respect to u of the CDF

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587824371337_image.png)


We use the PDF to determine probability by calc’ing the area under the PDF curve of the range in question. Blue line below is the PDF.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587824877181_image.png)


We often use use `p` in place of f(x) in the integral formula.

To be a proper density, 

- area under the curve must be 1
- f_x(u) >= 0

**Normalization of the PDF** means finding a constant multiplier in front of the PDF to make it integrate to 1.


## 10. Uniform and Gaussian Distributions

p(x|theta) does not mean theta parameterizes the distribution, it means theta is a random variable.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587825409422_image.png)


**Uniform Distribution**
All outcomes are equally likely. We use this when we have no idea what the parameters that drive p(x) actually are.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587825493152_image.png)


**Gaussian (Normal) Distribution**

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587825611995_image.png)

- 68% probability sample lies within 1sigma
- 99.7% within 3sigma

Larger sigma (standard deviation), lower confidence of distribution around the mean `u`.

That means Normal distribution can be fully described by parameters sigma and mu. That makes them the `theta` for this distribution.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587825758896_image.png)


We need to estimate the variance of sensors before we can use them in our vehicles.


## 11. Estimating Parameters from Data

Using a technique called the Method of Moments you can estimate the parameters sigma and mu by sampling.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587825954991_image.png)



## 12. Multivariate Distributions

Our sensor data is vector not scalar, so 6DoF sensor is a 6 dimensional vector. The formulas are slightly different for this.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587826244518_image.png)


**1-D**: **Variance (lowercase sigma) →  N-D: Covariance (uppercase sigma)**
Covariance is a symmetric positive semi-definite matrix (no negative eigenvalues)

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587835944101_image.png)




## 13. 2-D Gaussian Distribution (Code)

For the following exercise we will use the two dimensional data below where a gaussian distribution can be inferred from the relationship between the two dimensions.

http://pastebin.com/Xmgy32Fu



    import numpy as np
    import matplotlib.pyplot as plt
    import numpy.linalg as LA
    from matplotlib.patches import Ellipse
    
    %matplotlib inline
    
    def create_ellipse(mu, angle, width, height):
        # angle is plotted such that it starts from 180 and goes
        # clockwise instead of from 0 degrees and goes counter-clockwise
        # so 135 degrees -> 45 degrees
        return Ellipse(xy=mu, width=2*width, height=2*height, angle=angle,
                          facecolor='none', edgecolor='k', linewidth=3.5)
    
    def plot_ellipse(mu, sigma):  
        (w, v) = LA.eig(sigma)
        angle = np.degrees(np.arctan2(v[1, 0], v[0, 0]))
        
        ax = plt.gca()
        ellipse = create_ellipse(mu, angle, w[0], w[1])
        ax.add_patch(ellipse)
        plt.plot(mu[0], mu[1], 'ro')


**Calculate Covariance matrix (2x2) for two column data**

    C = np.cov(samples[:,0],samples[:,1]) // samples is a bunch data with 2 columns
    print("Covariance =\n", C)


    Covariance =
     [[  1.00244159   1.02573364]
     [  1.02573364  10.54451446]]

**Calculate mean (2 element array) for two column data**

    mean = np.mean(samples, 0)
    print("Mean =\n", mean)


    Mean =
     [-0.49030358  2.01127981]

**Plotting mean and covariance**
The mean plots the red dot, center of the ellipse.
The covariance matrix controls the shape and angle of the ellipse.


    plt.title('Covariance')
    plt.axis('equal')
    plt.xlabel('VARIABLE 1')
    plt.ylabel('VARIABLE 2')
    
    plt.plot(samples[:500, 0], samples[:500, 1], 'bx')
    plot_ellipse(mean, C)
![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587877700120_image.png)



## 14. Joint and Marginal Distributions


https://www.youtube.com/watch?v=Sm0Jv3lilQo&


[https://youtu.be/Sm0Jv3lilQo](https://youtu.be/Sm0Jv3lilQo)

**Joint Distribution**
The joint distribution `*p*``(``*x*``,``*y*``)` gives the probability of event `*x*` and event `*y*` happening. This idea can be generalized to situations with more than two random variables as well.

**Marginal Distribution**
The marginal distribution of a subset of random variables gives the probability distribution over just the variables in that subset.

For example, let's say you know the probability distribution on a vehicle's `x,y,z` location in space: `*p*``(``*x*``,``*y*``,``*z*``)`, but you only care about the vehicle's altitude (z). You could compute the **marginal distribution** for z by integrating out the other two variables.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587878438068_image.png)


**Independence** - Two events `*x*` and `*y*` are independent when their joint probability is equal to the product of the individual probabilities. That is, when:

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587878460319_image.png)

![Positive Gaussian](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587878667164_image.png)
![Independent](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587878701022_image.png)


When independent, knowing x1 tells us nothing about the probability of x2.

**Want to read more?**
The wikipedia articles on these topics are pretty helpful if you want to read more!

- [**Joint Probability Distribution**](https://en.wikipedia.org/wiki/Joint_probability_distribution)
- [**Marginal Distribution**](https://en.wikipedia.org/wiki/Marginal_distribution)
- [**Independence**](https://bit.ly/2HUxThg)


## 15. Correlation and Independence
https://www.youtube.com/watch?v=gZIjyw62RdA&


[https://youtu.be/gZIjyw62RdA](https://youtu.be/gZIjyw62RdA)

**Correlation**: When two random variables are correlated, knowledge of one provides some information about the other. For example, the position of a vehicle **now** and the position of a vehicle in **one second** are correlated random variables: knowledge of one should give me some insight into the value of the other.

The **Pearson correlation coefficient** is one way of quantifying this relationship.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587894207928_image.png)


Independent variables have zero correlation and below is the mathematical proof for that

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587894269658_image.png)


This makes the numerator cov(x1,x2) = 0 and therefore the correlation is zero. The key is that if you know x1 and x2 are independent, then E|x1 * x2| == E|x1| * E|x2|

**Uncorrelated but Independent**
Below, y1 and y2 are uncorrelated because correlation equation can be shown to equal zero. But they are clearly not independent since they are related to another variable.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587894504919_image.png)


**Impact of Pearson Product-Moment Correlation on Jointly Gaussian Variables**
…but for jointly gaussian random variables, if correlation is zero you can indeed deduce that they are independent.

**Covariance**: Covariance is related to correlation. It is a measure of the *joint variability* of two random variables. If one variable tends to be big when the other is big, then the covariance is positive. The **correlation coefficient** is simply the normalized version of the covariance.

**Additional Resources**
Again, the wikipedia articles on these topics are generally thorough and well-explained.

- [**Correlation**](https://en.wikipedia.org/wiki/Correlation_and_dependence)
- [**Pearson Correlation Coefficient**](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)
- [**Covariance**](https://en.wikipedia.org/wiki/Covariance)


## 16. Conditional Distribution
https://www.youtube.com/watch?v=nxDCf_vMXms&


[https://youtu.be/nxDCf_vMXms](https://youtu.be/nxDCf_vMXms)


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587894847938_image.png)


In the example from the video, we took x to be the vehicle position and y to be the sensor measurements. With this in mind, this notation takes on some real world meaning.


| Notation     | "Real world" Meaning                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------ |
| *p*(*x*)     | The probability of the vehicle being in position x.                                              |
| *p*(*x*,*y*) | The probability of the vehicle being in position x **and** making measurements y.                |
| *p*(*x*∣*y*) | The probability of the vehicle being in position x **given** that we've made the measurements y. |
| *p*(*y*∣*x*) | The probability of making measurements y given that the vehicle is in position x.                |



![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587895176978_image.png)


**The Chain Rule**
A very useful rule in estimation is 

    p of x given y = the joint divided by the marginal of the conditioning variable
![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587895003784_image.png)


**Bayes’ Rule**
The Chain Rule is used when needing to reverse the conditional distribution because it is often easier to get a model of x given measurement y → p(y|x)

So you can apply the chain rule twice and it yields the Bayes’ Rule.

When we do estimation for a flying vehicle, we generally have access to the measurements y and we want to know the probability of x **given** those measurements. So we want to calculate p(x|y)*.*

But it turns out that it's often MUCH easier to generate the distribution of measurement likelihoods given the current position. That is, it's easier to come up with p(y|x)*p*(*y*∣*x*) than it is to come up with p(x|y)*p*(*x*∣*y*). This is where Bayes' Rule is really helpful! According to Bayes' Rule:



## 17. Applying Bayes’ Rule
https://www.youtube.com/watch?v=R6S8VnN2CkA&


[https://youtu.be/R6S8VnN2CkA](https://youtu.be/R6S8VnN2CkA)

Using Bayes’ Rule we can find probability of x given measurement y. v is the variance of measurement y which is clearly indpenedent of x. 

Multiplying normal distributions always result in another normal distribution.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587895767685_image.png)


Performing this multiplication gives rise to a new normal distribution shown below, which has some special properties.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587895943632_image.png)


Sigma(x) and sigma(v) are basically measures of how much we trust the estimate or the measurement.

**Quiz**

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587896120649_image.png)

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587896128139_image.png)

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587896136084_image.png)

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587896144077_image.png)



## 18. Approaches to Estimation

Sensors add zero-mean gaussian noise to each measurement. 

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587896521649_image.png)

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587896702723_image.png)


There are 3 ways to estimate, but all 3 require the vehicle to be stationary. We use Kalman filters and its variants EKF and UKF to incorporate motion into our state estimations.


**Variables**

| x       | The unknown (and constant) state vector. This is what we're estimating!                       |
| ------- | --------------------------------------------------------------------------------------------- |
| H       | The (linear) measurement model. Perfect measurement of the state would yield                  |
| v       | The noise which corrupts our measurements. It's sampled from a zero-mean normal distribution. |
| R       | The covariance of the measurement noise.                                                      |
| m       | The number of measurements made.                                                              |
| y_tilde | the actual noisy measurements                                                                 |



## 19. Intro to Least Squares
https://www.youtube.com/watch?v=_V72SUDhIAw&


[https://youtu.be/_V72SUDhIAw](https://youtu.be/_V72SUDhIAw)

Least squares makes unrealistic oversimplifications. But is still common for 

- calibration
- finding the constant between 2 coordinate systems
- model fitting
![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587897031765_image.png)




![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587897149028_image.png)


Noise is drawn from a zero-mean gaussian distribution with covariance R, which is a known variance x identity matrix.

If we knew the errors (v) we could subtract them out and solve for x. 
Or if we knew x we could solve for the errors. But we don’t know any of these.

To overcome this we use a maximum likelihood estimation approach, answering the question, “What vehicle state is most likely to present these set of measurements”


## 20. Deriving the Maximum Likelihood Estimator


https://www.youtube.com/watch?v=yQmtE0vWCQg&


[https://youtu.be/yQmtE0vWCQg](https://youtu.be/yQmtE0vWCQg)

**Equation for Least Squares**

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587897855726_image.png)

1. First we figure out the PDF of p(y|x) which gives us likelihood of y given x.
2. Then we choose x_hat which is the value that gives us the maximum likelihood of y_tilde given x_hat.

**Step 1.**
First we assume the PDF is a gaussian. What’s the mean and whats the covariance?

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587898130297_image.png)


The mean is Hx because v has no impact on the mean. 
The covariance is just the covariance of the noise which is R.

**Step 2.**
Write out the gaussian formula pluggin in mean Hx and covariance R

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587899066472_image.png)


The normalizer (denominator) does not depend on `x` at all. The choice of x has no impact on this normalizer. If we want to maximize this function we only care about the exponent.

Which means we want to maximize the exponent. There is a standard way to maximize an equation like this.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587899211874_image.png)


This is the solution to the least squares estimation problem given some set of measurements y_tilde that are **linearly related** to some unknown x by matrix H, which we assume we know.


## 21. Fitting a line with Linear Least Squares


https://www.youtube.com/watch?v=UfmjTc33wa8&


[https://youtu.be/UfmjTc33wa8](https://youtu.be/UfmjTc33wa8)


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587899479153_image.png)


The maximum likelihood estimator is purely a function of our measurement model, H, and our actual measurements, y_tilde.

**Fitting the line**

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587899653944_image.png)


We’re solving for our unknown state vector x.

Each measurement follows the model equation with v perturbing the measurement.

In order to get our measurements vector (y_tilde) to match up to the model equation, we need a matrix H. The matrix H maps the state space to the measurement space.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587899771983_image.png)


Figuring out how to form H for any estimation problem is the tricky part, the rest is just math to get the best estimate.


## 22. Least Squares Exercise

In this notebook you'll use least squares to estimate a state vector 𝑥x, given 𝑚m noisy measurements derived from:

- 𝑦̃ =𝐻𝑥+𝑣y~=Hx+v

𝑣v is sampled from gaussian 𝑁(0,𝑅), and 𝐻 is a matrix mapping the state space to the measurement space. We'll assume x is constant, meaning the vehicle is currently not moving.
Thus you'll want to select an estimate of the state 𝑥, 𝑥̂  which maximizes the likelihood of the observed measurements 𝑦̃ :

- 𝑝(𝑦=𝑦̃ |𝑥=𝑥̂ )

**Collecting observations**

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587901091908_image.png)


The observations plot produces a polynomial of order `len(x) - 1`, i.e. a 4-element state produces a 3rd order polynomial. In this case the state 𝑥 are the coefficients of the polynomial. By generating observation from evaluating the polynomial at several different points we can gain a good approximation of the original state.

As one might imagine, recovering a good approximation of the state requires more samples as the order of the polynomial increases.

**Estimating x**
Given enough samples 𝑥̂ x^ should converge to 𝑥x. The exact number of measurements required depends on the complexity of mapping the state space to the measurement space, 𝐻H and how noisy the measurements are, determined by 𝑣v.
Recall from lecture:
𝑥̂ =(𝐻𝑇𝐻)−1𝐻𝑇𝑦̃ x^=(HTH)−1HTy~
𝑥̂ x^ should be similar to 𝑥x.


    x_hat = LA.pinv(H.T @ H) @ H.T @ y_obs


## 23. Recursive Estimation
https://www.youtube.com/watch?v=t1HvD3cqWUY&


[https://youtu.be/t1HvD3cqWUY](https://youtu.be/t1HvD3cqWUY)

Like least squares except we allow for observations to come in one at a time. So we have a prior and we need to keep updating the estimate.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587901370006_image.png)


**MAP estimate**
We can find the posterior estimate p of x given y_tilde

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587901451434_image.png)


We’re taking our prior and turning it into a posterior using new information from our new estimate.

We do this with Bayes’ Rule applied to gaussians. 

Step 1. find the PDF

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587901595668_image.png)


Bayes’ rule applied to gaussians gives us some normalizer `alpha` 

We know that p(y|x) is a normal distribution with mean Hx and covariance R. 
Our prior p(x) is given to us as a normal distribution with mean x_hat_0 and covariance Q_0.
We can ignore the normalizer `alpha` because it has no impact on the maximum.

This is the full formula for the product gaussian.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587901915975_image.png)


When you take the product of the exponent it becomes an exponent of the sum.

**Step 2. Maximize the exponent to find x_hat**
Like we did before, take the derivative of the exponent and solve when zero.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587902000362_image.png)


It is still a gaussian but with updated mean and covariance.


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587902057904_image.png)


**Update the covariance: Q_1**
We do a covariance update to get Q1 which still depends on R even if we define R to be variance * identity matrix.

**Update the mean: x_hat1**
Then we do an update to the mean. It’s like a weighted average of the prior estimate x_hat_0 and what the new measurement says about x (y_tilde - H*x_hat_0). The weights come from the relative magnitude of the covariance (Q1) and the measurement covariance (R)


## 25. The problem with Non-linearities
https://www.youtube.com/watch?v=dcmLDW_ZSfw&


[https://youtu.be/dcmLDW_ZSfw](https://youtu.be/dcmLDW_ZSfw)

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587904075881_image.png)


Before, we were using linear matrix H to project gaussian distributions in the measurement space into the state space. The fact that the state and the measurements were related by a linear function H ensured that the projected distribution stayed gaussian.

That meant that the weighted average posterior distribution was gaussian aswell.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587904302658_image.png)


But when H is not linear and instead is an arbitrary function, we have no guarantees that the projected distributions of y will stay gaussian. Which means it’s harder to take a weighted average between the prior x_hat0 and what the new measurements are telling us. 

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587904457315_image.png)


So we have a problem and need to find a way to make the measurement model linear.



## 26. Calculating the Jacobian Part 1
https://www.youtube.com/watch?v=9q_oQOfjx5k&


[https://youtu.be/9q_oQOfjx5k](https://youtu.be/9q_oQOfjx5k)

**Taylor Series Approximation**
A common way to make a non-linear function linear is to take the Taylor Series Approximation. 

The TSA of h around the estimate x_hat0 is approx

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587904820360_image.png)


If x and y are scalars then H_x_hat0 is just a derivative, also scalar.

**Jacobian - first derivative of the model when x and y are multidimensional vectors**
If x and y are vectors of length n and m respectively, then the first derivative is a matrix called the **Jacobian**

H_x_hat0 is a matrix with individual partial derivative components in the various locations in the matrix.

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587905207633_image.png)


Since we know x_hat0 and H, we can compute the Jacobian:

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587905321613_image.png)


and the function evaluated at the prior mean:

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587905365509_image.png)


which allows us to rewrite this all as a linear equation

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587905395611_image.png)


which is the form we need for recursive estimation to work.

**Summary of Steps for Non-Linear Least Squares Estimation**


1. Calculate the Jacobian

Now we follow the same steps as the Recursive Estimation method

2. update the covariance Q1 and 
3. update the mean x_hat1


![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587905461258_image.png)



## 27. Non-Linear Least Squares Exercise

We're now going to approach estimation with a non-linear state to measurement space mapping.

- 𝑦=ℎ(𝑥)+𝑣

where ℎ(𝑥) is a non-linear function and 𝑣 is a noise vector.

As presented we cannot apply recursive estimation to the problem in it's current non-linear form. However, we can *linearize* the problem, allowing application of recursive estimation:

- ℎ(𝑥)≈ℎ(𝑥̂ 𝑡)+𝐻𝑥̂ 𝑡(𝑥−𝑥̂ 𝑡)

where 𝐻𝑥̂ 𝑡 is the Jacobian of h evaluated at 𝑥̂ 𝑡:

**Update the Jacobian frequently**
This presents ℎ(𝑥) as a linear function in the form of 𝐴𝑥+𝑏 since ℎ(𝑥̂ 𝑡) and 𝐻𝑥̂ 𝑡 are constant in this context. From here we can use recursive estimation the same as before. Note the *linearization* is only useful if 𝑥 is near 𝑥̂ 𝑡, otherwise the approximation quickly breaks down. This is why it's important to update the Jacobian frequently.


    import numpy as np
    import matplotlib.pyplot as plt
    import numpy.linalg as LA
    
    %matplotlib inline

We'll define ℎ(𝑥) as:

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587906011630_image.png)

    def f_range(x):
        """
        Distance of x from the origin.
        """
        return LA.norm(x)
    
    # TODO: complete implementation
    def f_bearing(x):
        """
        atan2(x_2, x_1)
        """
        return np.arctan2(x[2], x[1])
    
    def h(x):
        return np.array([f_range(x), f_bearing(x)])

In order to linearize ℎ(𝑥) we need the Jacobian:

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587906205202_image.png)


Remember to swap the derivative results of atan2 to match the swapped inputs (𝑎𝑡𝑎𝑛2(𝑥,𝑦) vs 𝑎𝑡𝑎𝑛2(𝑦,𝑥).
Jacobian solution:

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587906272176_image.png)

    def jacobian_of_h(x):
        t = (1/2) * (x[0]**2 + x[1]**2) ** (-1/2)
        return np.array([        
            [t*2*x[0], t*2*x[1]],
            
            # atan2(x, y)
            # ( y / (x^2 + y^2), ( -x / (x^2 + y^2)
            # atan2(x, y)
            # ( -x / (x^2 + y^2), ( $y / (x^2 + y^2)
            [-x[0] / (x[0]**2 + x[1]**2), x[1] / (x[0]**2 + x[1]**2)]
        ]).squeeze()

Awesome! With the Jacobian of ℎh in your toolbox, you can plug it into recursive estimation.
The update functions should look familiar (𝐻𝑥̂ 𝑡 is the Jacobian of 𝑥̂ 𝑡).

![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587906491834_image.png)


**Setup**

    n_samples = 1000
    
    # Covariance matrix
    # added noise for range and bearing functions
    #
    # NOTE: these are set to low variance values
    # to start with, if you increase them you
    # might more samples to get
    # a good estimate.
    R = np.eye(2)
    R[0, 0] = 0.01
    R[1, 1] = np.radians(1) 
    
    # ground truth state
    x = np.array([1.5, 1])

Initialize x_hat0 and Q0


    x_hat0 = np.array([3., 3]).reshape(-1, 1)
    Q0 = np.eye(len(x_hat0))



    def recursive_estimation(x_hat0, Q0, n_samples):
        x_hat = np.copy(x_hat0)
        Q = np.copy(Q0)
    
        for _ in range(n_samples):
    
            # TODO: sample a measurement
            y_obs = h(x) + np.random.multivariate_normal([0, 0], R)
    
            # TODO: compute the jacobian of h(x_hat)
            H = jacobian_of_h(x_hat)
    
            # TODO: update Q and x_hat
            Q = LA.pinv(LA.pinv(Q) + H.T @ LA.pinv(R) @ H)
            x_hat = x_hat + (Q @ H.T @ LA.pinv(R) @ (y_obs - h(x_hat))).reshape(2, 1)
            
        return x_hat, Q


    print("x̂0 =", x_hat0.squeeze())
    
    x_hat, Q = recursive_estimation(x_hat0, Q0, n_samples)
        
    print("x =", x.squeeze())
    print("x̂ =", x_hat.squeeze())
    print("Hx =", h(x))
    print("Hx̂ =", h(x_hat))

Example output

    x̂0 = [ 3.  3.]
    x = [ 1.5  1. ]
    x̂ = [ 1.50146985  1.0042896 ]
    Hx = [ 1.80277564  0.5880026 ]
    Hx̂ = [ 1.80638016  0.58952711]

**Error Curve**

    errors = []
    Ns = np.arange(0, 201, 5)
    for n in Ns:
        x_hat, Q = recursive_estimation(x_hat0, Q0, n)
        errors.append(LA.norm(x.squeeze() - x_hat.squeeze()))
    
    plt.plot(Ns, errors)
    plt.xlabel('Number of samples')
    plt.ylabel('Error')
![](https://paper-attachments.dropbox.com/s_5114414F6CF9A5BCF0EB0528957E16D7A0FBB7DA3FD4AC5AFC8B5BC7CFD8C5D6_1587906732914_image.png)

## 28. Concolusion

**Other Resources**

- [**Kalman and Bayesian Filters in Python**](https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python) - This is a **fantastic** resource. It's a GitHub repository containing a series of Jupyter notebooks which are meant to teach the intuition underlying Kalman Filters (something we'll discuss in lessons 3 and 4). But there are also some great notebooks covering more introductory topics like Gaussians and Multivariate Gaussians.
- [**Udacity's Intro to Statistics Course, taught by Sebastian Thrun**](https://classroom.udacity.com/courses/st101) - Browse through these lessons for a slower-paced explanation of topics like probability, conditional probability, Bayes' Rule, probability distributions, correlation, estimation, averages, variance, and normal distributions.

