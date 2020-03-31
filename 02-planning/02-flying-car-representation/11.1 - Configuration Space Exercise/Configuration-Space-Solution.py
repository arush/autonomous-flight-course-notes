#!/usr/bin/env python
# coding: utf-8

# ## Confguration Space
# 
# In this notebook you'll create a configuration space given a map of the world and setting a particular altitude for your drone. You'll read in a `.csv` file containing obstacle data which consists of six columns $x$, $y$, $z$ and $\delta x$, $\delta y$, $\delta z$.
# 
# You can look at the `.csv` file [here](/edit/colliders.csv). The first line gives the map center coordinates and the file is arranged such that:
# 
# * $x$ -> NORTH
# * $y$ -> EAST
# * $z$ -> ALTITUDE (+)
# 
# Each $(x, y, z)$ coordinate is the center of the obstacle. $\delta x$, $\delta y$, $\delta z$ are the half widths of the obstacles, meaning for example that an obstacle with $(x = 37, y = 12, z = 8)$ and $(\delta x = 5, \delta y = 5, \delta z = 8)$ is a 10 x 10 m obstacle that is 16 m high and centered at the point $(37, 12, 8)$.
# 
# Given a map like this, the free space in the $(x, y)$ plane is a function of altitude, and you can plan a path around an obstacle, or simply fly over it! You'll extend each obstacle by a safety margin to create the equivalent of a 3 dimensional configuration space. Your task is to extract a 2D map of your configuration space for a particular altitude, where each value is assigned either a 0 or 1 representing feasible or infeasible (obstacle) spaces respectively.

# The end result should look something like this ... (colours aren't important)
# 
# ![title](grid_map.png)

# In[1]:


import numpy as np 
import matplotlib.pyplot as plt

get_ipython().run_line_magic('matplotlib', 'inline')


# In[2]:


plt.rcParams["figure.figsize"] = [12, 12]


# Read the csv file which contains the coordinates of the obstacles. 

# In[3]:


filename = 'colliders.csv'
# Read in the data skipping the first two lines.  
# Note: the first line contains the latitude and longitude of map center
# Where is this??
data = np.loadtxt(filename,delimiter=',',dtype='Float64',skiprows=2)
print(data)


# In[4]:


# Static drone altitude (metres)
drone_altitude = 60

# Minimum distance required to stay away from an obstacle (metres)
# Think of this as padding around the obstacle.
safe_distance = 5


# The given function will take the data from the file describing the obstacles city and will return a 2D grid representation showing open and closed spaces.

# In[5]:


def create_grid(data, drone_altitude, safety_distance):
    """
    Returns a grid representation of a 2D configuration space
    based on given obstacle data, drone altitude and safety distance
    arguments.
    """

    # minimum and maximum north coordinates
    north_min = np.floor(np.min(data[:, 0] - data[:, 3]))
    north_max = np.ceil(np.max(data[:, 0] + data[:, 3]))

    # minimum and maximum east coordinates
    east_min = np.floor(np.min(data[:, 1] - data[:, 4]))
    east_max = np.ceil(np.max(data[:, 1] + data[:, 4]))

    # given the minimum and maximum coordinates we can
    # calculate the size of the grid.
    north_size = int(np.ceil(north_max - north_min))
    east_size = int(np.ceil(east_max - east_min))

    # Initialize an empty grid
    grid = np.zeros((north_size, east_size))

    # Populate the grid with obstacles
    for i in range(data.shape[0]):
        north, east, alt, d_north, d_east, d_alt = data[i, :]
        if alt + d_alt + safety_distance > drone_altitude:
            obstacle = [
                int(np.clip(north - d_north - safety_distance - north_min, 0, north_size-1)),
                int(np.clip(north + d_north + safety_distance - north_min, 0, north_size-1)),
                int(np.clip(east - d_east - safety_distance - east_min, 0, east_size-1)),
                int(np.clip(east + d_east + safety_distance - east_min, 0, east_size-1)),
            ]
            grid[obstacle[0]:obstacle[1]+1, obstacle[2]:obstacle[3]+1] = 1

    return grid


# In[6]:


grid = create_grid(data, drone_altitude, safe_distance)


# In[7]:


# equivalent to
# plt.imshow(np.flip(grid, 0))
plt.imshow(grid, origin='lower') 

plt.xlabel('EAST')
plt.ylabel('NORTH')
plt.show()


# Play around with the `drone_altitude` and `safe_distance` values to get a feel for how it changes the map.

# In[ ]:




