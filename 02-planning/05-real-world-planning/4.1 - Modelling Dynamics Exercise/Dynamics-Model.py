#!/usr/bin/env python
# coding: utf-8

# In this notebook, you'll have an opportunity to play with $dt$ to see its effect on a simple model:
# 
# $\dot{y} = -y$
# 
# Given a small enough $dt$ value this model approximates $y = e^{-t}$ accurately.

# In[1]:


import numpy as np
import matplotlib.pyplot as plt

get_ipython().run_line_magic('matplotlib', 'inline')


# In[2]:


plt.rcParams['figure.figsize'] = 12, 12


# `simulate()` is the discrete version of the above differential equation.

# In[3]:


def simulate(y, dt):
    return y - y * dt


# After the intial run, change the value of $dt$ to get a feel for how its effect on the approximation. 

# In[4]:


total_time = 10
# TODO: change the value of dt
dt = 0.1
timesteps = np.arange(0, total_time, dt)


# In[5]:


# Initial value of y is 1
ys = [1]

for _ in timesteps:
    y = simulate(ys[-1], dt)
    ys.append(y)
    
plt.plot(timesteps, ys[:-1], color='blue')
plt.ylabel('Y')
plt.xlabel('Time')
plt.title('Dynamics Model')
plt.legend()
plt.show()


# In[ ]:





# In[ ]:




