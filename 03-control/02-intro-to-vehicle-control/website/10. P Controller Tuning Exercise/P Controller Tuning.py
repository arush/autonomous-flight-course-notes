#!/usr/bin/env python
# coding: utf-8

# In[7]:


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


# In[8]:


from controllers import PController


# #### TODO - Adjust k_p
# 
# Try to get rid of the oscillations by adjusting K_P. Is it possible?
# 
# If so, how?
# 
# If not, think about what else you mightb be able to do to damp out these oscillations.

# In[9]:


MASS_ERROR = 1.01
K_P = 2.0

# preparation
drone = Monorotor()
perceived_mass = drone.m * MASS_ERROR
controller = PController(K_P, perceived_mass)

# generate trajectory
total_time = 10.0
dt = 0.001
t=np.linspace(0.0,total_time,int(total_time/dt))
z_path= -np.ones(t.shape[0])

# run simulation
history = []
for z_target in z_path:
    z_actual = drone.z
    u = controller.thrust_control(z_target, z_actual)
    drone.thrust = u
    drone.advance_state(dt)
    history.append(drone.X)
    
# generate plots
z_actual = [h[0] for h in history]
plotting.compare_planned_to_actual(z_actual, z_path, t)    


# In[ ]:




