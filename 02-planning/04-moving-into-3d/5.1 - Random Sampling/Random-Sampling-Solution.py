#!/usr/bin/env python
# coding: utf-8

# # Random Sampling
# 
# In this notebook you'll work with the obstacle's polygon representation itself.
# 
# Your tasks will be:
# 
# 1. Create polygons.
# 2. Sample random 3D points.
# 3. Remove points contained by an obstacle polygon.
# 
# Recall, a point $(x, y, z)$ collides with a polygon if the $(x, y)$ coordinates are contained by the polygon and the $z$ coordinate (height) is less than the height of the polygon.

# In[29]:


import time
import numpy as np
import matplotlib.pyplot as plt
from shapely.geometry import Polygon, Point
get_ipython().run_line_magic('matplotlib', 'inline')


# In[30]:


plt.rcParams['figure.figsize'] = 12, 12


# In[31]:


# This is the same obstacle data from the previous lesson.
filename = 'colliders.csv'
data = np.loadtxt(filename, delimiter=',', dtype='Float64', skiprows=2)
print(data)


# ## Create Polygons

# In[32]:


print(data.shape)
print(np.max(data[:,4]))


# In[33]:


def extract_polygons(data):

    polygons = []
    for i in range(data.shape[0]):
        north, east, alt, d_north, d_east, d_alt = data[i, :]
        
        # TODO: Extract the 4 corners of each obstacle
        # 
        # NOTE: The order of the points needs to be counterclockwise
        # in order to work with the simple angle test
        # Also, `shapely` draws sequentially from point to point.
        #
        # If the area of the polygon in shapely is 0 
        # you've likely got a weird order.
        obstacle = [north - d_north, north + d_north, east - d_east, east + d_east]
        corners = [(obstacle[0], obstacle[2]), (obstacle[0], obstacle[3]), (obstacle[1], obstacle[3]), (obstacle[1], obstacle[2])]
        
        # TODO: Compute the height of the polygon
        height = alt + d_alt

        p = Polygon(corners)
        polygons.append((p, height))

    return polygons


# In[34]:


polygons = extract_polygons(data)
print(len(polygons))


# # Sampling 3D Points
# 
# Now that we have the extracted the polygons, we need to sample random 3D points. Currently we don't know suitable ranges for x, y, and z. Let's figure out the max and min values for each dimension.

# In[35]:


xmin = np.min(data[:, 0] - data[:, 3])
xmax = np.max(data[:, 0] + data[:, 3])

ymin = np.min(data[:, 1] - data[:, 4])
ymax = np.max(data[:, 1] + data[:, 4])

zmin = 0
zmax = 10
print("X")
print("min = {0}, max = {1}\n".format(xmin, xmax))

print("Y")
print("min = {0}, max = {1}\n".format(ymin, ymax))

print("Z")
print("min = {0}, max = {1}".format(zmin, zmax))


# Next, it's time to sample points. All that's left is picking the distribution and number of samples. The uniform distribution makes sense in this situation since we we'd like to encourage searching the whole space.

# In[36]:


num_samples = 100

xvals = np.random.uniform(xmin, xmax, num_samples)
yvals = np.random.uniform(ymin, ymax, num_samples)
zvals = np.random.uniform(zmin, zmax, num_samples)

samples = np.array(list(zip(xvals, yvals, zvals)))


# In[37]:


samples[:10]


# ## Removing Points Colliding With Obstacles
# 
# Prior to remove a point we must determine whether it collides with any obstacle. Complete the `collides` function below. It should return `True` if the point collides with *any* obstacle and `False` if no collision is detected.

# In[38]:


def collides(polygons, point):   
    # TODO: Determine whether the point collides
    # with any obstacles.    
    for (p, height) in polygons:
        if p.contains(Point(point)) and height >= point[2]:
            return True
    return False


# Use `collides` for all points in the sample.

# In[39]:


t0 = time.time()
to_keep = []
for point in samples:
    if not collides(polygons, point):
        to_keep.append(point)
time_taken = time.time() - t0
print("Time taken {0} seconds ...".format(time_taken))


# In[40]:


print(len(to_keep))


# ## Points Visualization

# In[41]:


from grid import create_grid
grid = create_grid(data, zmax, 1)


# In[42]:


fig = plt.figure()

plt.imshow(grid, cmap='Spectral', origin='lower')

nmin = np.min(data[:, 0])
emin = np.min(data[:, 1])

# draw points
all_pts = np.array(to_keep)
north_vals = all_pts[:,0]
east_vals = all_pts[:,1]
plt.scatter(east_vals - emin, north_vals - nmin, c='red')

plt.ylabel('NORTH')
plt.xlabel('EAST')

plt.show()


# ## Epilogue
# 
# You may have noticed removing points can be quite lengthy. We're naively checking to see if the point collides with each polygon when in reality it can only collide with one. The question when becomes 
# 
# "How do we reduce the number of polygons we are checking for collision with each point?"
# 
# One such approach is to use a *[k-d tree](https://en.wikipedia.org/wiki/K-d_tree)*, a space-partitioning data structure which allows search queries in $O(log(n))$. The *k-d tree* achieves this by cutting the search space in half on each step of a query.
# 
# This would bring the total algorithm time down to $O(m * log(n))$ from $O(m*n)$.
# 
# The scikit-learn library has an efficient implementation [readily available](http://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree).

# In[ ]:





# In[ ]:




