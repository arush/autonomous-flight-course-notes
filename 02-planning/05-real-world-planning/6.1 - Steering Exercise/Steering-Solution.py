#!/usr/bin/env python
# coding: utf-8

# In the previous notebook you simulated the Dubin's Car model by choosing random steering angles. Typically there is a target location the vehicle is progressing to, thus choosing control inputs that which move closer to the target would be ideal.
# 

# In[1]:


import numpy as np
import matplotlib.pyplot as plt

get_ipython().run_line_magic('matplotlib', 'inline')


# In[2]:


plt.rcParams['figure.figsize'] = 12, 12


# Dubin's car simulation from the previous notebook.

# Implement a function called `steer()`, which takes as inputs two states `x1` and `x2` and returns a control input (steering angle) that "tries" to make progress from `x1` to `x2`. This method should consist roughly of the following:
# 
# 1. Get a sense of where `x2` is relative to the state of `x1` by calculating the orientation difference between the current orientation, $\theta$, and the direction toward `x2`.
# 2. Generate a random steering angle by sampling from a gaussian that is centered roughly on some direction that will move you from `x1` to `x2`.
# 3. Clip the angle if it is outside the range allowed by `MAX_STEERING_ANGLE`.
# 
# This might all sound a little fuzzy, but that's the idea here! We're just going to try some guessing and see if we can find a simple method for making progress from `x1` to `x2`.  

# In[3]:


# limit the steering angle range
MAX_STEERING_ANGLE = np.deg2rad(30)
# Set the width of the Gaussian we'll draw angles from
ANGLE_STDDEV = np.deg2rad(3)

# NOTE TO THE READER:
# This steer() function is not meant to be a particularly clever
# method of steering from x1 to x2.  Rather this is just a way 
# of guessing which way we might steer in order to make rough
# progress toward x2. We'll get to better steering later!

def steer(x1, x2):
    theta = x1[2]
    
    # calculate angle difference between the direction toward x2
    # and our current orientation
    angle = np.arctan2(x2[1] - x1[1], x2[0] - x1[0]) - theta
    
    # Now we'll just do something rather naive and assume that if we know the 
    # direction of x2, we'll set the steering angle roughly in that direction
    # sample angle from a gaussian centered around the direction toward x2
    angle = np.random.normal(angle, ANGLE_STDDEV)
    
    # clip angle value between min and max
    angle = np.clip(angle, -MAX_STEERING_ANGLE, MAX_STEERING_ANGLE)
                
    return angle


# Modification of the Dubin's car simulation from the previous notebook. Instead of running the simulation for a single timestep the simulation is run from time 0 to time `T` with timesteps of size `dt`.

# In[4]:


def simulate(state, angle, v, dt):
    x = state[0]
    y = state[1]
    theta = state[2]    
    
    nx = x + v*np.cos(theta)*dt
    ny = y + v*np.sin(theta)*dt
    ntheta = theta + v*np.tan(angle)*dt
    
    return [nx, ny, ntheta]


# Initially, we place the car at the center of the coordinate system (0, 0) and give heading of $0$ which is facing in the positive direction along the $x$ axis.

# In[17]:


dt = 0.2
T = 10

start = [0, 0, 0]
goal = [10, 4, 0]

angles = [steer(start, goal) for _ in range(100)]
lines = []

for angle in angles:
    line = [start]
    state = np.copy(start)
    v = np.random.uniform(0, 1)
    for _ in np.arange(0, T, dt):
        state = simulate(state, angle, v, dt)
        line.append(state)
    lines.append(line)
    
lines = np.array(lines)
print(lines.shape)


# Now let's visualize the path! It should be a smooth path from the start location to the goal location.

# In[18]:


for i in range(lines.shape[0]):
    plt.plot(lines[i, :, 0], lines[i, :, 1], 'b-')
plt.plot(start[0], start[1], 'bo')
plt.plot(goal[0], goal[1], 'ro')
plt.axis('equal')
plt.xlabel('X')
plt.ylabel('Y')
plt.show()


# **Ok so that kind of works! You could tighten up the allowable standard deviation of the Gaussian to aim more directly at `x2`, but things break down when `x2` is at any appreciable angle off center (try changing the y-coordinate of the `goal` location and you'll see what I mean). So in short, this is not a great solution! Can you figure out a better way to steer?**

# In[ ]:




