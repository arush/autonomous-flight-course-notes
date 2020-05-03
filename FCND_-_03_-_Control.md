# FCND - 03 - Control
Previous Lesson: FCND - 02 - Planning
This Lesson: FCND - 03 - Control
Next Lesson: [+FCND - 04 - Estimation](https://paper.dropbox.com/doc/FCND-04-Estimation-kIsPI3VdoMV7fWHkYatHm) 

# 01 - Vehicle Dynamics


## Rotor Physics

**Forces and Moments**
omega (w) is the rotation rate measured in radians per second. 2pi is 1 rotation per second. The thrust and the induced moment are proportional to w^2. 

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002470865_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002484486_image.png)


k is the constant of proportionality between the forces and moments. Depends on the size of the blades and the air density.


![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002551225_image.png)



## Unbalanced Moments

Causes rotational acceleration. Moment of Inertia can be different for each axis. 
Moment is Torque. psi is yaw.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586003337829_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586003382845_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1585835674758_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1585835653988_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586004257997_image.png)



![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002915943_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002928175_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002895371_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002885190_image.png)




## Compact representation of state

4 variables are required for motion in 1 dimension (here it is up and down, z axis translation)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586003014759_image.png)



**Uncotrolled Drone Exercise**
If you were to ignore the yaw inducing moments from each motor the state would look like this

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586003430616_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586003558553_image.png)



## Controlling in 2 Dimensions
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002127160_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002137119_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002280021_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002345293_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002305598_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002394756_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586002263878_image.png)



## Useful equations

Bicopter

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586001875767_image.png)


Coaxial copter

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586003176651_image.png)




# 02 - Intro to Vehicle Control
## Perfect Is Impossible

We use `u` for control input

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343218998_image.png)


**Double integrator systems are unstable systems**
Small mass errors compound quadratically and cause huge errors. Below shows equations to integrate with respect to time. The three types of errors are Model Error, Disturbance & Measurement Noise

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343315239_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343425626_image.png)



## Control Diagrams
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343480789_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343499188_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343573833_image.png)


Correct Answer:

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343634136_image.png)

## P Controller

Simple controller that is proportional to the error. K(sub)p is called P Gain. It is the proportion. We can compute the `u`_bar (desired acceleration) required easily with the formula from above.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586343907816_image.png)

## 2 Problems with P Controllers

P controllers are already better than the open loop controllers. But

1. Oscillations
2. Offset
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586344534492_image.png)

## Limitations of P Control

It’s impossible to eliminate the oscillations by just tuning K_p. Also, the higher the oscilation frequency.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586344793889_image.png)


This is why we need PD Controllers

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586344845682_image.png)

## PD Controller

We need to look at the rate of change of the error, i.e. the derivative.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586344934367_image.png)


The K_p is responsible for matching the target position
The K_d is responsible for matching the target velocity

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586345007921_image.png)


e_dot is the difference between the target speed and the actual speed.


## Feedforward

Sometimes PD is enough, but when target changes a lot, we need to tell the desired acceleration, i.e. the derivative of the velocity, z_dot_dot. In an ideal world, z_dot_dot (acceleration) would dictate position exactly and errors would be zero.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586345561134_image.png)

## PD Math and Reparamaterization

This turns out to be the differential equation of a spring whose amplitude is modified by a decaying exponential.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586346028344_image.png)


Now using an oscilation and decay function and multiplying them together, we can solve the above differential.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586346363395_image.png)


Turns out delta (d) is the damping ration and omega (w) is the natural oscilation frequency and below are the relationships with the proportions. 

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586346500283_image.png)


And this is the result

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586347330350_image.png)


A **big** value (close to 1) of damping ratio (**delta**) yields to a **faster** decay. A smaller value (close to 0) constitutes, instead, a slower decay.
A **big** value of natural frequency (**omega**) causes high frequency oscillations. Smaller values of omega, instead, reduce the oscillations' amplitude.
The behavior of the PD controller's equation is a **sinusoidal oscillation, whose amplitude is modified by a decaying exponential**.


## Overshoot, Rise Time, Settling Time
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586347499105_image.png)


**Rise time** is bound by actuator constraints
A system has **settled** when the oscillations are within +/-2% target value


- To increase the rise time, you have to increase the natural frequency (omega)
- When dampening is 1, there is no overshoot, but rise time is longer
- When dampening is 0.7, rise time is lower but more overshoot
- Larger frequency is small rise and small settle time but ensure control stays within the actuation limits. 
- Time constant is T = 1/omega
- Trise = 1.57T
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586348223337_image.png)



Tuning a system depends on the situation and the characteristics of the system. The video provides you with some guidelines on how to approach the tuning process.

A good practice is to start with the requirements that you need for your system, such as speed, accuracy, stability, etc.

Precisely how you want the system to behave over time (therefore focusing on T-rise and overshoot) and the frequencies (bandwidth and damping ratio).

For example, if you want to reduce T-rise, you can increase the value of the P-gain (Kp). On the other hand, increasing the D-gain (Kd) decreases overshoot and improves the stability.

Here below a reference of how different Kp, Kd values can affect the time domain of the system.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586348125083_image.png)

## More Model Errors

Systematic bias (offset) is introduced when there is a mass error. You can never correct for this with just a PD controller. You need a PID Control.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586349047424_image.png)

## PID Control

The integral (area under the curve) accumulates error and counters it.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586349547536_image.png)


This is the full PID formula

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586349568649_image.png)


It is now possible to use just `T` time constant and `d` delta damping value.



![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586349218308_image.png)



## PID Controllers in Practice

**Saturation** 
limits the ability of the actuator to follow a given command. This limit affects the integral part of the PID controller.


![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586351267175_image.png)


**Integral Windup and Clamping**
When the commanded thrust accumulates due to error accumulated from saturation.
The area between the commanded thrust and the engine limitation thrust is called “integral windup”.


![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586351528228_image.png)


We can stop this with “clamping” which turns off the integrator when it is not working.

http://www.20sim.com/webhelp/library_signal_control_pid_control_antiwindup.php


# 03 - Control Architecture

These lessons ignore yaw.
yz movement requires vertical thrust (u_1) and torque (u_2) about the x-axis

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586352436457_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586352513165_image.png)

## Underactuation

There are 2 control inputs and they cannot be used to control all three degrees of freedom. This is called an underactuated system. So we sacrifice phi in this lesson and focus on yz control.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586352641755_image.png)


In fact a quadrotor system can only control 4 degrees of freedom out of 6 and has to sacrifice some in favor of roll and pitch control.


## Linearizing the equations
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586356072037_image.png)


Linear approximations are used in robotics all the time.
We would like to make the non-linear equations into linear differential questions since there are huge advantages to that.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586353292473_image.png)


The equation for a linearization of a quadratic function around an operating point is 

- f(x_op) → the value of the function at the operating point 
- f’(x)|_x=x_op → slope of the tangent line at the operating point 
- the deviation from the operating point delta x.
    f(x_op) + f’(x)|_x=x_op * (delta)x
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586353474739_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586353801846_image.png)
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586353792317_image.png)



## Linearization Intuition

At hover, through linearization you can simplify our non-linear set of equations for 2D dynamics as follows:

y_dot_dot
sin(phi) = theta

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586354604955_image.png)


z_dot_dot
cos(phi) = 1

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586354674334_image.png)


simplify y_dot_dot even more:
y_dot_dot = g * (delta)phi

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586354748922_image.png)


This is now fully decoupled from u_1


## Controlling motion near hover

Vertical acceleration (u_1_bar) affects vertical velocity and position

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586355053670_image.png)


we can control y through phi. u_2_bar is the 4th derivative of the y position

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586355146542_image.png)


In case you don't like seeing four dots above your variables, another way of writing the equations you saw in the video is as follows:


![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586355200594_image.png)


Since angular acceleration is the 4th derivative of y position, a small mass error quadruples the position error.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586355308505_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586355272841_image.png)



## 13. Intro to Cascaded Control

In the 1-dimensional case, measure z position and z velocity and feed into PID to give a vertical thrust command.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586355482582_image.png)


u_2 is used to control phi and phi is used to control y
Use a cascade when there are multiple loops operating at different timescales. The y controller is a slow controller (10Hz), it commands a phi to the inner controller (100Hz - 1000Hz). 

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586355590218_image.png)


**Practical use case of inner + outer loop**
GPS outdoors or vision indoors is 10Hz so we use an IMU to measure phi at 100Hz - 100 then close the loop every 10Hz.


## 15. Separation of Time Scales

The outer loop relies on the inner loop being complete at outer loop execution time. This is why the inner loop must be at a faster refresh rate than the outer.


## 16. Non-linear Control

Now we convert the linearized controller to a non-linear controller. We have to recouple the z and y motions by passing the commanded thrust to the y controller also. The z thrust does impact the y position so we need to account for this.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586356213814_image.png)



## 18. Lesson Summary
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586356335373_image.png)

# 04 - Full 3D Control
## 4. World vs. Body Frames

We have to keep track of the vehicle attitude (rotation) and use Euler angles to translate between body and world. Ultimately we want to control the drone in the world frame. Some sensors, e.g. IMU which measures turn rates in the body frame, needs conversion. Some don’t if they are already measured in the world frame.


## 5. Tracking 3D Dynamics
![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586357150148_image.png)


Orientation = euler angels or quaternions
Body rates = rotation rates of each axis, p is z-axis rotation rate.

These "body rate" variables p,q,r*p*,*q*,*r* can be a little confusing. A few things to note about them:
**1. The "p" has nothing to do with pitch!**

    And r has nothing to do with roll!
    These three letters were just chosen because they occur sequentially in the alphabet, just like x, y, and z. In fact, p gives the angular rotation rate about the x-axis (in the body frame), q gives the rotation rate about the y-axis (body frame) and r gives the rotation rate about the z-axis (again, in the body frame).

**2. They aren't the same as the Euler angle rates of change** ***ϕ*****˙,*****θ*****˙,*****ψ*****˙**.

    While both of these give some sort of angular rate of change, the body rates are calculated in the body frame of the vehicle while the Euler angles are expressed in the world frame.

**3. They really are body RATES**!

    Even though they don't have dots over them. This means that *p*˙,*q*˙,*r*˙ actually express rotational *accelerations*.

p q r are **measured in rads per second**


## 7. Drone 3D, Exercise 1 - Rotors to Controls

In this exercise we see how rotor rotations translate to controls. Controls can be seen as collective force and moments about axes.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586423082410_image.png)


and using a rotation matrix we can see rotational acceleration and after two time integrals to advance the translation of the vehicle.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586423924103_image.png)


**Calculate rotor velocities from controller signals: collective thrust and angular acceleration**

https://www.overleaf.com/project/5c582ebf443d3b18312a66e5




**Forces come from angular velocities of rotors**

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586423314695_image.png)


**Moments around axes come from forces multiplied by shaft length**

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586423351608_image.png)


**Set angular velocities based on vertical acceleration, roll, pitch, yaw controls like so**

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1587384294583_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586423422381_image.png)


**Solving the equations for Dimensionless versions of pqr_bar**

![User Content: Angular_velocities_p_bar.jpg](https://udacity-user-uploads.s3.us-west-2.amazonaws.com/uploads/user-uploads/b29ed8c6-bb8e-4346-bc61-62d3863eef3a-original.jpg)




**Rotation matrix to transform between body-frame accelerations and world-frame accelerations**

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586423650642_image.png)


**Linear accelerations**

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586423721586_image.png)



## 7. 3D Rotations and representing attitude in the world frame

In this lesson we will learn how to use differential thrusts to cause rotational accelerations

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586424374478_image.png)

1. calculate rotational accelerations in the vehicle’s own body frame
2. integrate to find the rotational velocities required
3. Use math to convert to world-frame phi_dot, theta_dot, psi_dot
4. integrate to get the final Euler angles in the **world-frame attitude representation**


## 9. Euler’s Equations in Rotating Frame

The moments equation below only works in the world frame. We want to calculate accelerations in the body frame because this is where our sensors are.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586424861347_image.png)


Need to multiply matricies with the cross product

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586424991512_image.png)


**Euler’s Rotation Equations** 𝐌=𝐈𝜔˙+𝜔×(𝐈𝜔)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586425088943_image.png)


**Cross Product**
The cross product shows up in Euler's equations. It's a way of multiplying two vectors.
If you have two vectors **a** and **b** with an angle of *θ* between them, then the cross product is given by **a**×**b**=**c**, where **c** is a vector that's perpendicular to *both* **a** and **b**.
The direction of this **c** vector is given by the right hand rule and the magnitude (size) is given by the following equation:

    ∣**c**∣=∣**a**∣ ∣**b**∣sin(*θ*)

If you want to learn more, you can check out the [wikipedia article on the cross product](https://en.wikipedia.org/wiki/Cross_product). It's very good!


## 10. Drone 3D - Exercise 2

The angular acceleration in body frame can be calculated using the following equation. The expanded version is provided below as well. Where 𝑝p is a rate of roll in the body frame, 𝑞q is a rate of pitch in body frame and 𝑟r is the rate of yaw. All of these are measured in radians per second

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586425511642_image.png)

## 11. Integrating PQR into the World Frame

With the last lesson we were able to integrate the rotational rates to get angular velocities. Now we need to update euler angles in the world frame. But they cannot be directly integrated. We need more math.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586427123384_image.png)


To go from **rotation rates in the body frame to turn rates in the world frame** you need this equation. This is for euler representation of attitude, not quaternions.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586427306510_image.png)



![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586427342943_image.png)


This link has the equivalent equation for quaternions: https://www.astro.rug.nl/software/kapteyn/_downloads/attitude.pdf


## 12. 3D Drone Exercise 3 - Rate of change of Euler angles

This is done for calculating world-frame attitude.


![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586427983543_image.png)



## 15. 3D Controller Architecture

This lesson is so in-depth and important that its best just to watch the video

https://www.youtube.com/watch?v=CsN5-lHcxyM&


[https://youtu.be/CsN5-lHcxyM](https://youtu.be/CsN5-lHcxyM)


## 16. First vs Second order systems

This lesson points to a paper on feed-forward technique for following iterative paths, could be useful for fixed-wing loiter paths:

http://flyingmachinearena.org/wp-content/publications/2011/schoellig_feasibility_of_motion_primitives.pdf

equations 2,3,4,5,6

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586592418835_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1587643743152_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586593753919_image.png)



## 17. Understanding Attitude Control Equations

This video explains the math from the paper. But in our project, tau_r_p (time constant) is not used, instead we use a p controller and apply a constant kpBank to the b error.

https://www.youtube.com/watch?v=1g_uyhDgoiQ&


[https://youtu.be/1g_uyhDgoiQ](https://youtu.be/1g_uyhDgoiQ)

**Important Equations**

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586593810472_image.png)


Where

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586593821130_image.png)

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586593829000_image.png)



## 18. 3D Drone Control Exercise 4

Next, we will implement the controller for the drone which will be able to control it in the 3D environment. From lesson, you are already familiar with the architecture of the controller. It consists of altitude controller, position controller, and attitude controller.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586594615527_image.png)


The attitude controller breaks down into smaller controllers responsible for roll-pitch, yaw, and body rate.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586594645634_image.png)


Parameters which will be required to create the controller are: 
- Altitude controller: 𝑘𝑝−𝑧, 𝑘𝑑−𝑧 
- Position (lateral) controller: 𝑘𝑝−𝑥, 𝑘𝑑−𝑥, 𝑘𝑝−𝑦, 𝑘𝑑−𝑦
- Roll-Pitch controller: 𝑘𝑝−𝑟𝑜𝑙𝑙, 𝑘𝑝−𝑝𝑖𝑡𝑐ℎ 
- Yaw controller: 𝑘𝑝−𝑦𝑎𝑤
- Body rate controller: 𝑘𝑝−𝑝, 𝑘𝑝−𝑞, 𝑘𝑝−𝑟
Based on input parameters we also can calculate 𝛿 and 𝜔𝑛 for altitude 𝑧 and lateral controls 𝑥 and 𝑦.

----------

Note that we are using a slightly different control architecture than what is discussed in the lesson (and what you will implement in the final project).

For now, the job of the lateral controller is to generate commanded values for the rotation matrix elements **𝐑13** (also referred to as *𝑏𝑥*) and **𝐑23** (also referred to as *𝑏𝑦*).

**4.1 Lateral controller**
The lateral controller will use a PD controller to command target values for elements of the drone's rotation matrix. The drone generates lateral acceleration by changing the body orientation which results in non-zero thrust in the desired direction. This will translate into the commanded rotation matrix elements *𝑏𝑥𝑐* and *𝑏𝑦𝑐*. The control equations have the following form:

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586606664166_image.png)


for the 𝑦 direction the control equations will have the same form as above

The roll-pitch controller is a P controller responsible for commanding the roll and pitch rates (*𝑝𝑐* and *𝑞𝑐*) in the body frame. First, it sets the desired rate of change of the given matrix elements using a P controller.
**Note** - subscript c means "commanded" and a means "actual”

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586606884544_image.png)


converted to angular velocities like so:

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586606913422_image.png)



## 21. Drone 3D - Exercise 5


**Body Rate Controller**
The commanded roll, pitch, and yaw are collected by the body rate controller, and they are translated into the desired rotational accelerations along the axis in the body frame.

![](https://paper-attachments.dropbox.com/s_97D07E03EC25785E03AF5CA39A8CF7D9BB40A86FEBDDB63CD230A082251513A6_1586607152339_image.png)


notarize.com
obefitness.com
bloomscape
hooked.co
boulevard
100thieves
airspacelink
golinks.io
svtrobotics
copilot.money
density.io - fav founders, highy recommended
umba
dreamcraft - nocode for gaming
bigbrain - fanduel guy
welcome - onboarding for employees
punchlist.com - employee #7 at square, highly recommended






