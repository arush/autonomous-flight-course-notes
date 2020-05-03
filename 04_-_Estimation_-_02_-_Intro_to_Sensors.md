# FCND - 04 - Estimation - 02 - Intro to Sensors
Previous: [+FCND - 04 - Estimation - 01 - Intro to Estimation](https://paper.dropbox.com/doc/FCND-04-Estimation-01-Intro-to-Estimation-kIsPI3VdoMV7fWHkYatHm) 
Next: [+FCND - 04 - Estimation  - 03 - Extended Kalman Filters](https://paper.dropbox.com/doc/FCND-04-Estimation-03-Extended-Kalman-Filters-2cV3UVce34YuHNVbcboxj) 

# 3. Introduction to Sensors

We can group an air vehicle’s 12 state variables into 4 buckets.

1. 3D position: *x*,*y*,*z*
2. 3D translational velocity: x_dot, y_dot, z_dot
3. 3D orientation: *ϕ*,*θ*,*ψ*
4. 3D rotational velocity: *p*,*q*,*r*

One reason is redundancy: if one sensor fails than another sensor is there for backup. But that's not the only reason! It's also important to consider *how* a sensor is inaccurate! Some sensors are noisy but unbiased. Some are biased but low-noise. Ideally we want our estimate of the vehicle's state to be both unbiased and low-noise and often that means using multiple sensors to measure the same quantity.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587909499508_image.png)



# 7. Gyro Measurement Model

Noise is zero mean gaussian noise
Bias might be temperature dependent and changes slowly but is constant for a long time.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587910123244_image.png)


Now we’d like to use this measurement to track the angle `theta` We can use this omega_tilda measurement to update our angle from timestamp to timestamp.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587910267178_image.png)


This is a discreet approximation for computing the integral so there really would be some epsilon `e` approximation error but we’re going to ignore that for now. 

We can also assume bias has been removed with calibration, so we eliminate that below.


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587910378212_image.png)


We also see that we need to have a theta_0 in the beginning for


# 10. Full 3D attitude update
## Euler Forward Method

Derivative of the Euler angles = some matrix that depends on the vehicle attitude x the body rates.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587921452469_image.png)


Euler angles at time `t` is the last set of angles plus the derivative x Delta t



# 13. Two Things Accelerometers Measure
https://www.youtube.com/watch?v=h5k8ayFvu58&


[https://youtu.be/h5k8ayFvu58](https://youtu.be/h5k8ayFvu58)


## 1. Attitude (without yaw)

Assuming the vehicle is not moving, the accelerometers can measure attitude

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587962496868_image.png)



## Solving for World-Frame Attitude with Body-Frame Acceleration Measurements

We get the body frame measurements are equal to a rotation matrix x the gravity vector. When using the euler angles, the rotation matrix is expressed with roll angle (phi) and pitch (theta). When you solve these equations for theta and phi, you get the arctan and arcsine equations.

![NB: error in graphic, should be -g](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587962551990_image.png)



## 2. Solving for position and velocity from linear acceleration

We can only do this when we know the attitude because

- if we know the attitude, we know the rotation matrix
- if we know the rotation matrix, we can solve for acceleration with the formula below
![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587962921940_image.png)


This equation says the body-frame acceleration is the acceleration from gravity + acceleration of everything else as measured by the accelerometer.

These accelerations can be integrated to find the velocity and integrated again to find the position. When you want to convert to world-frame, just multiply the rotation matrix.



# 14. 3D Inertial Navigation

This lesson is obvious.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587963317858_image.png)



# 15. Reading an IMU Spec Sheet
![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587963370677_image.png)


1 mg (milli-g) is 1/1000th of acceleration due to gravity.


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587963592571_image.png)


**Bias**
Zero offset is the bias. For the gyroscope 1deg/s is huge and will add up so needs to be corrected for.

**Temperature Dependent Bias**
TCO: Temperature Calibration Offset. milli-g per Kelvin. Describes how the temperature changes with temperature

**Random Noise**
micro-g’s per square root of freq.
noise standard devation = {noise density value on spec sheet} * square root of the cutoff freq of lowpass filter used to filter the measurement signal.

A good choice for the cutoff frequency is 0.5 * sample rate.
For example if your sample rate is 200Hz, half of that 100Hz, sqrt(100) = 10.
So multiply the noise density number by 10 and you get sigma.

If you lowpass filter the signal more, the noise goes down.


# 16. Three sources of sensor error
![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587926578367_image.png)


I = Identity Matrix
M = **Scaling and Cross Coupling Matrix**

So the sources of error are Bias, Scaling and Cross Coupling Matrix and Noise

**Scaling and Cross Coupling Matrix**
This matrix describes if there is

- slope error (measure 1.1 instead of 1, or 2.2 instead of 2)
- coupling, e.g. one of the accelerometers is influencing another or misalignment between sensor and body-coordinate-frames


# 17. Calibration


## Offline Calibration

Introduce a correction while the vehicle is not moving.

For example, here is an offline calibration routine for the temperature bias.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587964602579_image.png)


We use least squares after measuring the bias at each temperature.


## Online Calibration

Correct while the bias changes during flight.
Rather than tracking just the 12 variables in the state vector, we might also use random-walk to track the 3 accelerometer biases as well.



# 18. IMU Calibration

After executing a calibration path with an intentionally misaligned IMU, we use least squares to fit the measured acceleration against the actual acceleration to get the scaling and cross coupling matrix.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587966308964_image.png)

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587966380809_image.png)



    estimated_scaling_cross_coupling_matrix_and_bias=np.zeros((3,4))
    # TODO: Add a row of 1's to the actual acceleration matrix.
    acceleration_vectors=np.vstack([actual_a, np.ones(actual_a.shape[1])])
    
    # TODO: Perform least squares for each acceleration components. 
    for i in range(3):
        estimated_scaling_cross_coupling_matrix_and_bias[i,:] = np.linalg.lstsq(acceleration_vectors.T,measured_acceleration_history[i, 1:])[0]
    
    print('(I+M) =  \n',estimated_scaling_cross_coupling_matrix_and_bias)


    (I+M) =  
     [[  9.99994804e-01   1.02061658e-03   9.97475886e-04  -9.81123864e-03]
     [  1.01144764e-03   9.99967074e-01   9.99634809e-04  -9.80928258e-03]
     [  9.95332402e-04   1.01375503e-03   1.00000010e+00  -9.81000264e+00]]

As you can see the given method was able to capture the linear scaling terms on (diagonal elements) which are reasonably close to one. As (𝐼+𝑀)(I+M) matrix will result in the diagonal terms close to one. Also, it was able to estimate off-diagonal elements with good precision. Finally, we can see that the bias elements the final column of the obtained matrix contains the gravity constant for the 𝑧z component. This is not characteristic of the IMU unit but, since we have not removed it artificially, as expected it shows up as the bias.


# 19. Magnetometer Intuition
https://www.youtube.com/watch?v=fnnwLDyi9kM&


[https://youtu.be/fnnwLDyi9kM](https://youtu.be/fnnwLDyi9kM)
Magnetometer data from Earth’s magnetic field is very noisy, but there is no drift. So we fuse it with yaw data from the gyros. Gyros give us roll and pitch, so we can calc yaw.


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587966755718_image.png)


These are 3-D vectors but we don’t need z to measure yaw. In the x-y plane, we know the N vector is pointing north.

**Yaw angle**
The diff between the body-frame forward vector and the magenetic north is psi. The magnetometer measures an x, y (and z) component of the angle. So to get the angle you use arctan:

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587967032830_image.png)


This is easy when roll and pitch are zero. The math gets more complex in 3D, but the concept is the same.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587967122007_image.png)


As long as you know roll and pitch, you can measure yaw.


# 19. Magnetometer Errors and Calibration

Onboard distortion can be handled by bias (b) and scaling matrix (M)

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587967630642_image.png)


Environment noise is treated as noise, eta.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587967687209_image.png)



Hold the vehicle in one place and rotate it in all directions. We measure the movement of the magnetic field with respect to the body-frame and map it out. We check the difference between it and a perfect sphere. The origin diff is the bias and the scaling matrix is the diff with the shape of a sphere.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587967485807_image.png)



# 21. Magnetometer Calibration

Aside from a gyroscope, yaw (𝜓ψ) can be determined using a magnetometer. We saw gyroscope measurements generated produced an ever increasing difference between the true and estimated values over time. To minimize the drift error, gyroscope measurements can be used in short time intervals and the magnetometer for a long time intervals.

The yaw angle can be calculated relative to the magnetic pole and then adding the correction value produces yaw relative to the pole. In this exercise, we will calculate yaw relative to the magnetic pole and assume that this is sufficient to execute the flight. After initialization of the magnetometer we do not know the true magnetic north. However, we can measure the magnetic strength along the full circle, in addition to given measurements the orientation of the magnetic pole can be accurately estimated.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587968419342_image.png)

    attitude = np.vstack([orientation, np.ones(orientation.shape[1])])
    transformation_matrix = np.zeros((2,3))
    for i in range(2):
        # TODO: calculate the transformation_matrix containing bias and scailing and cross-correlation elements 
        transformation_matrix[i,:] = np.linalg.lstsq(attitude.T,field_strength[i,:])[0]
![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587968508864_image.png)

    # TODO: Normalize the measured magnetic field. 
    m = np.matmul(np.linalg.inv(transformation_matrix[:, :2]),
                  (field_strength - np.reshape(transformation_matrix[:, -1],(2, 1))))


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587968557895_image.png)

    delta_psi_1 = np.arctan2(transformation_matrix[1,0],transformation_matrix[0,0])/np.pi*180
    print('First estimation of the relative yaw angle is ',delta_psi_1)
    
    delta_psi_2 = np.arctan2(-transformation_matrix[0,1],transformation_matrix[1,1])/np.pi*180
    print('Second estimation of the relative yaw angle is ',delta_psi_2)
    estimated_delta_psi = (delta_psi_1+delta_psi_2)/2
    print('Average relative yaw angle is= ',estimated_delta_psi)


    First estimation of the relative yaw angle is  -60.1304321399
    Second estimation of the relative yaw angle is  -59.5211164999
    Average relative yaw angle is=  -59.8257743199

For a randomly selected magnetic field measurement find the yaw angle relative to the magnetic pole. First, you will normalize the measurement relative to the assumed zero heading and then add the difference between it and the true magnetic pole heading.
The yaw for a normalized magnetic field can be calculated as

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587968621969_image.png)



    sample_number = int(np.random.uniform(0,field_strength.shape[1]))
    
    sample_measurement = field_strength[:,sample_number]
    
    
    normalized_measurement = np.matmul(np.linalg.inv(transformation_matrix[:, :2]),
                 (np.reshape(sample_measurement,(2,1)) - np.reshape(transformation_matrix[:, -1],(2, 1))))
    
    
    # TODO: Calculate the yaw angle relative to the pre-assumed zero direction and add the correction factor 
    yaw_relative_to_introduced_zero = np.arctan2(-normalized_measurement[1],normalized_measurement[0])/np.pi*180
    yaw_relative_to_magnetic_north= yaw_relative_to_introduced_zero + estimated_delta_psi
![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587968001108_image.png)

    Yaw relative to the pre-assumed zero  = [-31.49847065]
    Yaw relative to the magnetic north =  [-91.32424497]


# 22. GPS Overview
https://www.youtube.com/watch?v=mXTNBI1DZAE&


[https://youtu.be/mXTNBI1DZAE](https://youtu.be/mXTNBI1DZAE)


# 23. GPS Math
https://www.youtube.com/watch?v=CzKi-xbSUGY&


[https://youtu.be/CzKi-xbSUGY](https://youtu.be/CzKi-xbSUGY)

We have 4 unknowns and 4 satellite distances. The last satellite is to calculate clock error.

The distances are called pseudoranges because they contain some clock error.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969056265_image.png)



## Pseudorange Model

The travel time of a GPS signal is the time of transmission minus the time of reception. We can multiply that by the speed of light to get distance p_s.


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969230245_image.png)

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969248931_image.png)

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969272506_image.png)


We see that the pseudorange to satellite is the true range row + the difference in clock errors x speed of light.

**Delta Tau**

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969408467_image.png)


We have to estimate delta tau (diff in clock errors)

**True Range Formula**

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969361211_image.png)


These are the x,y,z positions of the satellite at time of transmission, they are known


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969497756_image.png)


These are the x,y,z positions of the receiver at time of reception, and they are unknown.

With four satellites we have 4 equations.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969610972_image.png)

- x,y,z is receiver’s position (unknown)
- tau (last red) is receiver clock error, also unknown.
- Taus for each satellite clock errors are known (blue)

This is a non-linear least-squares problem which can be solved with `np.lstsqr` in the same way we do so with the other sensors.


# 24. GPS Errors, Initialization, Calibration

Velocity is measured with doppler shift, not by averaging two subsequent position measurements, so they are super accurate.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969853702_image.png)


**GPS Errors**

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969966784_image.png)


If a GPS measurement is outside of 3sigma bounds of the current, it is rejected.

**Multipath errors**

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587969958097_image.png)



## **GPS Summary**

GPS (Global Positioning System) is an amazing but complex system which provides unbiased but noisy measurements of absolute position. These measurements are used in conjunction with accelerometers (which are low noise but susceptible to drift) to infer vehicle position.
One of the truly remarkable properties of GPS is its infinite scalability. Since satellites only transmit information and don't have to receive any external data, one satellite can serve an unlimited number of GPS receivers.

**How it works**
A GPS receiver needs a line-of-sight to four GPS satellites. With this established, it can calculate the time of flight from each satellite to the receiver and then perform **trilateration** to infer its position. We can also use GPS to directly measure velocity by measuring Doppler shift.
Each time of flight measurement defines a "pseudorange" from the receiver to the corresponding satellite. In an ideal world, each "pseudorange" would be exact "range" from receiver to satellite. If this were the case, we would only need three satellites to localize a receiver on (or near) the surface of the Earth.

The fourth satellite is necessary to account for the "clock error" of the receiver.

**Sources of Errror**
Error is introduced anytime the signal from satellite to receiver is delayed. Light moves quickly and a delay of only 1 nanosecond corresponds to about 1 foot (30 cm) of error in calculated distance. There are a few ways that these errors tend occur:

1. Atmospheric Effects: electrons in the ionosphere can interfere with and delay the signal.
2. Multipath Errors: these occur when the satellite signal reflects off of some surface before reaching the receiver.



# 25. Barometer

Noisy but drift-free measurements of altitude with respect to some reference height.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970143485_image.png)



## MEMS Barometer

A MEMS barometer uses 2 metal plates separated by a vacuum gap. The air pressure pushes down on the plates and causes a deformation and a change in electrical capacitance which can be measured.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970186124_image.png)

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970298528_image.png)


The tiny hole is for the air pressure to press on the barometer.
This means we need to shield the barometer so it doesn’t get affected by downwash and other air gusts.


## Barometer math
![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970427249_image.png)


All the rest R, kT, g0 are constants.


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970876223_image.png)




# 26. Barometer Errors and Calibration

We can only measure altitude change by measuring difference with the reference point. Every airport has a temperature and air pressure reference point.

**Barometer Errors**

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970654825_image.png)


**Barometer Lag**
It’s a slow measurement. It takes time for the air to get inside and cause a deformation. So it is inaccurate in fast climbs.

**Modeling errors**
By far the biggest error is the modelling errors coming from differences between the true and modelled atmospheric temperature and pressure at the reference location, both of which can vary over time.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970675183_image.png)


So we estimate Ts and Ps in the following ways.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587970759073_image.png)


When doing online estimation we typically model Ts and Ps using random walks.

An airplane can use its Barometer and GPS to estimate the temperature and air pressure at the airport with the reference station.


## **Barometer Summary**

The barometer is really just an air pressure sensor.
As you increase your altitude, air pressure decreases in a predictable way. By comparing the current air pressure to the air pressure at some known altitude, the barometer can infer the height of the vehicle.


# 27. Barometer Integration
![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587971156259_image.png)

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587971110043_image.png)


After getting some initial estimate using the average of the GPS and the baro at time zero, we can use recursive estimation formulas above to estimate the altitude as measurements come in.


    Q = np.eye(1)   # Covariance 
    H = np.eye(1)
    h_hat = 0.5*(gps_data[0] + baro_data[0]) 
    R = np.eye(1)*sigma_baro 
    
    h_hat_history = np.array([h_hat[0]])
    
    k_gps = 0  # an element from GPS measurement data 
    
    for i in range(baro_t.shape[0]):
        if gps_t[k_gps] <= baro_t[i]: # If new GPS measurement has arrived 
            h_obs = gps_data[k_gps]   # Observed h value  
            R = np.eye(1)*sigma_gps   # measuring sigma is gps sigma
            k_gps+=1                  # advance to the next measurement point
            i-=1     # What this does is that it will update altitude based on the GPS and then will come back and update the altitude estimation using the barometer measurement. This will be done without losing the proper count. 
        else:
            h_obs = baro_data[i]      # Observed h value using the barometer 
            R = np.eye(1)*sigma_baro  # Measuring sigma is barometer sigma
    
        # TODO: Use recursive estimator from lesson 1 to evalute the altitude
        Q = np.linalg.pinv(np.linalg.pinv(Q) + H.T @ np.linalg.pinv(R) @ H)
        h_hat = h_hat + Q @ H.T @ np.linalg.pinv(R) @ (h_obs - H @ h_hat)
        
        # creating the historical data of the h_hat in time 
        h_hat_history = np.vstack((h_hat_history,h_hat))


![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587971492640_image.png)



# 28. Summary

Combine fast but drift-prone accelerometer with slow but drift-free GPS.

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587971676879_image.png)


Sensors are better together

![](https://paper-attachments.dropbox.com/s_22B38346947855B24F8A55B5FAFE791892B60C194A54597555F47DBA2276134D_1587971710210_image.png)


