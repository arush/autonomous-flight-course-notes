#!/usr/bin/env python
# coding: utf-8

# In[ ]:


get_ipython().run_line_magic('matplotlib', 'inline')
get_ipython().run_line_magic('config', "InlineBackend.figure_format = 'retina'")

import numpy as np 
import math
import matplotlib.pyplot as plt
import matplotlib.pylab as pylab
import jdc
from ExerciseAnswers import Answers

pylab.rcParams['figure.figsize'] = 10, 10


# In this exercise you will implement three more methods in the `Drone2D` class: `z_dot_dot(self)`, `y_dot_dot(self)`, and `phi_dot_dot(self)`

# In[ ]:


class Drone2D:
    
    def __init__(self,
                 k_f = 0.1, # value of the thrust coefficient
                 I_x = 0.1, # moment of inertia around the x-axis
                 m = 1.0,   # mass of the vehicle 
                 l = 0.5,   # distance between the center of 
                            #   mass and the propeller axis
                ):
        
        self.k_f = k_f
        self.I_x = I_x
        self.l = l 
        self.m = m
        
        self.omega_1 = 0.0
        self.omega_2 = 0.0
        self.g = 9.81
        
        # z, y, phi, z_dot, y_dot, phi_dot
        self.X = np.array([0.0,0.0,0.0,0.0,0.0,0.0])
        
    def advance_state_uncontrolled(self,dt):
        """Advances the state of the drone by dt seconds. 
        Note that this method assumes zero rotational speed 
        for both propellers."""
        
        X_dot = np.array([
            self.X[3], 
            self.X[4], 
            self.X[5], 
            self.g, 
            0.0, 
            0.0])
        # Change in state will be 
        self.X = self.X + X_dot * dt
        return self.X
    
    def get_thrust_and_moment(self):
        """Helper function which calculates and returns the 
        collective thrust and the moment about the X axis"""
        # TODO - implement this function.
        
        f1 = self.k_f * self.omega_1 ** 2
        f2 = self.k_f * self.omega_2 ** 2
        
        # c is often used to indicate "collective" thrust
        c = f1 + f2
        M_x = (f1 - f2) * self.l
        return c, M_x

    @property
    def z_dot_dot(self):
        """Calculates vertical (z) acceleration of drone."""
        # TODO:
        # Calculate the vertical component of the acceleration 
        
        c, M_x = self.get_thrust_and_moment()
        
        phi = self.X[2]
        a_z = self.g - c * math.cos(phi) / self.m
        return a_z

    @property    
    def y_dot_dot(self):
        """Calculates lateral (y) acceleration of drone."""
        # TODO:
        # Calculate the horizontal component of the acceleration 
        
        c, M_x = self.get_thrust_and_moment()
        
        phi = self.X[2]
        a_y = c * math.sin(phi) / self.m
        return a_y
    
    @property
    def phi_dot_dot(self):
        # TODO:
        # Calculate the angular acceleration along the x-axis. 
        
        c, M_x = self.get_thrust_and_moment()
        angular_acc = M_x / self.I_x
        return angular_acc


# In[ ]:


# TESTING CODE
# 
# run this cell to see how if your functions are working.

def equal_floats(num1, num2):
    return abs(num1 - num2) < 0.00001
 
drone = Drone2D(m=1.0, I_x=1.5, k_f=1.0)
drone.omega_1 = 1.0 
drone.omega_2 = 2.0

# tilt the test drone to 30 degrees
drone.X[2] = math.pi / 6

# test z_dot_dot
if equal_floats(drone.z_dot_dot, 5.47987):
    print("z_dot_dot works")
else:
    print("  ERROR in z_dot_dot")

# test y_dot_dot
if equal_floats(drone.y_dot_dot, 2.50):
    print("y_dot_dot works")
else:
    print("  ERROR in y_dot_dot")
    
# test y_dot_dot
if equal_floats(drone.phi_dot_dot, -1):
    print("phi_dot_dot works")
else:
    print("  ERROR in phi_dot_dot")


# 
# ### Pseudocode solutions
# 
# `z_dot_dot`
# > $$c = F_1 + F_2$$
# >
# > $$\ddot{z} = g - \cos(\phi) \frac{c}{m}$$
# 
# `y_dot_dot`
# > $$c = F_1 + F_2$$
# >
# > $$\ddot{y} = \sin(\phi) \frac{c}{m}$$
# 
# `phi_dot_dot`
# > $$M_x = L(F_1 - F_2)$$
# >
# > $$\ddot{\phi} = \frac{M_x}{I_x}$$

# -----

# In[ ]:




