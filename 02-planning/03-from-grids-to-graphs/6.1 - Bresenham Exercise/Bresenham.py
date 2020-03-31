#!/usr/bin/env python
# coding: utf-8

# ## Bresenham 

# In[3]:


import numpy as np
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
plt.rcParams['figure.figsize'] = 12, 12


# Your task is to implement the bresenham function given two points $p_1$ and $p_2$ as inputs. The function should return the list of grid cells required to draw the line.
# 
# What conditions would warrant a move by 1 unit along the x-axis? What about along the y-axis?
# 
# The idea is to move based on whether the next $y$ value will be above or below the line from $p_1$ to $p_2$. We can keep track of the current line value, effectively $f(x)$ where $f$ is the line equation by incrementing a counter variable by the slope $m$ whenever we move in the x-axis.
# 
# The condition is then (in pseudocode):
# 
# ```
# if f(x+1) > y + 1:
#     y += 1
# else:
#     x += 1
# ```
# 
# So, if moving along the y-axis results in a y value that is below the line, then move along the y-axis, otherwise,  move in the x-axis.
# 
# But what about the case where `f(x+1) == y+1`? This will be the result of every test case when the line slope `m = 1`. In this case you have a choice to make:
# * Only identify cells that as "in collision" when the line actually passes through those cells (less conservative obstacle avoidance)
# * When the line passes directly through a corner of grid cells, identify all cells that share that corner as "in collision" (more conservative obstacle avoidance). 
# 
# These two options look like this for a line from (0, 0) to (5, 5):
# 
# ![comparison](./bresenham_comparison.png)
# 
# Try coding up both! In the event that you've padded obstacles  in your grid map with a sufficient safety margin, you can likely get away with the less conservative approach (or computer graphics based Bresenham implementation in the Python package shown below).
# 

# In[4]:


def bres(p1, p2): 
    """
    Note this solution requires `x1` < `x2` and `y1` < `y2`.
    """
    x1, y1 = p1
    x2, y2 = p2
    cells = []
    
    # TODO: Determine valid grid cells
        
    return np.array(cells)


# Plotting the line with the cells which it crosses. 

# In[5]:


p1 = (0, 0)
p2 = (7, 5)

cells = bres(p1, p2)
# print(cells)

plt.plot([p1[0], p2[0]], [p1[1], p2[1]])


for q in cells:
    plt.plot([q[0], q[0]+1], [q[1], q[1]], 'm')
    plt.plot([q[0], q[0]+1], [q[1]+1, q[1]+1], 'm')
    plt.plot([q[0], q[0]], [q[1],q[1]+1], 'm')
    plt.plot([q[0]+1, q[0]+1], [q[1], q[1]+1], 'm')

plt.grid()
plt.axis('equal')
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Integer based Bresenham algorithm")
plt.show()


# Check out our solution [here](/notebooks/Bresenham-Solution.ipynb).

# ### Python Bresenham Package
# For comparison let's have a look at the Python Bresenham package! As mentioned above, if you've added a safety margin around obstacles you are probably fine using this package or one like it that misses some cells in collision with the line.
# 
# First we need to import it:

# In[6]:


from bresenham import bresenham


# Next we can run the same experiment as above and plot it up.

# In[7]:


# Note: you can run this for any (x1, y1, x2, y2)
line = (0, 0, 7, 5)

cells = list(bresenham(line[0], line[1], line[2], line[3]))
print(cells)

plt.plot([line[0], line[2]], [line[1], line[3]])


for q in cells:
    plt.plot([q[0], q[0]+1], [q[1], q[1]], 'k')
    plt.plot([q[0], q[0]+1], [q[1]+1, q[1]+1], 'k')
    plt.plot([q[0], q[0]], [q[1],q[1]+1], 'k')
    plt.plot([q[0]+1, q[0]+1], [q[1], q[1]+1], 'k')

plt.grid()
plt.axis('equal')
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Python package Bresenham algorithm")
plt.show()


# In[ ]:




