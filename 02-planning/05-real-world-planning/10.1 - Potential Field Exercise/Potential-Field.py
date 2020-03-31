#!/usr/bin/env python
# coding: utf-8

# # Potential Field
# 
# In this notebook you'll create a potential field by implementing and combining attractive and replusive forces. We can use the potential field to move in a direction closer to the goal (attraction) while avoiding obstacles (repulsion).
# 
# Recall from lecture that the attractive potential is:
# 
# $$F_{att} = \alpha * (x - x_{goal})$$
# 
# and repulsive potential, which is only computed when $d(x - x_{obs}) < Q_{max}$:
# 
# $$F_{rep} = \beta * (\frac{1}{Q_{max}} - \frac{1}{d(x - x_{obs})}) * \frac{1}{d(x - x_{obs})^2}$$
# 
# where $x_{goal}$ is the goal location, $x_{obs}$ is the obstacle location and $d(...)$ is the distance metric.

# In[1]:


import numpy as np 
import matplotlib.pyplot as plt

get_ipython().run_line_magic('matplotlib', 'inline')


# In[2]:


plt.rcParams['figure.figsize'] = 12, 12


# In[3]:


def attraction(position, goal, alpha):
    # TODO: implement attraction force
    pass


# In[4]:


def repulsion(position, obstacle, beta, q_max):
    # TODO: implement replusion force
    pass


# Below we'll generate the potential field. For the purposes of the visualization we'll compute the field for the entire environment. Generally you'll only want to compute the field within a range around the current position for use in local planning.

# In[5]:


def potential_field(grid, goal, alpha, beta, q_max):
    x = []
    y = []
    fx = []
    fy = []
    
    obs_i, obs_j = np.where(grid == 1)

    for i in range(grid.shape[0]):
        for j in range(grid.shape[1]):
            if grid[i, j] == 0:
                
                # add attraction force
                force = attraction([i, j], goal, alpha)

                for (oi, oj) in zip(obs_i, obs_j):
                    if np.linalg.norm(np.array([i, j]) - np.array([oi, oj])) < q_max:
                        # add replusion force
                        force += repulsion([i, j], [oi, oj], beta, q_max)
                    
                x.append(i)
                y.append(j)
                fx.append(force[0])
                fy.append(force[1])

    return x, y, fx, fy


# In[6]:


# generate environment
grid = np.zeros((30, 30))
grid[10:15,10:15] = 1.0
grid[17:25,10:17] = 1.0

goal  = [5, 5]

# constants
alpha = 1.0
beta = 2.0
q_max = 10


# Generating the potential field.

# In[7]:


x, y, fx, fy = potential_field(grid, goal, alpha, beta, q_max)


# Plotting the field. 

# In[8]:


plt.imshow(grid, cmap = 'Greys', origin='lower')
plt.plot(goal[1], goal[0], 'ro')
plt.quiver(y, x, fy, fx)
plt.xlabel('X')
plt.ylabel('Y')
plt.show()


# [Solution](./Potential-Field-Solution.ipynb)

# In[ ]:




