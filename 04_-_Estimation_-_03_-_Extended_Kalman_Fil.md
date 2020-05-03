# FCND - 04 - Estimation  - 03 - Extended Kalman Filters
Previous: [+FCND - 04 - Estimation - 02 - Intro to Sensors](https://paper.dropbox.com/doc/FCND-04-Estimation-02-Intro-to-Sensors-f8ClXg3WfHWqJ7PDUqbwG) 
Next: [+FCND - 04 - Estimation - 04 - 3D EKF and UKF](https://paper.dropbox.com/doc/FCND-04-Estimation-04-3D-EKF-and-UKF-1s16stgLENx2NRjvmlgIA) 

# 6. Recursive Averages

To avoid memory and performance problems of keeping track of all previous measurements, use the recursive average formula

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587974535361_image.png)

## Markov Assumption

Updated estimate only depends on **current observation** and **previous estimate**


## Exponential Moving Average

New measurements don’t affect the recursive average after a long period of time t. So we use exponential averaging.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587974672507_image.png)


but this also has similar drawbacks to the normal average.


# 7. Need for Control

We need control to solve the drawbacks of the exponential moving average

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587975211207_image.png)

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587975311490_image.png)


We’re going to use our own model of the system to incorporate our control input and expected output.


# 9. Bayes Filter

If we know the control input we can model what we expect the measurement to be.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587975652457_image.png)



- We use the model to predict the measurement
- We use measurements to correct the prediction
![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587975663247_image.png)


We increase uncertainty in our estimate
Then we make a measurement to decrease the uncertainty

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587975797231_image.png)



![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587975870318_image.png)



## Predict function

bel_bar is an integral, but can be a closed interval.
When the belief is gaussian, it takes the form of matrix operations over the mean and covariance matrix.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587975899616_image.png)



## Update function

We use the predicted state and update it with a new estimation using Bayes’ Rule. It uses P(z|x) x belief

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587976000898_image.png)



# 11. Kalman Filter Math


## State Transition Function (g)

You’ll usually see Kalman Filter math expressed in the matrix notation below.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587977516393_image.png)


This is equivalent to the more readable version of it above, which just says that to advance the state:
**State**

- velocity component = velocity at time t + acceleration control at time (t) x timedelta
- position component = position at time t + velocity at time (t) x timedelta


## Beliefs are Gaussian

We’re saying that beliefs are gaussian, so all we need to pass around is mean and sigma:

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587977763147_image.png)


Then we can manipulate the mean and covariance (sigma) in the prediction and update steps.



# 12. Kalman Predict

Instead of taking some arbitrary belief, it takes 

- mean from t-1
- covariance from t-1
- current control input
- delta time
![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978190601_image.png)


Because everything is gaussian, the integral from the Bayes’ Filter takes a closed form and you can compute the new gaussian by taking the old mean and passing it through the state transition function from above. That gives us a new mean.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978020669_image.png)


To update the covariance, we use g_prime function to get the matrix G_t

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978169521_image.png)


We use the G_t matrix to transform the old covariance and add the Process Noise (Qt). The process noise is why uncertainty always grows.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978308727_image.png)


Now we have a new mean and covariance.

**A note on EKF**
The above is an overkill way of writing the pseudocode for a Kalman Filter, but it is done this way because it is identical to the EKF pseudocode, where Gt is the Jacobian of the state transition function. This is like the derivative of the state transition function with respect to the state.


![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978410940_image.png)


When everything is linear in a Kalman Filter we can simplify this derivative down to:

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978475124_image.png)


It just returns the same A matrix every time in linear Kalman Filters.



# 13. The Measurement Function

Just like we have a prediction model g, we need a measurement model h(x_t)


![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978672513_image.png)


This matrix C just picks out the z value when multiplied by the state xt. 
When you incorporate that into the Bayes Filter Update function:

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978730413_image.png)


Here we use the **bel_bar: belief after prediction** and **z_t**: measurement. Then we use Bayes’ Rule to incorporate the measurement with the predicted state.

But for a Kalman Filter the Update function looks a bit different.


# 14. Kalman Update

We just pass around the new mean and covariance estimates from the prediction step.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587978871306_image.png)


**H_t**
We use the the h’(u_bar_t) function to get some H_t matrix. 
In the EKF this will be the Jacobian of the measurement model, but in Kalman Filter it is the C matrix from the linear measurement model.

**Kalman Gain**
This tells us how much we trust our new measurement compared to our previous belief.
Calculate kalman gain by using the old covariance transformed by the measurement model, then adds the measurement noise **R.** 

Then transform all that, which took place in the measurement space, back into the state space, and that gives you K_t, Kalman Gain.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587979057493_image.png)


This is the mathematically correct way to get the Kalman Gain. The proof is long and not shown here.

**New mean**
Now we just take

- old mean + kalman gain x (actual measurement - measurement expected based on measurement model)
![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587979245133_image.png)


**New covariance**

Now we compute the new covariance with matrix math taking into account the Kalman Gain.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587979340944_image.png)



# 15. Kalman Filter Exercise

We use the formulas from this research in a python notebook and compute a KF manually: [link](https://www.overleaf.com/read/vymfngphcccj)

https://www.dropbox.com/s/s352tekgmvl9bow/Estimation_for_Quadrotors.pdf?dl=0



# 16. Non-linear Drone
https://www.youtube.com/watch?v=23dKxgmrdd0&


[https://youtu.be/23dKxgmrdd0](https://youtu.be/23dKxgmrdd0)

Here we use a control that immediately sets the roll angle `phi` which causes y velocity  `y_dot`

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587981680657_image.png)


Our state transition function is as follows:

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587981655863_image.png)

- first component is just the phi component of the control signal or just  `phi` in this case.
- update velocity (y_dot) = current velocity - sin(`phi`) x dt
    - phi here is part of the state vector x which is why we write it like `x_t_phi`
- update y position = current_y + current_y_velocity * dt



## Kalman Filter requires update to not depend on the state

In the 1-D case transformation function g is linear.
We can’t use a Kalman Filter in 2-D because we can’t factor this into A and B matricies that don’t depend on the state.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587981952113_image.png)


To use a Kalman Filter we need to linearize around the current state of the vehicle. We do that with a Jacobian.


# 17. EKF Predict

Jacobian is like a derivative. Its a 3x3 of partial derivatives. The Jacobian tells us how each component of g change as each of the components of the state vector change.

Lets use this shorthand for referring to the components of each matrix

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982291545_image.png)


This is how you compute the Jacobian looks for this situation. You take the derivative of g with respect to x in each index.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982234390_image.png)


This is what happens when you solve the Jacobian

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982358191_image.png)


Which is:

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982389658_image.png)


Now this g changes with the state of the vehicle. 

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982422748_image.png)


This is a **linear approximation of the state transformation function near the state x.**

Remember in the linear 1-D case g_prime was constant, just equal to the A matrix. It’s the derivative of g with respect to x.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982567292_image.png)


But for non-linear, g is not constant so we have to calculate the Jacobian every time we want to predict and propagate the covariance forward.

![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982527068_image.png)


**Sympy**


    import sympy
    sympy.init_printing(use_latex=True)
![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982707873_image.png)



    # 1. define sympy symbols
    u_phi, phi, y_dot, y, dt = sympy.symbols(
    'u_phi, phi, y_dot, y, dt')
    
    # 2. define the state variable
    x = sympy.Matrix([
        phi, 
        y_dot, 
        y])
    
    # 3. define state transition function
    g = sympy.Matrix([
        u_phi,
        y_dot - sympy.sin(phi) * dt,
        y + y_dot * dt
    ])
    
    # 4. take jacobian of g with respect to x
    g.jacobian(x)
![](https://paper-attachments.dropbox.com/s_E9DB254B1ACEFC772649DEA984B2041225BE330CBBD4F5972777C7551CC81940_1587982730342_image.png)


