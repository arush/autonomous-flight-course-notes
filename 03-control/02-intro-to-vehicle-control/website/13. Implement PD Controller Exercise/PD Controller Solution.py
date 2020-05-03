#!/usr/bin/env python
# coding: utf-8

# In[ ]:


get_ipython().run_line_magic('matplotlib', 'inline')
get_ipython().run_line_magic('config', "InlineBackend.figure_format = 'retina'")

get_ipython().run_line_magic('load_ext', 'autoreload')
get_ipython().run_line_magic('autoreload', '2')

import numpy as np 
import matplotlib.pyplot as plt
import matplotlib.pylab as pylab
from simplified_monorotor import Monorotor
import plotting
import testing
import trajectories

pylab.rcParams['figure.figsize'] = 10,10


# # PD controller 
# 
# #### TODO 1 - Implement PD controller
# 
# Implement the PD Controller math in `thrust_control`:
# 
# $$
# \begin{align}
# e &= z_{\text{target}} - z_{\text{actual}} \\
# \dot{e} &= \dot{z}_{\text{target}} - \dot{z}_{\text{actual}} \\
# \bar{u}_1 &= k_p e + k_d \dot{e} \\
# u_1 &= m(g - \bar{u}_1)
# \end{align}
# $$

# In[ ]:


class PDController:
    
    def __init__(self, k_p, k_d, m):
        self.k_p = k_p
        self.k_d = k_d
        self.vehicle_mass = m
        self.g = 9.81
    
    def thrust_control(self,
                z_target, 
                z_actual, 
                z_dot_target, 
                z_dot_actual,
                z_dot_dot_ff=0.0): # IGNORE this for now.
        
        err = z_target - z_actual
        err_dot = z_dot_target - z_dot_actual
        
        p_term_thrust = self.k_p * err
        d_term_thrust = self.k_d * err_dot
        
        u_bar = p_term_thrust + d_term_thrust 
        u = self.vehicle_mass * (self.g - u_bar)
        
        return u
testing.pd_controller_test(PDController, feed_forward=False)


# #### TODO 2 - Adjust parameters
# 
# Start by running the code below with K_D = 0.0. This will remind you what a P-controlled trajectory looks like. Then try slowly increasing K_D to 0.5, 1.0, 2.0, etc... 
# 
# What value of K_D gives a reasonable trajectory?
# 
# Is there a problem with setting K_D too high? 

# In[ ]:


MASS_ERROR = 1.5
K_P = 20.0
K_D = 0.0

# preparation
drone = Monorotor()
perceived_mass = drone.m * MASS_ERROR
controller = PDController(K_P, K_D, perceived_mass)

# generate trajectory
total_time = 3.0
dt = 0.001
t=np.linspace(0.0,total_time,int(total_time/dt))
z_path= -np.ones(t.shape[0])
z_dot_path = np.zeros(t.shape[0])

# run simulation
history = []
for z_target, z_dot_target in zip(z_path, z_dot_path):
    z_actual = drone.z
    z_dot_actual = drone.z_dot
    u = controller.thrust_control(z_target, z_actual, 
                                  z_dot_target, z_dot_actual)
    drone.thrust = u
    drone.advance_state(dt)
    history.append(drone.X)
    
# generate plots
z_actual = [h[0] for h in history]
plotting.compare_planned_to_actual(z_actual, z_path, t)    

