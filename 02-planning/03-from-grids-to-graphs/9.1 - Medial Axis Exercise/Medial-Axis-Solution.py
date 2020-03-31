#!/usr/bin/env python
# coding: utf-8

# ## Medial Axis
# 

# In[111]:


import numpy as np
import matplotlib.pyplot as plt
from grid import create_grid
from skimage.morphology import medial_axis
from skimage.util import invert
from planning import a_star
get_ipython().run_line_magic('matplotlib', 'inline')


# In[112]:


plt.rcParams['figure.figsize'] = 12, 12


# In[113]:


# This is the same obstacle data from the previous lesson.
filename = 'colliders.csv'
data = np.loadtxt(filename, delimiter=',', dtype='Float64', skiprows=2)
print(data)


# Starting and goal positions in *(north, east)*.

# In[122]:


start_ne = (25,  100)
goal_ne = (650, 500)


# In[123]:


# Static drone altitude (meters)
drone_altitude = 5
safety_distance = 2


# In[124]:


grid = create_grid(data, drone_altitude, safety_distance)
skeleton = medial_axis(invert(grid))


# Plot the edges on top of the grid along with start and goal locations.

# In[125]:


# equivalent to
# plt.imshow(np.flip(grid, 0))

plt.imshow(grid, origin='lower')
plt.imshow(skeleton, cmap='Greys', origin='lower', alpha=0.7)
    
plt.plot(start_ne[1], start_ne[0], 'rx')
plt.plot(goal_ne[1], goal_ne[0], 'rx')

plt.xlabel('EAST')
plt.ylabel('NORTH')
plt.show()


# In[126]:


def find_start_goal(skel, start, goal):
    skel_cells = np.transpose(skel.nonzero())
    start_min_dist = np.linalg.norm(np.array(start) - np.array(skel_cells), axis=1).argmin()
    near_start = skel_cells[start_min_dist]
    goal_min_dist = np.linalg.norm(np.array(goal) - np.array(skel_cells), axis=1).argmin()
    near_goal = skel_cells[goal_min_dist]
    
    return near_start, near_goal

skel_start, skel_goal = find_start_goal(skeleton, start_ne, goal_ne)

print(start_ne, goal_ne)
print(skel_start, skel_goal)


# In[127]:


def heuristic_func(position, goal_position):
    return np.sqrt((position[0] - goal_position[0])**2 + (position[1] - goal_position[1])**2)


# In[132]:


# Run A* on the skeleton
path, cost = a_star(invert(skeleton).astype(np.int), heuristic_func, tuple(skel_start), tuple(skel_goal))
print("Path length = {0}, path cost = {1}".format(len(path), cost))


# In[133]:


# Compare to regular A* on the grid
path2, cost2 = a_star(grid, heuristic_func, start_ne, goal_ne)
print("Path length = {0}, path cost = {1}".format(len(path2), cost2))


# In[134]:


plt.imshow(grid, cmap='Greys', origin='lower')
plt.imshow(skeleton, cmap='Greys', origin='lower', alpha=0.7)
# For the purposes of the visual the east coordinate lay along
# the x-axis and the north coordinates long the y-axis.
plt.plot(start_ne[1], start_ne[0], 'x')
plt.plot(goal_ne[1], goal_ne[0], 'x')

pp = np.array(path)
plt.plot(pp[:, 1], pp[:, 0], 'g')
pp2 = np.array(path2)
plt.plot(pp2[:, 1], pp2[:, 0], 'r')

plt.xlabel('EAST')
plt.ylabel('NORTH')
plt.show()


# 

# In[ ]:




