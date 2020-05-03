# FCND - 04 - Estimation - 04 - 3D EKF and UKF
Previous: [+FCND - 04 - Estimation  - 03 - Extended Kalman Filters](https://paper.dropbox.com/doc/FCND-04-Estimation-03-Extended-Kalman-Filters-2cV3UVce34YuHNVbcboxj) 


# 4. EKF Tradeoffs - State
## EKF State Vector
![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587984675669_image.png)


When you take attitude out of EKF you won’t get as good an estimate, but sometimes you do it to save on complexity.

## **The "Full" State Vector**

Often, the **full** state vector actually has more than 12 variables in it. That's because in addition to estimating the typical 12 variables, we often also want to keep track of the IMU biases. Remember from the lesson on sensors that bias is typically modeled as a random walk, that is:

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587984540603_image.png)


Estimating the bias in real-time like this is what's known as "online system identification".
**NEXT**



# 5. EKF Tradeoffs - Control

We can use the IMU measurements as control inputs instead of measurements to keep the state vector smaller and to avoid problems with low-cost hardware where the control signals don’t accurately reflect the control outputs.

https://www.youtube.com/watch?v=CocSTlcO4w0&


[https://youtu.be/CocSTlcO4w0](https://youtu.be/CocSTlcO4w0)


## **Additional Reading**

If you're interested in learning more about the tradeoffs associated with using the accelerometer as the control input, this paper goes over a thorough analysis of different approaches: [Fusing Inertial Sensor Data in an Extended Kalman Filter for 3D Camera Tracking](https://eresearch.ozyegin.edu.tr/bitstream/handle/10679/947/Fusing%20inertial%20sensor%20data%20in%20an%20extended%20kalman%20filter%20for%203D%20camera%20tracking.pdf?sequence=2&isAllowed=y)
https://eresearch.ozyegin.edu.tr/bitstream/handle/10679/947/Fusing%20inertial%20sensor%20data%20in%20an%20extended%20kalman%20filter%20for%203D%20camera%20tracking.pdf?sequence=2&isAllowed=y


# 6. Complimentary Filter
https://www.youtube.com/watch?v=kthK1fr4N78&


[https://youtu.be/kthK1fr4N78](https://youtu.be/kthK1fr4N78)

Accelerometers when averaged over long time scales should point down. We can use that down reference to measure attitude. But only over long time scales.

Rate gyros give good estimates of angular rates, not noisy but are susceptible to drift. Not useful for long timescales.



![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587985682241_image.png)



# 7. Complimentary Filter Math
https://www.youtube.com/watch?v=SlZoIyvqdPM&


[https://youtu.be/SlZoIyvqdPM](https://youtu.be/SlZoIyvqdPM)

Our measurements come in at some frequency, so Ts is the time between such measurements.

We need to come up with estimates for `theta` and `phi` using previous estimate and new measurement

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587986173906_image.png)


**Theta**
To estimate theta we use the following algorithm.
tau is a time constant

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587986274183_image.png)


This term is an integration. We take the old estimate and add the change from the gyros. So it is susceptible to drift.

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587986382350_image.png)


Now we add the direct measurement from the accelerometer. a much noisier estimate but not susceptible to drift.

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587986453651_image.png)


We put a low-pass filter on the high drift component and a high-pass filter on the noisy component 

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587986582795_image.png)


Which gives us the benefit of both.

And the sum of the coefficients together sum to 1, so we can tweak the behaviour of the estimater by adjusting the time constant tau. In general, the first coefficient will be big, e.g. 0.95 and the other will be smaller, closer to 0.05.

**Phi**

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587985897082_image.png)

# 8. Attitude Estimation Exercise
![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587986858942_image.png)

![](https://paper-attachments.dropbox.com/s_93E6269592D5EB098A75FE4B8B2B99EF5E5232895421863E60B5CE3EF4F4F54B_1587987575953_image.png)

# 9. EKF Implementation 1
https://www.youtube.com/watch?v=on3hcvv5O7g&


[https://youtu.be/on3hcvv5O7g](https://youtu.be/on3hcvv5O7g)



https://www.overleaf.com/project/5c34caab7ecefc04087273b9



# 15. UKF Sigma Points
https://www.youtube.com/watch?v=jTTFpHklF6Y&


[https://youtu.be/jTTFpHklF6Y](https://youtu.be/jTTFpHklF6Y)

## **Additional Resources**
- [**The Unscented Kalman Filter for Nonlinear Estimation**](https://www.seas.harvard.edu/courses/cs281/papers/unscented.pdf) is a short paper (only 6 pages) and does a great job explaining the UKF.
- [**A New Extension of the Kalman Filter to Nonlinear Systems**](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.5.2891&rep=rep1&type=pdf) is a bit longer (12 pages) and includes some helpful example applications.
- [**The Scaled Unscented Transformation**](https://www.cs.unc.edu/~welch/kalman/media/pdf/ACC02-IEEE1357.PDF) gives a mathematical derivation of the unscented transform.
- [Fusing Inertial Sensor Data in an Extended Kalman Filter for 3D Camera Tracking](https://eresearch.ozyegin.edu.tr/bitstream/handle/10679/947/Fusing%20inertial%20sensor%20data%20in%20an%20extended%20kalman%20filter%20for%203D%20camera%20tracking.pdf?sequence=2&isAllowed=y) 

